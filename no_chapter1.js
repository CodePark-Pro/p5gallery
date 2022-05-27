let radi_no=5;
let circle_no=16;

let radi=0;
let draw_cnt=0;
let circle_cnt=0;

function setup() {
  createCanvas(600, 600);
  stroke(255);
  noFill();
  stroke(0,random(128,255),random(64));
  background(0);
}

function draw() {
  let inc = TWO_PI/circle_no;
  let radi=(inc*(circle_cnt+1));
  let x=cos(radi)*(draw_cnt+1)*30;
  let y=sin(radi)*(draw_cnt+1)*30;
  
  translate(width/2,height/2);
  ellipse(x,y,50*(draw_cnt+1),50*(draw_cnt+1));
  
  circle_cnt+=1;
  if(circle_cnt == circle_no){
    circle_cnt = 0;
    draw_cnt+=1;
  }
  if(draw_cnt == radi_no){
    draw_cnt = 0;
    background(0);
    circle_no+=8;
    stroke(random(128),random(64),random(128));
    //console.log(circle_no);
  }
  
  if(circle_no>100){
    circle_no = 16;
  }
  
}