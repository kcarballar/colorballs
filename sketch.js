var balls = [];
var ball;
var howmany = 40;
var col = {
  r: 200,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(800, 600);
 
  for (var i = 0; i<howmany; i ++){
  balls[i] = new Bubble (random(width), random(height), random (7), random(7,40), random(color));
  
}
}
function draw() {
  background(255);
  
col.r = random (100,255);
  col.g = random (100,255);
  col.b = random (100,255);
  fill(col.r,0, col.b,100);
  
  for (var i = 0; i<howmany; i ++){
    
  balls[i].drawball();
  balls[i].move();
  balls[i].detectEdge();
  
  
}
}

function mousePressed (){
  for (var i = 0; i<howmany; i ++){
  balls[i].clicked();  
}
}
//the CONSTRUCTOR function

function Bubble (x, y, speed, size, color){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.size = size;
  this.col= color;
  
  this.drawball = function(){
    noStroke;
    fill(this.col);
    ellipse (this.x, this.y, this.size, this.size);
  }
  
  this.clicked = function () {
  this.col = (0,250,0)
  }
  this.move = function(){
    this.x = this.x + this.speed;
  }
this.detectEdge = function (){
  if(this.x >= width || this.x <= 0){
    this.speed = this.speed * -1;
  }
}

}
 
