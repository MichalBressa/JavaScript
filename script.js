
/*  choice rules:
    0 = Rock
    1 = Paper
    2 = Scissors

*/

const choices = new Map([
    ["ROCK", 0],
    ["PAPER", 1],
    ["SCISSORS", 2]
]);

/* Following numerical value of choices map (Rock = 0, Paper = 1, Scissors = 2)
The map below has a form of "X beats Y" so Rock 0 beats Scissors 2 -> [0, 2] and so on
*/ 
const resultCheckTable = new Map([
    [0, 2],
    [1, 0],
    [2, 1]
]);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerChoice(){
    return getRandomInt(3);
}

function playerChoice(){
    let input = prompt("Choose Rock, Paper or Scissors by typing the name below:");
    input = input.toUpperCase();
    while (!choices.has(input))
    {
        console.log(input);
        input = prompt("Something went wrong, please choose Rock, Paper or Scissors by typing the name below:");
        input =input.toUpperCase();
    }
    return choices.get(input);
}

let playerScore=0;
let computerScore=0;

// Result takes two parameters: both are integers representing choices 
function Result(_playerChoice, _computerChoice){
    
    if(_playerChoice == _computerChoice){
        // draw
        console.log("Draw!");
    } else if (resultCheckTable.get(_playerChoice) == _computerChoice){
        playerScore++;
        // allert - player won
        console.log("Player won!");
    } else if (resultCheckTable.get(_computerChoice) == _playerChoice){
        //machine won
        computerScore++;
        console.log("Computer won!");
    }

    console.log("Player score: " + playerScore + "\nComputer score: " + computerScore);
}

console.log('Hello there, to play use "Start" function');

Result(playerChoice(), computerChoice());