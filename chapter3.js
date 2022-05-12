//文字の描画位置
let x=300;
let y=200;

//移動量
let dx=-2;
let dy=-2;
//線を引くスタート座標
let start_x = 0;
let start_y = 0;
//ドラッグ中かどうか
let is_dragging = false;

function setup() {
  //キャンバスを作成
  createCanvas(600, 400);
  //文字の大きさを決める
  textSize(60);
  //座標が指す位置はテキストの中心
  textAlign(CENTER, CENTER);
}

function draw() {
  //背景を塗りつぶす
  background(0,0,0);
  //摩擦で止まるようにする
  dx*=0.99;
  dy*=0.99;
  //位置情報であるxとyを1ずつ変える
  x+=dx;
  y+=dy;
  //画面の端で跳ね返る
  if(x<0 || x+30>width){
    //方向を逆にする
    dx*=(-1);
  }
  if(y<0 || y+30>height){
    //方向を逆にする
    dy*=(-1);
  }
  //ドラッグ中なら
  if(is_dragging){
    //線の色は赤
    stroke(255,0,0);
    //線の太さは3px
    strokeWeight(3);
    //線を引く
    line(start_x, start_y, mouseX, mouseY);
  }
  //線の色は黒
  stroke(0,0,0);
  //塗りつぶしは白
  fill(255,255,255);
  //rect(x,y,30,30);
  let emoji = "🤖";
  text(emoji,x,y);
}

//画面をクリックした
function mousePressed(){
  //クリックしたマウス位置を覚えておく
  start_x = mouseX;
  start_y = mouseY;
  //ドラッグ中にする
  is_dragging = true;
}
//マウスが離された
function mouseReleased(){
  //ドラッグ終了
  is_dragging = false;
  //移動量をマウスクリック位置から離した位置の差分で決める。
  //pxで決めると大きすぎるので、30で割って調節
  dx = (start_x-mouseX)/30;
  dy = (start_y-mouseY)/30;
}