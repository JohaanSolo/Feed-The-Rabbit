var garden,rabbit;
var gardenImg,rabbitImg;
var foodGroup, food1, food2, food3;
var rand, food;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  food1 = loadImage("apple.png");
  food2 = loadImage("leaf.png");
  food3 = loadImage("orangeLeaf.png");
}


function setup(){
  
createCanvas(400,400);

  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  spawnFood();

  drawSprites();
}

function spawnFood(){
  if (frameCount % 60 === 0){
    food = createSprite(400,165,10,40);
    food.velocityY = + 6;
    food.velocityY = 8;

    
     // //generate random obstacles
     rand = Math.round(random(1,3));
     switch(rand) {
       case 1: food.addImage(food1);
               break;
       case 2: food.addImage(food2);
               break;
       case 3: food.addImage(food3);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     food.scale = 0.2;
     food.lifetime = 300;
  }
 }