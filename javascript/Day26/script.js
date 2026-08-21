//print the id on the console 

const board = document.getElementById("board");

let playerX = 0;
let playerO = 0;
let draw = 0;
let turn = "O"
let total_turn = 0;
let winner = [
    //col
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    //row
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagonal  
    [0,4,8],
    [2,4,6]
]

function checkWinner(){
    for(let [index0, index1, index2] of winner){
        if(empty_board[index0] !== 'E' && empty_board[index0] === empty_board[index1] && empty_board[index1] === empty_board[index2]){
            return 1;
        }
    }
    return 0;
}



const empty_board = new Array(9).fill('E');




board.addEventListener('click', (e)=>{


    const element = e.target;

    if(empty_board[element.id] === 'E'){
        total_turn++;
        if(turn === "O"){
        element.textContent = "O";
        empty_board[element.id] = 'O';
        if(checkWinner()){
            document.getElementById("winnerText").textContent = "🎉 Player O Wins!";
            document.getElementById("overlay").classList.add("active");
            playerO++;
            document.getElementById("scoreO").textContent = `${playerO}`;
            return;
        }



        turn = "X";
        }else{
            element.textContent = "X";
            empty_board[element.id] = 'X';

            if(checkWinner()){
                document.getElementById("winnerText").textContent = "🎉 Player X Wins!";
                document.getElementById("overlay").classList.add("active");
                playerX++;
                document.getElementById("scoreX").textContent = `${playerX}`;
                return;
            }
            turn = "O";
        }
        
    }
    if(total_turn === 9){
    
    document.getElementById("winnerText").textContent = "Draw!";
    document.getElementById("overlay").classList.add("active");
    draw++;
    document.getElementById("scoreDraw").textContent = `${draw}`; 
}

console.log(total_turn)

    
})


function restartGame(){

        const cell = document.getElementsByClassName('cell');

        Array.from(cell).forEach((value)=>{
            value.textContent = '';
            empty_board[value.id] = 'E';
        })
        total_turn = 0;
        turn = "O";
        

}



document.getElementById('playAgainBtn').addEventListener('click', () =>{
    restartGame();
    document.getElementById("overlay").classList.remove("active");

})

document.getElementById('restartBtn').addEventListener('click', () => {
    restartGame();
})


