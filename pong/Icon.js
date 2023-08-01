class Icon{
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.collide = false;
        this.barb = new Image(); // Create new img element
        this.barb.src = "barbie.png"; // Set source path
        this.bomb = new Image(); // Create new img element
        this.bomb.src = "bomb.png"; // Set source path

    }
    
    draw (ctx, b,x,y){
       this.x =x;
       this.y =y;
       this.checkCollision();
       x = this.x;
       y = this.y;
        if (b == "b"){
            
            ctx.drawImage(this.barb, this.x-this.w/2,this.y-this.h/2, this.w, this.h);
            // console.log("drawing");
            
        }
        else if (b == "o"){
            ctx.drawImage(this.bomb, this.x-this.w/2, this.y-this.h/2, this.w, this.h);
            // console.log("drawing"); 
        }
    }
    checkCollision(){
        if ((ball.x > this.x+ball.r && ball.x < ball.r+this.w+this.x) && (ball.y > this.y- ball.r  && ball.y < this.y + this.h + ball.r)&& !this.collide){
            console.log("collision");
            this.bomb.src = "explosion.png";
            this.barb.src= "confetti.gif"
            this.w = 300;
            this.h = 300;
            if (this.x > 200){
                score("RIGH");
                
            }
            else {
                score("LEF");
            }
            this.collide =true;
        }
    }
}