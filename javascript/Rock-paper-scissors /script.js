const choise = ['Rock', 'Paper','Scissors'];

function getComputerChoise(){
    const random = Math.floor(Math.random() * choise.length);
    // console.log(choise[random])
    return(choise[random]);
    
    
}


let player1_choise = getComputerChoise();
let player2_choise = getComputerChoise();


document.getElementById('start-btn').addEventListener('click',()=>{
    if(player1_choise == player2_choise && player1_choise != 'E'){
        document.getElementById('player1-choice').textContent = player1_choise;
        document.getElementById('player2-choice').textContent = player2_choise;
        document.getElementById('result').textContent = "Draw!";
    }
    else if(player1_choise == "Rock" && player2_choise == "Scissors"){
        document.getElementById('player1-choice').textContent = player1_choise;
        document.getElementById('player2-choice').textContent = player2_choise;
        document.getElementById('result').textContent = "Player 1 wins!";
    }
    else if(player1_choise == "Paper" && player2_choise == "Rock"){
        document.getElementById('player1-choice').textContent = player1_choise;
        document.getElementById('player2-choice').textContent = player2_choise;
        document.getElementById('result').textContent = "Player 1 wins!";
    }
    else if(player1_choise == "Scissors" && player2_choise == "Paper"){
        document.getElementById('player1-choice').textContent = player1_choise;
        document.getElementById('player2-choice').textContent = player2_choise;
        document.getElementById('result').textContent = "Player 1 wins!";
    }
    else{
        document.getElementById('player1-choice').textContent = player1_choise;
        document.getElementById('player2-choice').textContent = player2_choise;
        document.getElementById('result').textContent = "Player 2 wins!";
    }
})



document.getElementById('re-start').addEventListener('click', ()=>{
    document.getElementById('player1-choice').textContent = "❓";
    document.getElementById('player2-choice').textContent = "❓";
    document.getElementById('result').textContent = "";
    player1_choise = getComputerChoise();
    player2_choise = getComputerChoise();
    
    console.log(player1_choise);
    console.log(player2_choise);
})

