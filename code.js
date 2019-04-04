var level1run = false;
var level1done = false;
jumpLeft = false;
jumpRight = false;
var playerLocX = 0;
var playerLocY = 0;
var barbaraVelocity = 1;
var deltaX = 0;
var deltaY = 0;
//Sprite Variables
var miniMountains;
var mapSuburbia;
var floor1;
var facebookLogo;
var stopKaren;
var startButton;
var startButton2;
var startButton3;
var startButton4;
var welcomeText;
var gameDesc;
var gameInstruct;
var wasdInstruct;
var arrowInstruct;
var minivan;
var liveLaughLove;
var PBJ;
var house;
var snowPlatform;
var snowPlatform2;
var barbara;
var characterMotions;
var healthBar;
var healthBar2;

function preload() {
  miniMountains = loadImage('assets/miniMountains.png');
  mapSuburbia = loadImage('assets/suburbiaMap.png');
  floor1 = loadImage('assets/floor.png');
  facebookLogo = loadImage('assets/facebookLogo.png');
  startButton = loadImage('assets/startButton.png');
  startButton2 = loadImage('assets/startButton.png');
  startButton3 = loadImage('assets/startButton.png');
  startButton4 = loadImage('assets/startButtonRed.png');
  welcomeText = loadImage('assets/welcomeText.png');
  gameDesc = loadImage('assets/gameDesc.png');
  gameInstruct = loadImage('assets/gameInstruct.png');
  wasdInstruct = loadAnimation('assets/wasdUp.png', 'assets/wasdLeft.png', 'assets/wasdDown.png', 'assets/wasdRight.png');
  arrowInstruct = loadAnimation('assets/arrowUp.png', 'assets/arrowLeft.png', 'assets/arrowDown.png', 'assets/arrowRight.png');
  minivan = loadImage('assets/minivan.png');
  liveLaughLove = loadImage('assets/liveLaughLove.png');
  PBJ = loadImage('assets/PBJ.png');
  house = loadImage('assets/house.png');
  snowPlatform = loadImage('assets/snowPlatform.png');
  snowPlatform2 = loadImage('assets/snowPlatform.png');
  barbara = loadImage('assets/barbara.png');
  characterStand = loadImage('assets/characterStandRight.png');
  characterRunLeft = loadAnimation('assets/characterRun1Right.png', 'assets/characterRun2Right.png');
  characterRunRight = loadAnimation('assets/characterRun1Left.png', 'assets/characterRun2Left.png');
  characterJumpRight = loadImage('assets/characterJumpRight.png');
  characterJumpLeft = loadImage('assets/characterJumpLeft.png');
  healthBar = loadImage('assets/healthBar.png');
  healthBar2 = loadImage('assets/healthBar.png');
}

function setup() {
 createCanvas(400,400);

//minivan mountains
miniMountains = createSprite(200,200);
miniMountains.addImage(miniMountains);
miniMountains.visible = false;
//map
mapSuburbia = createSprite(200,200);
mapSuburbia.addImage(mapSuburbia);
mapSuburbia.scale = 0.67;
mapSuburbia.visible = false;
//floor
floor1 = createSprite(200,400,400);
floor1.addImage(floor1);
//facebook logo
facebookLogo = createSprite(75,100);
facebookLogo.addImage(facebookLogo);
facebookLogo.scale = 0.13;
facebookLogo.setVelocity(0,3);
//title
stopKaren = createSprite(260,100);
stopKaren.addImage(stopKaren);
stopKaren.height = 400;
stopKaren.width = 270;
stopKaren.setVelocity(0,3);
//start button
startButton = createSprite(200,300);
startButton.addImage(startButton);
startButton.scale = 0.5;
startButton.setCollider("circle");
//start button 2
startButton2 = createSprite(200,50);
startButton2.addImage(startButton);
startButton2.scale = 0.5;
startButton2.setCollider("circle");
startButton2.visible = false;
//start button 3
startButton3 = createSprite(200,200);
startButton3.addImage(startButton);
startButton3.scale = 0.5;
startButton3.setCollider("circle");
startButton3.visible = false;
//start button 4
startButton4 = createSprite(200,375);
startButton4.addImage(startButton2);
startButton4.scale = 0.1;
startButton4.visible = false;
//welcome text
welcomeText = createSprite(200,300);
welcomeText.addImage(welcomeText);
welcomeText.scale = 0.5;
welcomeText.visible = false;
//game description
gameDesc = createSprite(200,150);
gameDesc.addImage(gameDesc);
gameDesc.scale = 0.5;
gameDesc.visible = false;
//game instructions
gameInstruct = createSprite(200,300);
gameInstruct.addImage(gameInstruct);
gameInstruct.scale = 0.5;
gameInstruct.visible = false;
//wasd instructions
wasdInstruct = createSprite(100,100);
wasdInstruct.addAnimation(wasdInstruct);
wasdInstruct.scale = 0.15;
wasdInstruct.visible = false;
//arrow instructions
arrowInstruct = createSprite(300,100);
arrowInstruct.addAnimation(arrowInstruct);
arrowInstruct.scale = 0.8;
arrowInstruct.visible = false;
//minivan
minivan = createSprite(84,93);
minivan.addImage(minivan);
minivan.scale = 0.4;
minivan.visible = false;
//live laugh love
liveLaughLove = createSprite(324,246);
liveLaughLove.addImage(liveLaughLove);
liveLaughLove.scale = 0.23;
liveLaughLove.visible = false;
//peanut butter jelly
PBJ = createSprite(240,58);
PBJ.addImage(PBJ);
PBJ.scale = 0.14;
PBJ.visible = false;
//house(s)
house = createSprite(371,721);
house.addImage(house);
house.scale = 0.09;
house.visible = false;
//snow platforms
snowPlatform = createSprite(300,200);
snowPlatform.addImage(snowPlatform);
snowPlatform.scale = 0.2;
snowPlatform.setVelocity(0,-1);
snowPlatform.visible = false;
snowPlatform2 = createSprite(100,75);
snowPlatform2.addImage(snowPlatform);
snowPlatform2.scale = 0.2;
snowPlatform2.setVelocity(0,1);
snowPlatform2.visible = false;
//barbara
barbara = createSprite(300,295);
barbara.addImage(barbara);
barbara.scale = 0.15;
barbara.visible = false;
//character motions
characterMotions.createSprite(50,300);
characterMotions.addImage(characterRightStand);
characterMotions.scale = 0.5;
characterMotions.visible = false;
//health bar
var healthBar = createSprite(50,300);
healthBar.scale = 0.25;
healthBar.addImage(fullHealthBar);
healthBar.visible = false;
var healthBar2 = createSprite(50,300);
healthBar2.scale = 0.25;
healthBar2.addImage(fullHealthBar);
healthBar2.visible = false;
}


function draw() {
  //important properties
  background('white');
  characterMotions.velocity.y = characterMotions.velocity.y + 0.1;
  barbara.velocity.y = barbara.velocity.y + 0.1;
  //functions
  drawSprites();
  checkFBLoc();
  checkTitleLoc();
  gameBegin();
  gameDescription();
  gameInstructions();
  gameInitiate();
  level1();
  playerControl();
  checkPlatformLoc();
  spriteColliders();
  AIPlayerFollow(barbara, characterMotions, barbaraVelocity);
  healthBarMovement();
}

function checkFBLoc() {
  if (facebookLogo.position.y < 60) {
    facebookLogo.setVelocity(0,1);
  } else if (facebookLogo.position.y > 100) {
    facebookLogo.setVelocity(0,-1);
  }
}

function checkTitleLoc() {
  if (stopKaren.position.y < 60) {
    stopKaren.setVelocity(0,1);
  } else if (stopKaren.position.y > 100) {
    stopKaren.setVelocity(0,-1);
  }
}

function gameBegin() {
  if (startButton.mouseIsPressed) {
     stopKaren.remove();
     facebookLogo.remove();
     startButton.remove();
     welcomeText.visible = true;
     startButton2.visible = true;
  }
}

function gameDescription() {
  if (startButton2.mouseIsPressed) {
    welcomeText.remove();
    gameDesc.visible = true;
    startButton2.remove();
    startButton3.visible = true;
  }
}

function gameInstructions() {
  if (startButton3.mouseIsPressed) {
    gameDesc.remove();
    startButton3.remove();
    gameInstruct.visible = true;
    startButton4.visible = true;
    wasdInstruct.visible = true;
    arrowInstruct.visible = true;
  }
}

function gameInitiate() {
  if (startButton4.mouseIsPressed) {
    floor1.visible = false;
    startButton4.remove();
    gameInstruct.remove();
    wasdInstruct.remove();
    arrowInstruct.remove();
    mapSuburbia.visible = true;
    minivan.visible = true;
    liveLaughLove.visible = true;
    PBJ.visible = true;
    house.visible = true;
  }
}

function level1() {
  if (minivan.mouseIsPressed) {
    mapSuburbia.remove();
    minivan.remove();
    liveLaughLove.remove();
    PBJ.remove();
    house.remove();
    miniMountains.visible = true;
    snowPlatform.visible = true;
    snowPlatform2.visible = true;
    barbara.visible = true;
    characterMotions.visible = true;
    floor1.visible = true;
    healthBar.visible = true;
    healthBar2.visible = true;
    level1run = true;
  }
}

function playerControl() {
//potential improvements possible in the future
if (level1run === true) {
   if (keyDown(RIGHT)) {
     characterMotions.addImage(characterRun);
     characterMotions.setVelocity(3,0);
     jumpRight = true;
   } else if (keyDown(LEFT)) {
     characterMotions.addImage(characterRRun);
     characterMotions.setVelocity(-3,0)
     jumpLeft = true;
   } else if (keyDown(UP)) {
      if (jumpRight === true) {
        characterMotions.addImage(characterJumpRight);
        characterMotions.setVelocity(0,-3);
      } else if (jumpLeft === true) {
        characterMotions.addImage(characterJumpLeft);
        characterMotions.setVelocity(0,-3);
      }
   } else if (keyDown(SPACE)) {
     characterMotions.addImage(characterAttack);
   } else {
     characterMotions.setVelocity(0,0);
   }
  }
}

function checkPlatformLoc() {
  if (snowPlatform.position.y < 50) {
    snowPlatform.setVelocity(0,1);
  } else if (snowPlatform.position.y > 300) {
    snowPlatform.setVelocity(0,-1);
  }
  if (snowPlatform2.position.y < 50) {
    snowPlatform2.setVelocity(0,1);
  } else if (snowPlatform2.position.y > 300) {
    snowPlatform2.setVelocity(0,-1);
  }
}

function spriteColliders() {
  characterMotions.collide(floor1);
  characterMotions.collide(snowPlatform);
  characterMotions.collide(snowPlatform2);
  characterMotions.collide(barbara);
  barbara.collide(floor1);
  barbara.collide(snowPlatform);
  barbara.collide(snowPlatform2);
  barbara.collide(characterMotions);
}

function AIPlayerFollow(follower, followed, velocity) {
  //the follower follows the followed at a constant velocity
  deltaX = followed.position.x - follower.position.x;
  deltaY = followed.position.y - follower.position.y;
  var followerAngle = Math.atan(deltaY / deltaX);
  if (deltaX < 0) {
      followerAngle = followerAngle + Math.PI;
    }
  follower.velocity.x = velocity * Math.cos(followerAngle);
  follower.velocity.y = velocity * Math.sin(followerAngle);
}

function healthBarMovement() {
  healthBar.position.x = characterMotions.position.x;
  healthBar.position.y = characterMotions.position.y - 50;
  healthBar2.position.x = barbara.position.x;
  healthBar2.position.y = barbara.position.y - 50;
}

characterMotions.debug = true;
barbara.debug = true;
