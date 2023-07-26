const guess = document.getElementById("guess");
const report = document.getElementById("report");
const lable = document.getElementById("lable");
const body = document.body;
const MAX    =1000;
let guesscount;
let secret;
function loadGame(){
    guess.max = MAX;
    secret = Math.floor(Math.random()*(MAX + 1));
    // report.innerHTML = secret;
    console.log(secret);
    guesscount =0;
    body.style.backgroundColor = `white`;
}
function makeGuess(){
    let myGuess = guess.value;
    guesscount++;
lable.innerHTML = `Guess #${guesscount}:`
if (myGuess > secret){
    report.innerHTML = `${myGuess} is too high`;
}else if(myGuess < secret)
{
report.innerHTML = `${myGuess} is too low`;
}
else
{
    body.style.backgroundColor = `green`;
    report.innerHTML = `${myGuess} is right, you win!`;
}

}