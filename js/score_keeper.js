const resetBtn = document.getElementById("resetBtn");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const scoreTeam1Afficher = document.getElementById("scoreTeam1");
const scoreTeam2Afficher = document.getElementById("scoreTeam2");
const scoreMaxAfficher = document.getElementById("scoreMaxAfficher");

let scoreMax = 5;
let scoreTeam1 = 0;
let scoreTeam2 = 0;

player1Btn.addEventListener("click", function() {
    scoreTeam1++;
    scoreTeam1Afficher.textContent = scoreTeam1;
    if (scoreTeam1 === scoreMax) {
        alert("Team 1 a gagné!");
        return;
    }
});
    
player2Btn.addEventListener("click", function() {
    scoreTeam2++;
    scoreTeam2Afficher.textContent = scoreTeam2;
    if (scoreTeam2 === scoreMax) {
        alert("Team 2 a gagné!");
        return;
    }
});
    