var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.5
  
}

function draw() {
  background(200);
  drawSprites()
  if(tower.y > 400){
      tower.y = 300
    }
    createDoors()
}

function createDoors() {
  if(frameCount % 160 === 0) {
  var door = createSprite (200,7)
  door.addImage (doorImg)
  door.x=random(120,400)
  door.velocityY=2
  door.lifetime=300
  var climber = createSprite(door.x, 55)
  climber.addImage (climberImg)
  climber.velocityY=2
  climber.lifetime=300
  var railings = createSprite (door.x,60,climber.width,2)
  railings.debug = true
  railings.velocityY = 2
  railings.lifetime=300
  }
}