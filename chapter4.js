let x=0;
let y=200;
let w=0;
let h=30;

let cut_x = 0;
let cut_y = 0;
let cut_w = 0;
let cut_h = 0;

let q_w = 0;

let c = 0;

let diff = 0;

function setup() {
  createCanvas(600, 400);
  c = color(random(255),random(128),random(255))
}

function draw() {
  background(0);
  
  if(q_w == 0){
    q_w = random(50,200);
  }
  
  textSize(50);
  text(diff, 500,70);
  
  fill(c);
  rect(100,100,q_w,20);
  
  fill(255);
  rect(x,y,w,h);
  rect(cut_x,cut_y,cut_w,cut_h);
  cut_y+=5;
  w+=1;
}

function mousePressed(){
  
  cut_w = w-mouseX;
  
  diff = int(q_w - cut_w);
  if(abs(diff) < 5){
    q_w = 0;
    w = mouseX;
    cut_x=mouseX;
    cut_y = 200;
    cut_h = 30;
    c = color(random(255),random(128),random(255));
  }
}