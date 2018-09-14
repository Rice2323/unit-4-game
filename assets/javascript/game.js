var totalWins = 0;
var totalLosses = 0;
var goalNum = "Press Gems";
var scoreNum = 0;
var emeraldNum;
var diamondNum;
var amberNum;
var rubyNum;


var wins = $("#wins");
var losses = $("#losses");
var goal = $("#goal");
var score = $("#score");
var ruby = $("#ruby");
var diamond = $("#diamond");
var amber = $("#amber");
var emerald = $("#emerald");

function showStats() {
    wins.text("Wins: " + totalWins);
    losses.text( "Losses: " + totalLosses);
    goal.text( "Goal: " + goalNum);
    score.text("You have: " + scoreNum);

    if (scoreNum > goalNum) {
        totalLosses++;
        scoreNum = 0;
        goalNum = "You LOSE!!";
        score.text( "You have: " + scoreNum);
        goal.text("Goal: " + goalNum);
        runGame();


    }

    else if (scoreNum == goalNum) {
        totalWins++;
        scoreNum = 0;
        goalNum = "WINNER!!!";
        goal.text("Goal: " + goalNum);
        score.text("You have: " + scoreNum);
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
        ruby.click( function () {
            scoreNum = scoreNum + rubyNum;
            showStats();
        });
        diamond.click ( function () {
            scoreNum = scoreNum + diamondNum;
            showStats();
        });
        amber.click (function () {
            scoreNum = scoreNum + amberNum;
            showStats();
        });
        emerald.click( function () {
            scoreNum = scoreNum + emeraldNum;
            showStats();
        });

    }

    
showStats();
runGame();
