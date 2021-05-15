const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var girl,girlImg;
var butterfly,butterflyImg;
var bg,bgImg;
var invisibleGround;
var butterflyG;
var b2,b2Img;
var sound;
var score = 0;

function preload() {

    girlImg = loadImage("girl.png");
    b2Img = loadImage("butterfly.png");
    butterflyImg = loadImage("b1.png","b2.png","b3.png");
    bgImg = loadImage("bg.png");
    sound = loadSound("garden.mp3");
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    girl  = createSprite(200,380);
    girl.addImage(girlImg);
    girl.scale = 0.5;

    invisibleGround = createSprite(200,390,1200,10);
    invisibleGround.visible = false;

    b2 = createSprite(300,50);
    b2.addImage(b2Img)
    b2.scale=0.5;

    butterflyG = new Group();
}

function draw(){
    background(bgImg);
    Engine.update(engine);

 

    girl.velocityY = girl.velocityY + 0.7

    if(keyDown("space") && girl.y >= 159) {
      girl.velocityY = -15;
       

    }

    if(butterflyG.isTouching(girl)){
       
        butterflyG.destroyEach();
        score = score +1;
    }

    girl.collide(invisibleGround);

    
    createButterfly();
     drawSprites();
     textSize(20);
     fill("black");
     text(": "+ score,350,50);

     text("TRY TO CATCH THE BUTTERFLY TO THE GIRL");
    
}
function createButterfly(){
     if (frameCount % 300 === 0){
  var butterfly = createSprite(1200,260);
 butterfly.y = Math.round(random(0,200));
 butterfly.addImage(butterflyImg);
 butterfly.scale=1;
 butterfly.velocityX = -4;
 butterfly.lifetime = -1;
 butterflyG.add(butterfly);
     }
 
}

