
var player;
var background;
var ground;
var bookGroup;
var playerAnimation;
var enemyGroup;
var bookImg;


function preload(){
  playerAnimation = loadAnimation("Images/frame1.png","Images/frame2.png","Images/frame3.png","Images/frame4.png","Images/frame5.png","Images/frame6.png","Images/frame7.png","Images/frame8.png");
  playerAnimation2 = loadAnimation("frames/frame1.png", "frames/frame2.png", "frames/frame3.png", "frames/frame4.png", "frames/frame5.png", "frames/frame6.png", "frames/frame7.png", "frames/frame8.png");
  bookImg = loadImage("Images/book.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  player = createSprite(displayWidth/2, displayHeight/2,50,50);
  player.addAnimation("running",playerAnimation);
  player.addAnimation("left running", playerAnimation2);
  player.scale = 0.3;
  bookGroup = new Group();
  enemyGroup = new Group();

  ground = createSprite(displayWidth/2, displayHeight-10,displayWidth,10);
  
   
}

function draw() {
  background(90,255,255);

  camera.position.x = displayWidth/2;
  camera.position.y = player.y;
  
  player.velocityY = player.velocityY+0.9;
  player.collide(ground);
  spawnBooks();
  spawnEnemy();
  //player.collide(bookGroup);
  drawSprites();
}

function spawnBooks(){
  if(frameCount % 20 === 0){
    var x = floor(random(10,displayWidth-100));
    var book = createSprite(x,camera.position.y-displayHeight/2,200,10);
    book.addImage('float',bookImg);
    //book.velocityY = 3;
    book.lifetime = floor((displayWidth+350)/3);
    bookGroup.add(book);
  }

}
function keyPressed(){
  //when you press the spacebar player will jump 
   if(keyCode===UP_ARROW){
     player.velocityY = -20;
    // player.velocityX = 0;
    
   }
  if(keyCode=== LEFT_ARROW){
    player.velocityX = -5;
    //player.velocityY = 0;
    player.changeAnimation("left running", playerAnimation2);
  }
  
  if(keyCode===RIGHT_ARROW){
    player.velocityX = 5;
    //player.velocityY = 0;
    player.changeAnimation("running", playerAnimation);
  }
  

}

function spawnEnemy(){
  if(frameCount % 220 === 0){
    var x = floor(random(10,displayWidth-100));
    var enemy = createSprite(x,camera.position.y-displayHeight/2,20,40);
    enemy.lifetime = floor((displayWidth+350)/3);
    enemyGroup.add(enemy);
  }
}