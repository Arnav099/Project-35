var balloon,background;
function preload () {
  backgroundImage= loadImage("image/Hot Air Ballon-01.png")
  balloonImage= loadAnimation("image/Hot Air Ballon-02.png,image/Hot Air Ballon-03.png,image/Hot Air Ballon-04.png ")
}

function setup() {
 database=firebase.database();
 console.log(database);
  createCanvas(800,400);
  
 balloon= createSprite(100,400,20,20)
 balloon.addAnimation("balloon",balloonImage);
 balloon.scale=0.4;


}

function draw() {

  background(backgroundImage);

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y - 10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y + 10;
  }
  drawSprites();
}