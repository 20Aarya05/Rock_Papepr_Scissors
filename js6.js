let btns = document.querySelectorAll(".box");
let currval = "ROCK";
let compval = document.querySelector(".compd");
let winner = document.querySelector(".winning");
let tie = document.querySelector(".tie");
let loosing = document.querySelector(".loosing");
let playerscore = document.querySelector(".playerscore");
let compscore = document.querySelector(".compscore");
let tiescore = document.querySelector(".tie-score");
let playerScore = 0;
let compScore = 0;
let tieScore = 0;
let gameon = true;
let loop;

winner.style.visibility = "hidden";
tie.style.visibility = "hidden";
loosing.style.visibility = "hidden";

btns.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameon) {
            clearInterval(loop);
            wincheck(box.innerText, compval.innerText);
        }
    });
});

function wincheck(playerchoice, compval) {
    gameon = false;
    if (playerchoice == "ROCK" && compval == "PAPER") {
        loosing.style.animation = "blink 2s infinite";
        compscore.innerText= "Computer Score: " + ++compScore;
    }
    else if (playerchoice == "ROCK" && compval == "SCISSOR") {
        winner.style.animation = "blink 2s infinite";
        playerscore.innerText = "Player Score: " + ++playerScore;
    }
    else if (playerchoice == "ROCK" && compval == "ROCK") {
        tie.style.animation = "blink 2s infinite";
        tiescore.innerText = "Tie Count: " + ++tieScore;
    }
    else if (playerchoice == "PAPER" && compval == "SCISSOR") {
        loosing.style.animation = "blink 2s infinite";
        compscore.innerText = "Computer Score: " + ++compScore;
    }
    else if (playerchoice == "PAPER" && compval == "ROCK") {
        winner.style.animation = "blink 2s infinite";
        playerscore.innerText = "Player Score: " + ++playerScore;
    }
    else if (playerchoice == "PAPER" && compval == "PAPER") {
        tie.style.animation = "blink 2s infinite";
        tiescore.innerText = "Tie Count: " + ++tieScore;
    }
    else if (playerchoice == "SCISSOR" && compval == "ROCK") {
        loosing.style.animation = "blink 2s infinite";
        compscore.innerText = "Computer Score: " + ++compScore;
    }
    else if (playerchoice == "SCISSOR" && compval == "PAPER") {
        winner.style.animation = "blink 2s infinite";
        playerscore.innerText = "Player Score: " + ++playerScore;
    }
    else if (playerchoice == "SCISSOR" && compval == "SCISSOR") {
        tie.style.animation = "blink 2s infinite";
        tiescore.innerText = "Tie Count: " + ++tieScore;
    }
    setTimeout(() => {
        loosing.style.animation = "none";
        winner.style.animation = "none";
        tie.style.animation = "none";   
        winner.style.visibility = "hidden";
        tie.style.visibility = "hidden";
        loosing.style.visibility = "hidden";
        loopcaller();
        gameon = true;
    }, 1500);
}

loopcaller();

function loopcaller(){
    clearInterval(loop);
    loop = setInterval(comploop, 25);
}


function comploop() {
    compval.innerText = currval;
    if (currval === "ROCK") {
        currval = "PAPER";
    }
    else if (currval === "PAPER") {
        currval = "SCISSOR";
    }
    else if (currval == "SCISSOR") {
        currval = "ROCK";
    }
}

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    location.reload();
});
