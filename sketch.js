var bg, bg2, form, system, code, security;
var score = 0;

function preload(){
  bg = loadImage("terrariaBg.png");
  bg2 = loadImage("treasureBg.png");
}

function setup(){
  createCanvas(1000, 500);
  system = new System();
  security = new Security();
}

function draw(){
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("red");
  stroke("pink");
  text("PONTUAÇÃO: " + score, 450, 50);

  if(score === 3){
    clear();
    background(bg2);
    fill("white");
    stroke("gray");
    textSize(40);
    text("TESOURO DESBLOQUEADO", 250, 200);
  }

  drawSprites();
}
