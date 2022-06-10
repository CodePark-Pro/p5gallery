let x = 300;
let y = 200;
let dx = 0;
let dy = 1;
let isUp = 0;

let rect_array_up = [];
let rect_array_bottom = [];
let rect_array_x = [];

let BAR_NUM = 6;

function setup(){
  createCanvas(600, 400);
  frameRate(25);

  for(let i=0;i<BAR_NUM;i++){
    rect_array_up[i] = random(50,250);
    rect_array_bottom[i] = random(10,height-rect_array_up[i]-80);
    rect_array_x[i] = width + 100*i;
  }
}
function draw(){
  background(0);
  fill(255);
  ellipse(x, y, 30, 30);
  if(isUp==1){
    dy-=1.5;
  }
  dy+=1;
  y+=dy;
  x+=dx;
  dx*=0.99;
  
  for(let i = 0; i<rect_array_up.length;i++){
    fill(255,0,0);
    rect(rect_array_x[i],0,30,rect_array_up[i]);
    rect(rect_array_x[i],height- rect_array_bottom[i],30,rect_array_bottom[i]);
    rect_array_x[i] -= 2;
    if(rect_array_x[i]+30<0){
      rect_array_x[i] = width;
      rect_array_up[i] = random(100,250);
      rect_array_bottom[i] = random(10,height-rect_array_up[i]-80);
    }
  }
}

function keyPressed(){
  if(keyCode==32){
    isUp=1;
  }
  else if(keyCode==39){
    dx=5;        
  }
  else if(keyCode==37){
    dx=-5;
  }
}

function keyReleased(){
  if(keyCode==32){
    isUp=0;
  }
}