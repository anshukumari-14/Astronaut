var bg,sleep,brush,gym,eat,drink,move;

function preload(){
  bg=loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym11.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png")
 // drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png","move1.png")
}


function setup() {
  createCanvas(800,400);
  astronut = createSprite(300,230)
  astronut.addAnimation("sleeping",sleep)
  astronut.scale=0.1;
  createSprite(400, 200, 50, 50);

  
}

function draw() {
  background(255,255,255); 
  if(keyDown("UP_ARROW")){
    astronut.addAnimation("brushing",brush);
    astronut.changeAnimation("brushing")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronut.addAnimation("gymming",gym);
    astronut.changeAnimation("gymming")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronut.addAnimation("eating",eat);
    astronut.changeAnimation("eating")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0;
  } 
  if(keydown("LEFT_ARROW")){
    astronut.addAnimation("bathing",bath);
    astronut.changeAnimation("bathing")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0; 
  }
  if(keydown("m")){
    astronut.addAnimation("moving");
    astronut.changeAnimation("moving")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }
  drawSprites();
}

