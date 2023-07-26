const guess = document.getElementById("guess");
const report = document.getElementById("report");
const MAX    =1000;
let secret;
function loadGame(){
    guess.max = MAX;
    secret = Math.floor(Math.random()*MAX + 1);
    report.innerHTML = secret;
}
function makeGuess(){

}