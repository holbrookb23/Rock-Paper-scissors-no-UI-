//set score
let ties = 0;
let wins = 0;
let losses = 0;

// create a prompt to start the game
function playGame() {
    //available choices
    let options = ["p", "r", "s"]
    // set choice
    let choice = prompt("enter r, p, or s").toLowerCase();

    //get computer choice
    let i = Math.floor(Math.random() * options.length);
    let computerChoice = options[i];
    alert(`Computer choice: ${computerChoice}`)

    // see who wins
    if (choice === computerChoice) {
        alert("its a tie!");
        ties++;
    } else if ( (choice === "p" && computerChoice === "r") ||
              (choice === "r" && computerChoice === "s") || 
              (choice === "s" && computerChoice === "p")) {
        alert("you are awesome!");
        wins++;
    } else {
        alert("the computers have won");
        losses++;
    }

    //show score
    alert(`wins: ${wins}     ties: ${ties}    losses: ${losses}`)

    //play again
    let playAgain = confirm("Would you like to play again?");
    if (playAgain === true) {
        playGame();
    }



}







// play game
playGame()