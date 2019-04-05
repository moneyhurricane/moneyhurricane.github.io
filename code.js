var level1run = false;
var level1done = false;
jumpLeft = false;
jumpRight = false;
var playerLocX = 0;
var playerLocY = 0;
var barbaraVelocity = 1;
var deltaX = 0;
var deltaY = 0;
//Image and Animation Variables
var miniMountainsImg;
var mapSuburbiaImg;
var floor1Img;
var facebookLogoImg;
var stopKarenImg;
var startButtonGreenImg;
var startButtonRedImg;
var welcomeTextImg;
var gameDescImg;
var gameInstructImg;
var wasdInstructAnim;
var arrowInstructAnim;
var minivanImg;
var liveLaughLoveImg;
var PBJImg;
var houseImg;
var snowPlatformImg;
var snowPlatform2Img;
var barbaraImg;
var characterStandImg;
var characterRunLeftAnim;
var characterRunRightAnim;
var characterJumpRightImg;
var characterJumpLeftImg;
var healthBarImg;
var healthBar2Img;
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
  miniMountainsImg = loadImage('https://i.ibb.co/Zd5gtYd/Minivan-Mountains.jpg');
  mapSuburbiaImg = loadImage('https://i.ibb.co/GM8g3yM/Map-Suburbia.png');
  floor1Img = loadImage('https://i.ibb.co/mX7Twx2/Floor.png');
  facebookLogoImg = loadImage('https://i.ibb.co/HxrQfLw/Facebook-Logo.png');
  stopKarenImg = loadImage('https://i.ibb.co/pbZHhPB/Stop-Karen-Logo.png');
  startButtonGreenImg = loadImage('https://i.ibb.co/m8ytpsC/Start-Button-Green.png');
  startButtonRedImg = loadImage('https://i.ibb.co/tQmn00Q/Start-Button-Red.png');
  welcomeTextImg = loadImage('https://i.ibb.co/PZM58Zd/Welcome-Text.png');
  gameDescImg = loadImage('https://i.ibb.co/xqnFh14/Game-Description.png');
  gameInstructImg = loadImage('https://i.ibb.co/bRstth1/Game-Instructions.png');
  wasdInstructImg = loadAnimation('https://i.ibb.co/3Tc4pfm/wasdUp.png', 'https://i.ibb.co/XjT1b6z/wasdLeft.png', 'https://i.ibb.co/RPJWgpT/wasdDown.png', 'https://i.ibb.co/BBhfppJ/wasd-Right.png');
  arrowInstructImg = loadAnimation('https://i.ibb.co/QcH2s37/arrowUp.png', 'https://i.ibb.co/PCTBPrj/arrow-Left.png', 'https://i.ibb.co/0JYWSpH/arrow-Down.png', 'https://i.ibb.co/TgKm85F/arrow-Right.png');
  minivanImg = loadImage('https://i.ibb.co/M2mbK8r/Minivan-Icon.png');
  liveLaughLoveImg = loadImage('https://i.ibb.co/SBhXsSD/Live-Laugh-Love-Icon.png');
  PBJImg = loadImage('https://i.ibb.co/zGQM2gw/PB-amp-JIcon.png');
  houseImg = loadImage('https://i.ibb.co/gmgDnqB/House.png');
  snowPlatformImg = loadImage('https://i.ibb.co/Zm60dBC/Snow-Platform.png');
  snowPlatform2Img = loadImage('https://i.ibb.co/Zm60dBC/Snow-Platform.png');
  barbaraImg = loadImage('https://i.ibb.co/tbBrf9B/barbara.png');
  characterStandImg = loadImage('https://i.ibb.co/c2jrkbQ/character-Stand-Right.png');
  characterRunLeftAnim = loadAnimation('https://i.ibb.co/fY2qjr1/Character-Run-Frame1.png', 'https://i.ibb.co/g9YBRRH/Character-Run-Frame2.png');
  characterRunRightAnim = loadAnimation('https://i.ibb.co/Xt4yxsr/Character-Left-Run-Frame1.png', 'https://i.ibb.co/0VwJ4Y3/Character-Left-Run-Frame2.png');
  characterJumpRightImg = loadImage('https://i.ibb.co/QcBD5rs/Character-Jump.png');
  characterJumpLeftImg = loadImage('https://i.ibb.co/6mDW624/Character-Left-Jump.png');
  fullHealthBarImg = loadImage('https://i.ibb.co/RjCGB91/Full-Health-Bar.png');
}

function setup() {
 createCanvas(400,400);

//minivan mountains
miniMountains = createSprite(200,200);
miniMountains.addImage(miniMountainsImg);
miniMountains.visible = false;
//map
mapSuburbia = createSprite(200,200);
mapSuburbia.addImage(mapSuburbiaImg);
mapSuburbia.scale = 0.67;
mapSuburbia.visible = false;
//floor
floor1 = createSprite(200,400,400);
floor1.addImage(floor1Img);
//facebook logo
facebookLogo = createSprite(75,100);
facebookLogo.addImage(facebookLogoImg);
facebookLogo.scale = 0.13;
facebookLogo.setVelocity(0,3);
//title
stopKaren = createSprite(260,100);
stopKaren.addImage(stopKarenImg);
stopKaren.height = 400;
stopKaren.width = 270;
stopKaren.setVelocity(0,3);
//start button
startButton = createSprite(200,300);
startButton.addImage(startButtonGreenImg);
startButton.scale = 0.5;
startButton.setCollider("circle");
//start button 2
startButton2 = createSprite(200,50);
startButton2.addImage(startButtonGreenImg);
startButton2.scale = 0.5;
startButton2.setCollider("circle");
startButton2.visible = false;
//start button 3
startButton3 = createSprite(200,200);
startButton3.addImage(startButtonGreenImg);
startButton3.scale = 0.5;
startButton3.setCollider("circle");
startButton3.visible = false;
//start button 4
startButton4 = createSprite(200,375);
startButton4.addImage(startButtonRedImg);
startButton4.scale = 0.1;
startButton4.visible = false;
//welcome text
welcomeText = createSprite(200,300);
welcomeText.addImage(welcomeTextImg);
welcomeText.scale = 0.5;
welcomeText.visible = false;
//game description
gameDesc = createSprite(200,150);
gameDesc.addImage(gameDescImg);
gameDesc.scale = 0.5;
gameDesc.visible = false;
//game instructions
gameInstruct = createSprite(200,300);
gameInstruct.addImage(gameInstructImg);
gameInstruct.scale = 0.5;
gameInstruct.visible = false;
//wasd instructions
wasdInstruct = createSprite(100,100);
wasdInstruct.addAnimation(wasdInstructAnim);
wasdInstruct.scale = 0.15;
wasdInstruct.visible = false;
//arrow instructions
arrowInstruct = createSprite(300,100);
arrowInstruct.addAnimation(arrowInstructAnim);
arrowInstruct.scale = 0.8;
arrowInstruct.visible = false;
//minivan
minivan = createSprite(84,93);
minivan.addImage(minivanImg);
minivan.scale = 0.4;
minivan.visible = false;
//live laugh love
liveLaughLove = createSprite(324,246);
liveLaughLove.addImage(liveLaughLoveImg);
liveLaughLove.scale = 0.23;
liveLaughLove.visible = false;
//peanut butter jelly
PBJ = createSprite(240,58);
PBJ.addImage(PBJImg);
PBJ.scale = 0.14;
PBJ.visible = false;
//house(s)
house = createSprite(371,721);
house.addImage(houseImg);
house.scale = 0.09;
house.visible = false;
//snow platforms
snowPlatform = createSprite(300,200);
snowPlatform.addImage(snowPlatformImg);
snowPlatform.scale = 0.2;
snowPlatform.setVelocity(0,-1);
snowPlatform.visible = false;
snowPlatform2 = createSprite(100,75);
snowPlatform2.addImage(snowPlatformImg);
snowPlatform2.scale = 0.2;
snowPlatform2.setVelocity(0,1);
snowPlatform2.visible = false;
//barbara
barbara = createSprite(300,295);
barbara.addImage(barbaraImg);
barbara.scale = 0.15;
barbara.visible = false;
//character motions
characterMotions = createSprite(50,300);
characterMotions.addImage(characterStandImg);
characterMotions.scale = 0.5;
characterMotions.visible = false;
//health bar
healthBar = createSprite(50,300);
healthBar.scale = 0.25;
healthBar.addImage(fullHealthBarImg);
healthBar.visible = false;
healthBar2 = createSprite(50,300);
healthBar2.scale = 0.25;
healthBar2.addImage(fullHealthBarImg);
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
  if (startButton.mouseIsPressed = true) {
     stopKaren.remove();
     facebookLogo.remove();
     startButton.remove();
     welcomeText.visible = true;
     startButton2.visible = true;
  }
}

function gameDescription() {
  if (startButton2.mouseIsPressed = true) {
    welcomeText.remove();
    gameDesc.visible = true;
    startButton2.remove();
    startButton3.visible = true;
  }
}

function gameInstructions() {
  if (startButton3.mouseIsPressed = true) {
    gameDesc.remove();
    startButton3.remove();
    gameInstruct.visible = true;
    startButton4.visible = true;
    wasdInstruct.visible = true;
    arrowInstruct.visible = true;
  }
}

function gameInitiate() {
  if (startButton4.mouseIsPressed = true) {
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
  if (minivan.mouseIsPressed = true) {
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
    if (keyCode == RIGHT_ARROW) {
     characterMotions.addImage(characterRunRightAnim);
     characterMotions.setVelocity(3,0);
     jumpRight = true;
    } else if (keyCode == LEFT_ARROW) {
     characterMotions.addImage(characterRunLeftAnim);
     characterMotions.setVelocity(-3,0)
     jumpLeft = true;
    } else if (keyCode == UP_ARROW) {
      if (jumpRight === true) {
        characterMotions.addImage(characterJumpRightImg);
        characterMotions.setVelocity(0,-3);
    } else if (jumpLeft === true) {
        characterMotions.addImage(characterJumpLeftImg);
        characterMotions.setVelocity(0,-3);
    } else if (keyCode == SPACE) {
     characterMotions.addImage(characterAttackImg);
    } else {
     characterMotions.setVelocity(0,0);
   }
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
