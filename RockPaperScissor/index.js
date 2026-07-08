let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const genComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    console.log(randIdx);
    return options[randIdx];
};
const drawGame = () =>{
    msg.innerText = "Draw Game, Play again!";
    msg.style.background ="#081b32"
};

const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win !";
        msg.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose !";
        msg.style.background = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const comChoice = genComChoice();
    console.log("Com Choice = ",comChoice);

    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // Paper, scissors
            userWin = comChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            // scissors, rock
            userWin = comChoice === "scissors"? false : true;
        }
        else{
            // rock, paper
            userWin = comChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
