
// mental map
// 1. DATA       → Array of quotes ✅
// 2. GRAB       → Button element + Quote paragraph element ✅
// 3. LISTEN     → Add click event listener on button ✅
// 4. RANDOMIZE  → Math.floor(Math.random() * array.length) ✅
// 5. UPDATE     → Set paragraph's textContent to the picked quote ✅




const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Imagination is more important than knowledge. – Albert Einstein",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Hard work beats talent when talent doesn't work hard. – Tim Notke",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The mind is everything. What you think you become. – Buddha",
    "An unexamined life is not worth living. – Socrates",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt"
];

const btn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");




btn.addEventListener("click", function(){
    const index = Math.floor(Math.random() * quotes.length); // 0-19
    quote.textContent = quotes[index];

})

 