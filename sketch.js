var s1;
var s2;
var f;
var scl=20;
var Height=600;
var Width=800;
function setup() {
  createCanvas(Width,Height);
  s1=new snake();
  s1.color="chartreuse";
  s1.x=0;
  s1.y=0;
  s2=new snake();
  s2.color="gold";
  s2.x=floor(Width/scl)*scl-scl;
  s2.y=floor(Height/scl)*scl-scl;
  frameRate(10);
  var nx=floor(Width/(scl*2))*scl-scl;
  var ny=floor(Height/(scl*2))*scl-scl;
  f=createVector(nx,ny);
  textFont(loadFont('assets/prstart.ttf'));
  textAlign(CENTER,CENTER);
}

function pickLocation(){
  var cols=floor(Width/scl);
  var rows=floor(Height/scl);
  var nx=floor(random(cols));
  var ny=floor(random(rows));
  f=createVector(nx,ny);
  f.mult(scl);
}
function gameOver(){
  background(0);
  textSize(width/4);
  fill(255, 255, 255);
  text('GAME', width/2,height/2);
  fill(255, 0, 0);
  text('OVER', width/2,height/2+200);
}
function draw() {
  if(!s1.alive||!s2.alive){
    gameOver();
    return;
  }
  background(40);
  if(s1.eat(f)){
    pickLocation();
  }
  s2.bite(s1);
  s1.bite(s1);
  s1.bite(s2);
  s2.bite(s2);
  s1.update();
  s1.show();
  if(s2.eat(f)){
    pickLocation();
  }
  s2.update();
  s2.show();
  fill(255,50,100);
  rect(f.x,f.y,scl,scl);
}

function keyPressed(){
  if(keyCode==UP_ARROW && !s1.yspeed){
    s1.dir(0,-1);
  }
  else if(keyCode==DOWN_ARROW && !s1.yspeed){
    s1.dir(0,1);
  }
  else if(keyCode==LEFT_ARROW && !s1.xspeed){
    s1.dir(-1,0);
  }
  else if(keyCode==RIGHT_ARROW && !s1.xspeed){
    s1.dir(1,0);
  }
  if(key=='w' && !s2.yspeed){
    s2.dir(0,-1);
  }
  else if(key=='s' && !s2.yspeed){
    s2.dir(0,1);
  }
  else if(key=='a' && !s2.xspeed){
    s2.dir(-1,0);
  }
  else if(key=='d' && !s2.xspeed){
    s2.dir(1,0);
  }
}
