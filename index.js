let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    const randomChoice = Math.floor(Math.random() * 3) + 1; 
    let choice = "";

    switch(randomChoice){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice;
}

function playRound(humanChoice){

    const computerChoice = getComputerChoice();
    humanDisplay.textContent = `You chose: ${humanChoice.toUpperCase()}`;
    computerDisplay.textContent = `The Machine chose: ${computerChoice.toUpperCase()}`;
    
    let roundResultMessage = "";
    
  if (humanChoice === computerChoice){
    roundResultMessage = "Neither human nor machine prevail!";
        
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        humanScore++;
        roundResultMessage = "Humanity wins this round!"
    }
    else {
        computerScore++;
        roundResultMessage = "Machine wins this round!"
    }

    resultDisplay.textContent = `${roundResultMessage} Score - Human: ${humanScore} | Machine: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (humanScore === 5){
        resultDisplay.textContent = `Humanity wins the ultimate battle! Final Score - Human: ${humanScore} | Machine: ${computerScore}`;
    } else {
        resultDisplay.textContent = `Game Over! Machine has taken over the world! Final Score - Human: ${humanScore} | Machine: ${computerScore}`;
    }

    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    humanDisplay.textContent = "Waiting for your choice...";
    computerDisplay.textContent = "Computer is waiting for your move...";
    resultDisplay.textContent = "";
}

    const playGame = document.createElement("div");
    playGame.textContent = "Click a button to start the game!";
    document.body.appendChild(playGame);   

    const btnRock = document.createElement("button");
    btnRock.addEventListener("click", () => playRound("rock"));
    btnRock.textContent = "Rock";
    document.body.appendChild(btnRock);

    const btnPaper = document.createElement("button");
    btnPaper.addEventListener("click", () => playRound("paper"));
    btnPaper.textContent = "Paper";
    document.body.appendChild(btnPaper);

    const btnScissors = document.createElement("button");
    btnScissors.addEventListener("click", () => playRound("scissors"));
    btnScissors.textContent = "Scissors";
    document.body.appendChild(btnScissors);

    const humanDisplay = document.createElement("div");
    humanDisplay.textContent = "Waiting for your choice...";
    document.body.appendChild(humanDisplay);

    const computerDisplay = document.createElement("div");
    computerDisplay.textContent = "";
    document.body.appendChild(computerDisplay);

    const resultDisplay = document.createElement("div");
    resultDisplay.textContent = "";
    document.body.appendChild(resultDisplay);

    const btnPlayAgain = document.createElement("button");
    btnPlayAgain.addEventListener("click", () => resetGame());
    btnPlayAgain.textContent = "Play Again!";
    document.body.appendChild(btnPlayAgain);

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach (button => {
        button.classList.add("uniform-button");
    })

    const allElements = document.querySelectorAll("div");
    allElements.forEach (element => {
        element.classList.add("uniform-text-content");
    });


