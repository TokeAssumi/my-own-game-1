var PLAY = 1;
var END = 0;
var gameState = PLAY;
var home, field, base;
var home_img ,field_img ,base_img;
var ezreal ,ezreal_img;
var zombie1, zombie2, zombe3, zombie4;
var yone, twitch, rengar, zac, zed;
var zombie_img, zombie2_img, zombie3_img, zombie4_img;
var zombieGroup, enemiesGroup;


function preload(){
  ezreal_img = loadImage("ezreal.png");
  home_img = loadImage("citiscape.jpg");
  field_img = loadImage("destroyedCity.jpg");
  base_img = loadImage("field.jpg");
  zombie_img = loadImage("zombie.png");
  zombie2_img = loadImage("zombie 2.jpg");
  zombie3_img = loadImage("zombie 3.jpg");
  zombie4_img = loadImage("zombie 4.jpg");
  yone_img = loadImage("yone.jpg");
  twitch_img = loadImage("twitch.jpg");
  rengar_img = loadImage("rengar.jpg");
  zac_img = loadImage("zac.jpg");
  zed_img = loadImage("zed.png");

}

function setup(){
  createCanvas(1000, 700);

  ezreal = createSprite(200, 350, 100, 50);

  home = createSprite(150, 350, 100, 1400);
  home.y = home.width/2;

  base = createSprite(850, 350, 100, 1400);
  base.y = base.width/2;
  zombieGroup = createGroup();
  enemiesGroup = createGroup();
}

function draw(){
  background(0);

  if(gameState === PLAY){
    home.velocityY = -2;
    if(home.y<0){
      home.y = 350;
    }
  
    base.velocityY = 2;
    if(base.y>700){
      base.y = 0;
    }
  
    if(keyDown(UP_ARROW)){
      ezreal.y = ezreal.y-4;
    }
  
    if(keyDown(DOWN_ARROW)){
      ezreal.y = ezreal.y+4;
    }
  
    spawnEnemies();
    spawnZombies();
    if(ezreal.isTouching(zombieGroup)){
      zombieGroup.destroyEach();
    }
    if(ezreal.isTouching(enemiesGroup)){
      enemiesGroup.destroyEach();
    }
    if(zombieGroup.isTouching(home)){
      gameState = END;
    }
    if(enemiesGroup.isTouching(home)){
      gameState = END;
    }
  }
  else if(gameState === END){
    home.velocityY = 0;
    ezreal.velocityY = 0;
    zombieGroup.setVelocityXEach(0);
    enemiesGroup.setVElocityXEach(0);
    zombieGroup.setLifetimeEach(-1);
    enemiesGroup.setLifetimeEach(-1);
  }

  
  drawSprites();
}

function spawnEnemies(){
  if(frameCount % 280 === 0){
    var enemy = createSprite(1100, 350, 50, 120);
    enemy.velocityX = -5;
    enemy.y = Math.round(random(100, 600))
    //generating random enemies

    var rand = Math.round(random(1, 5));
    switch(rand){
      case 1:enemy.addImage(yone_img);
        break;
      case 2:enemy.addImage(twitch_img);
        break;
      case 3:enemy.addImage(rengar_img);
        break;
      case 4:enemy.addImage(zac_img);
        break;
      case 5:enemy.addImage(zed_img);
        break;
    }

    enemiesGroup.add(enemy);
    enemy.lifetime = 250;
    enemy.scale = 0.2;

    

  }
}

function spawnZombies(){
  if(frameCount % 130 === 0){
    var zombie = createSprite(1150, 350, 50, 120);
    zombie.velocityX = -6;
    zombie.y = Math.round(random(100, 600))

    var rand = Math.round(random(1, 4));
    switch(rand){
      case 1:zombie.addImage(zombie_img);
        break;
      case 2:zombie.addImage(zombie2_img);
        break;
      case 3:zombie.addImage(zombie3_img);
        break;
      case 4:zombie.addImage(zombie4_img);
        break;
      
    }
    zombieGroup.add(zombie);
    zombie.lifetime = 250;
    zombie.scale = 0.2;
  }
 
}
