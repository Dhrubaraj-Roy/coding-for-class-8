
const OpenAI = require("openai");
const client = new OpenAI({
    apiKey: "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",
    baseURL: "https://api.groq.com/openai/v1",
});

async function main(msg) {
    const response = await client.responses.create({
        model: "openai/gpt-oss-20b",
        input: msg,
    });
    return response.output_text;
}


module.exports = main;