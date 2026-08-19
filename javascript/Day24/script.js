const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // const fname = document.getElementById('fname').value;
    // const lname = document.getElementById('lname').value;
    // const age = document.getElementById('age').value;

    // const result = document.getElementsByClassName('result').textContent = `${fname} ${lname} is a good boy`;
    // document.body.append(result);

    //optimized cide

    const data = new FormData(form);
    console.log(Array.from(data.values()))

});

