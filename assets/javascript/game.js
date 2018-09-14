var totalWins = 0;
var totalLosses = 0;
var goalNum = "Press Gems";
var scoreNum = 0;
var emeraldNum;
var diamondNum;
var amberNum;
var rubyNum;


var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var goal = document.getElementById("goal");
var score = document.getElementById("score");
var ruby = document.getElementById("ruby");
var diamond = document.getElementById("diamond");
var amber = document.getElementById("amber");
var emerald = document.getElementById("emerald");

function showStats() {
    wins.textContent = "Wins: " + totalWins;
    losses.textContent = "Losses: " + totalLosses;
    goal.textContent = "Goal: " + goalNum;
    score.textContent = "You have: " + scoreNum;

    if (scoreNum > goalNum) {
        totalLosses++;
        scoreNum = 0;
        goalNum = "You LOSE!!";
        score.textContent = "You have: " + scoreNum;
        goal.textContent = "Goal: " + goalNum;
        runGame();


    }

    else if (scoreNum == goalNum) {
        totalWins++;
        scoreNum = 0;
        goalNum = "WINNER!!!";
        goal.textContent = "Goal: " + goalNum;
        score.textContent = "You have: " + scoreNum;
        runGame();
    }
    

}


function startGame() {
    emeraldNum = Math.floor((Math.random() * 12) + 1);
    rubyNum = Math.floor((Math.random() * 12) + 1);
    diamondNum = Math.floor((Math.random() * 12) + 1);
    amberNum = Math.floor((Math.random() * 12) + 1);
    goalNum = Math.floor((Math.random() * 120) + 19);
    var scoreNum = 0;
}


console.log(rubyNum);
function runGame() {
    startGame();
        ruby.onclick = function () {
            scoreNum = scoreNum + rubyNum;
            showStats();
        }
        diamond.onclick = function () {
            scoreNum = scoreNum + diamondNum;
            showStats();
        }
        amber.onclick = function () {
            scoreNum = scoreNum + amberNum;
            showStats();
        }
        emerald.onclick = function () {
            scoreNum = scoreNum + emeraldNum;
            showStats();
        }

    }

    
showStats();
runGame();
