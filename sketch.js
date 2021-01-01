
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var PLAY = 1;
var END = 0;
var gamestate = 1;
var score = 0;

function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(100,260,20,20);
  monkey.addAnimation("ee", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,300,600,20);
  ground.shapeColor = rgb(51,51,0);
  ground.x = ground.width/2;
  
  bananaGroup = new Group();
  
  
}


function draw() {
  
  background(250);
  console.log(mouseX,mouseY);
  
  if (gamestate === PLAY) { 
    
    ground.velocityX = 5;
    ground.x = ground.width/2;
  
    if (keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -12; 
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
    
    Banana();
    Obstacles();
    
    fill(0);
    text("Score: "+score,20,20);
    score = score + Math.round(getFrameRate()/60);
    
  }
  drawSprites();
}

function Banana() {
  
  ry = Math.round(random(120,200));
  rx = Math.round(random(140,450));
  
  if (frameCount % 80 === 0) {
    banana = createSprite(rx,ry,20,20);
    banana.addImage("slurp",bananaImage);
    banana.velocityX = -2
    banana.scale = 0.1;
    banana.lifetime = 600;
    bananaGroup.add(banana);
  }
  
}

function Obstacles() {
  
  rx = Math.round(random(140,450));
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(rx,283,20,20);
    obstacle.addImage("bump",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 300;
  }
}








