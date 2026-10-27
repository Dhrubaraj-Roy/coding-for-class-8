require("dotenv").config();
const readlineSync = require("readline-sync");
const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function callLLM(prompt) {
    const response = await client.responses.create({
        model: "openai/gpt-oss-20b",
        input: prompt,
    });
    return response.output_text;
}

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

async function getWeather(city, date) {
    try {
        // Build the API URL
        let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}`;
        if (date) {
            apiUrl += `&dt=${date}`;
        }

        // Fetch weather data from WeatherAPI
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Handle API errors
        if (data.error) {
            return {
                city: city,
                date: date || "today",
                error: data.error.message
            };
        }

        // Extract temperature and weather condition
        const temp = data.current?.temp_c 
            ?? data.forecast?.forecastday?.[0]?.day?.avgtemp_c 
            ?? "N/A";

        const condition = data.current?.condition?.text 
            ?? data.forecast?.forecastday?.[0]?.day?.condition?.text 
            ?? "Clear";

        return {
            city: data.location?.name || city,
            date: date || "today",
            temp: `${temp}°C`,
            condition: condition
        };
    } catch (err) {
        return {
            city: city,
            date: date || "today",
            error: err.message
        };
    }
}

const history = [];

async function chatting(userPrompt) {
    // 1. Save user prompt into conversation history
    history.push({
        role: "user",
        parts: [{ text: userPrompt }]
    });

    // 2. Ask the LLM to extract city name(s) and date(s)
    const todayDate = new Date().toISOString().split("T")[0];

    const extractionPrompt = `
You are an AI assistant. Extract the city name(s) and date(s) from the user's message.
Today's date is: ${todayDate}

Respond ONLY with a valid JSON array in this exact format:
[
  { "city": "CityName", "date": "YYYY-MM-DD" }
]

Rules:
- If the user says "today" or mentions no date, use "${todayDate}".
- If the user asks about multiple cities (e.g. "Delhi and Mumbai"), include an object for each city.
- If the message is not asking for weather, return an empty array: []
- Output only the JSON. Do not write markdown or code blocks.

User Message: "${userPrompt}"
`;

    let locations = [];
    try {
        const rawResponse = await callLLM(extractionPrompt);
        const cleanJson = rawResponse.replace(/```json|```/g, "").trim();
        locations = JSON.parse(cleanJson);
    } catch (error) {
        locations = [];
    }

    let finalReply = "";

    // 3. If weather locations were found, fetch weather and generate friendly advice
    if (Array.isArray(locations) && locations.length > 0) {
        const weatherReports = await Promise.all(
            locations.map((loc) => getWeather(loc.city, loc.date))
        );

        // Format weather summaries for the AI
        const weatherSummary = weatherReports
            .map((report) => {
                if (report.error) {
                    return `${report.city}: ${report.error}`;
                }
                return `${report.city} (${report.date}): ${report.temp}, ${report.condition}`;
            })
            .join("; ");

        const advicePrompt = `
User question: "${userPrompt}"
Fetched weather data: ${weatherSummary}

Instructions:
- State the temperature and weather condition for each city clearly.
- Give caring and fun advice based on the weather (e.g., if hot or rainy, suggest staying inside, enjoying chai and pakoras, or staying hydrated).
`;

        finalReply = await callLLM(advicePrompt);
    } else {
        // Normal conversation if no weather location was asked
        finalReply = await callLLM(userPrompt);
    }

    // 4. Save AI response into conversation history
    history.push({
        role: "model",
        parts: [{ text: finalReply }]
    });

    return finalReply;
}


// Main interactive terminal loop
async function main() {
    console.log("Weather AI Agent is ready! Type your message (or 'exit' to quit):\n");
    while (true) {
        const msg = readlineSync.question("You: ");
        if (msg.toLowerCase() === "exit") break;
        if (!msg.trim()) continue;

        const reply = await chatting(msg);
        console.log(`\nAI: ${reply}\n`);
    }
}

main();