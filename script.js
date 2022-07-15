let playerScore=0;
let computerScore=0;
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
    // could simply "return getRandomInt(3)" but I used extra viariable for debugging
    const computerChoice = getRandomInt(3);
  //  console.log("Computer choice: " + computerChoice)
    return computerChoice;
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
    //console.log("Player choice: " + choices.get(input));
    return choices.get(input);
}

// Result takes two parameters: both are integers representing choices 
function playRound(_playerChoice, _computerChoice){
    if(_playerChoice == _computerChoice){
        console.log("Draw!");
    } else if (resultCheckTable.get(_playerChoice) == _computerChoice){
        playerScore++;
        console.log("Player won!");
    } else if (resultCheckTable.get(_computerChoice) == _playerChoice){
        computerScore++;
        console.log("Computer won!");
    }
    console.log("Player score: " + playerScore + "\nComputer score: " + computerScore);
}
// Play 5 rounds
function game(){
    for (let i = 0; i <5; i++){
        playRound(playerChoice(), computerChoice());
    }
}

game();

/*  My alternative way of playing game as long as player wants

// Asking player if he wants to play again or not
while (true){
    let input = prompt("If you want to play again type 'Y', or 'N' to exit");
    if(input == "y" || input == "Y"){
        playRound(playerChoice(), computerChoice());
    }
    else if(input == "n" || input == "N"){
        break;
    }else{
        input = prompt("Please try again. If you want to play again type 'Y', or 'N' to exit");
    }
}
*/