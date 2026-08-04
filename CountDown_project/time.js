// Function to generate a random background color
function setRandomBackground() {
    // Generate a random hue (0 to 360)
    // We use HSL to make sure the background remains dark and the white text stays readable.
    const hue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${hue}, 60%, 20%)`;

    // Apply the color to the body element so the entire page background changes
    document.body.style.backgroundColor = randomColor;
}

// Run the function as soon as the page loads
document.addEventListener('DOMContentLoaded', setRandomBackground);




function updateCountdown() {
    const targetDate = new Date("July 21, 2028 00:00:00");
    const now = new Date();
    const diff = targetDate - now;

// Check if the countdown has finished
    if (diff <= 0) {
        document.getElementById("time").textContent = "00 : 00 : 00 : 00";
        return;
    }


    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);


    document.getElementById("time").textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

setInterval(updateCountdown, 1000);

updateCountdown();
