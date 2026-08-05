const quotes = [
  "Believe in yourself and all that you are.",
  "Success begins with self-discipline.",
  "Small steps every day lead to big results.",
  "Dream big. Start small. Act now.",
  "The best way to predict the future is to create it.",
  "Don't wait for opportunity. Create it.",
  "Your only limit is your mindset.",
  "Failure is a lesson, not the end.",
  "Progress is better than perfection.",
  "Hard work beats talent when talent doesn't work hard.",
  "Stay focused and never give up.",
  "Every expert was once a beginner.",
  "Discipline is the bridge between goals and success.",
  "Push yourself because no one else will do it for you.",
  "Success is the sum of small efforts repeated daily.",
  "Be stronger than your excuses.",
  "The harder you work, the luckier you become.",
  "Great things take time.",
  "Consistency creates success.",
  "Your future depends on what you do today."
];



function after_2sec(){
    const n = Math.floor(Math.random() * quotes.length);
    const quote_txt = document.getElementById('txt');
    const q = quotes[n];
    quote_txt.innerText = q;

}

const btn = document.getElementById('btn')

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        after_2sec();
    }
});