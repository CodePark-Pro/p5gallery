let x=300;
let y=200;

let dx=-2;
let dy=-2;

let start_x = 0;
let start_y = 0;

let is_dragging = false;

let moji = "CodeParkプログラミング教室";

function setup() {
  createCanvas(600, 400);
  textSize(60);
  textAlign(CENTER, CENTER);
  frameRate(5);
}

function draw() {
  background(0,0,0);
  
  dx*=0.99;
  dy*=0.99;
  //位置情報であるxとyを1ずつ変える
  x+=dx;
  y+=dy;
  //画面の端で跳ね返る
  if(x<0 || x>width){
    dx*=(-1);
  }
  if(y<0 || y>height){
    dy*=(-1);
  }
  
  if(is_dragging){
    stroke(255,0,0);
    strokeWeight(3);
    line(start_x, start_y, mouseX, mouseY);
  }
  
  stroke(0,0,0);
  fill(255,255,255);
  //rect(x,y,30,30);
  let emoji = moji[frameCount%moji.length];
  
  text(emoji,x,y);
}

function mousePressed(){
  start_x = mouseX;
  start_y = mouseY;
  
  is_dragging = true;
}

function mouseReleased(){
  is_dragging = false;
  dx = (start_x-mouseX)/10;
  dy = (start_y-mouseY)/10;
}