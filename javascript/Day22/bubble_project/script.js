const messages = [
    "Hi! 👋",
    "Boom! 💥",
    "Pop! 🎈",
    "Wow! ✨",
    "Yay! 🎉",
    "Cool! 😎",
    "Boop! 👆",
    "Snap! 🫰",
    "Zing! ⚡",
    "Poof! 💨"
];


const colors = [
    "#FF6B6B",  // coral red
    "#4ECDC4",  // teal
    "#FFE66D",  // yellow
    "#A855F7",  // purple
    "#FF8C42",  // orange
    "#2ECC71",  // green
    "#3B82F6",  // blue
    "#F472B6",  // pink
    "#06B6D4",  // cyan
    "#EF4444",  // red
];

document.addEventListener("click", function (event) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    const x = event.clientX;
    const y = event.clientY;
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    circle.textContent = randomMsg;

    circle.style.left = x - 100 + "px";
    circle.style.top = y - 100 + "px";



    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;



    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 4000);

})

