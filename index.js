//Step 2: Computer Choice (Hint provided: Math.random Method)

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
    console.log(`Computer choice: ${choice}`);
    return choice;
}
   
//Step 3: Human Choice (Hint provided: Prompt Method)

function getHumanChoice (){
    let userInput = prompt("Ready to battle... Rock, Paper or Scissors?").toLowerCase();  //.toLowerCase is part of step 5
    let choice = "";

    switch(userInput){
        case "rock":
            choice = "rock";
            break;
        case "paper":
            choice = "paper";
            break;
        case "scissors":
            choice = "scissors";
            break;  
    }  
    console.log(`Human Choice: ${choice}`);
    return choice; 
}
  
//Step 4: Declare Score Variables 

let humanScore = 0;
let computerScore = 0;

//Step 5: Logic for a single round

function playRound(humanChoice, computerChoice){
    
  if (humanChoice === computerChoice){
        console.log("Neither the human nor the machine prevails!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )
    {
        humanScore++;
        console.log("Humanity wins this round!");
    }
    else {
        computerScore++;
        console.log("Machine takes over the world!")
    }
    console.log (`SCORE  Human: ${humanScore} | Computer: ${computerScore}`);
}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    //Step 6: Logic to play entire game (5 rounds)

    function playGame(){
        
    }