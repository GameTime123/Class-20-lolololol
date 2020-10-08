
var movingrect
var lazyrect

function setup() {
  createCanvas(800,400);
 movingrect=createSprite(200,100,50,80)
 lazyrect=createSprite(400,200,80,50)
}

function draw() {
  background(255,255,255);  
  movingrect.shapeColor='red'
  lazyrect.shapeColor='red'
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-lazyrect.x<movingrect.width/2+lazyrect.width/2&&
    lazyrect.x-movingrect.x<movingrect.width/2+lazyrect.width/2&&
    movingrect.y-lazyrect.y<movingrect.height/2+lazyrect.height/2&&
    lazyrect.y-movingrect.y<movingrect.height/2+lazyrect.height/2){
movingrect.shapeColor='green'
lazyrect.shapeColor='green'
  }
  else{ movingrect.shapeColor='red'
  lazyrect.shapeColor='red'}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}