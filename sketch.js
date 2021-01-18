var tom,tomrunningimg,tomstandingimg,tomattackimg;
var jerryeatimg,jerryscaredimg,jerry;
var backGround,backGroundimg;
function preload() {
    //load the images here
tomrunningimg=loadImage("cat runn.png");
tomstandingimg=loadImage("cat.png");
tomattackimg=loadImage("attack!.png");

jerryeatimg=loadImage("hungry rat.png");
jerryscaredimg=loadImage("scared rat.png");

backGroundimg=loadImage("park.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    backGround = createSprite(400,300);
    backGround .addImage("park",backGroundimg);

    tom = createSprite(730,500);
    tom .addImage(tomstandingimg);
    tom.scale=0.3;

    jerry = createSprite(50,450);
    jerry.addImage(jerryeatimg);
    jerry.scale=0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < tom.width/2 + jerry.width/2
        && jerry.x-tom.x < jerry.width/2 + tom.width/2
        && tom.y-jerry.y < tom.height/2 + jerry.height/2
        && jerry.y - tom.y < jerry.height/2 + tom.height/2
        ){
          tom.addImage(tomattackimg);
          jerry.addImage(jerryscaredimg);
        }

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
    tom.x= tom.x-3
    tom.addImage(tomrunningimg);
    tom.scale=0.4;
  }
  if(keyDown(UP_ARROW)){
     tom.y= tom.y-3
     tom.addImage(tomrunningimg);
     tom.scale=0.4;
  }
  if(keyDown(RIGHT_ARROW)){
    tom.x= tom.x+3
    tom.addImage(tomrunningimg);
    tom.scale=0.4;
  }
  if(keyDown(DOWN_ARROW)){
     tom.y= tom.y+3
     tom.addImage(tomrunningimg);
     tom.scale=0.4;
    
  }


}
