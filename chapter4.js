let x=-50;
let y=200;
let w=0;
let h=50;

let cut_x = 0;
let cut_y = 0;
let cut_w = 0;
let cut_h = 30;

let q_w = 0;
let click_cnt = 0;
let pont = 0;

let c;
let game_over_f = false;

let song;
let gover_song;

function preload(){
  song = loadSound('./assets/chapter4.mp3');
  gover_song=loadSound("./assets/gameover.wav");
}

function setup() {
  createCanvas(600, 400);
  c = color(random(255),random(128),random(255));
  song.play();
}

function draw() {
  background(10,50,128);
  
  textSize(50);
  text(pont, 450,70);
  
  fill(255);
  rect(x,y,w,h);
  
  if(!game_over_f){
    rect(cut_x,cut_y,cut_w,cut_h);
    cut_y+=5;
    w+=2;
    
    if(w>=width){
      game_over_f = true;
    }

    if(q_w == 0){
      q_w = random(50,200);
      c = color(random(255),random(128),random(255));
    }
    fill(c);
    rect(100,100,q_w,50);
    
    if(!song.isPlaying()){
      song.play();
    }
    
  }else{
    if(song.isPlaying()){
      song.stop();
    }
    if(!gover_song.isPlaying()){
      gover_song.play();
    }
    background(0);
    textAlign(CENTER)
    textSize(80);
    text('GameOver!!', 300,150);
    text(pont, 300,300);
  }
  
  click_cnt += 1;
}

function mousePressed(){
  let now_cutw = (w-45)-mouseX; 
  
  diff = int(q_w - now_cutw);
  if(click_cnt>10 && abs(diff) < 5){
    cut_w = q_w;
    click_cnt = 0;
    q_w = 0;
    w = mouseX;
    cut_x=mouseX;
    cut_y = 200;  
    pont+=1;
  }
}