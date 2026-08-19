// // Correct answers for each question
// const answers = {
//     q1: "a",  // var myVar = 10;
//     q2: "b",  // console.log()
//     q3: "c",  // Compares both value and type
//     q4: "c",  // Float (not a JS data type)
//     q5: "c"   // "object" (typeof null returns "object")
// };

// document.getElementById("submitBtn").addEventListener("click", function () {
//     let score = 0;
//     let total = Object.keys(answers).length;

//     for (let question in answers) {
//         let selected = document.querySelector(`input[name="${question}"]:checked`);
//         if (selected && selected.value === answers[question]) {
//             score++;
//         }
//     }

//     let resultEl = document.getElementById("result");
//     resultEl.textContent = `You scored ${score} out of ${total}!`;

//     if (score === total) {
//         resultEl.style.color = "#38a169"; // green
//     } else if (score >= 3) {
//         resultEl.style.color = "#d69e2e"; // yellow
//     } else {
//         resultEl.style.color = "#e53e3e"; // red
//     }
// });


const ans = {
    q1: "a",  // var myVar = 10;
    q2: "b",  // console.log()
    q3: "c",  // Compares both value and type
    q4: "c",  // Float (not a JS data type)
    q5: "c"   // "object" (typeof null returns "object")
};


const sub = document.getElementById('submitBtn');
sub.addEventListener('click', () => {
    let score = 0;
    let total = Object.keys(ans).length;

    for (let q in ans) {
        const selected = document.querySelector(`input[name=${q}]:checked`)
        if (selected && selected.value === ans[q]) {
            score++;
        }
    }

    document.getElementById('result').textContent = `You scored ${score} out of ${total}`;


})


