const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const cpucheck2 = document.getElementById("cpucheck2");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;
let winCeiling = 5;

let ball;
let icon;
let bombOffset;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;
let iconOut = false;



function resetGame() {
    clearInterval(intervalID); // clear the clock
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    scoreL = 0;
    scoreR = 0;
    iconOut = false;
    bombOffset = Math.random()*200;
    updateScore();
    resetBall();
    resetPaddles(); 
      resetIcon();
    nextTick(); // start running the clock
  
}

function resetPaddles() {
   paddleL = new Paddle(0,0,paddleLength,paddleWidth,"pink", "pink");
   paddleR = new Paddle(boardWidth-paddleWidth,0,paddleLength,paddleWidth,"#252525", "#252525");
}

function resetBall() {
    ball = new Ball(boardWidth/2, boardHeight/2, 2, -1, ballRadius, "hotpink");
}
function resetIcon(){
    icon = new Icon(boardWidth/2-200,boardHeight/2+100, 60, 60);
}
function clearBoard() {
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
     clearBoard();
     if(iconOut){
       
           if(scoreL<scoreR) icon.draw(ctx, "o", boardWidth/2+150,boardHeight/2+bombOffset);

           else if(scoreR < scoreL) {
            icon.draw(ctx, "b",boardWidth/2-200,boardHeight/2+bombOffset);
            console.log("iconout");
           }
           
    }
        if (icon.collide){
        return;}

   
    paddleL.draw(ctx);
    paddleR.draw(ctx);
    ball.draw(ctx);
    
    
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {

            ball.bounceWall();
            //  paddleL.move();
             if (cpucheck.checked) {
                paddleL.moveCPUslow(ball);
            } else {
                paddleL.move();
            }

            if (cpucheck2.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }

            if (ball.bouncePaddleL(paddleL) && !icon.collide) score("right");
            if (ball.bouncePaddleR(paddleR)&& !icon.collide) score("left");
            
            ball.move();
            if(scoreL >= winCeiling || scoreR >= winCeiling ){
                
                iconOut = true;
            }

            draw();

            nextTick();
        }, 10
    );
}

function score(player) {
    const scoreboard = document.getElementById("scoreboard");
    console.log("score");
    if (player == "left") scoreL++; 
    if (player == "right") scoreR++;
        updateScore();
    if (player == "RIGH") scoreboard.innerHTML = `Oppenhiemer wins!`;
    else if(player == "LEF") scoreboard.innerHTML = `Barbie wins!`;
    

    resetBall();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}