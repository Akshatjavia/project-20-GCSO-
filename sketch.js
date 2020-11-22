var car,walll;

var speed,weight;

var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,40,40);
  car.velocityX=speed;

  wall=createSprite(1500,200,35,height/2);
}

function draw() {
  background(0,0,0);  

  if( car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.y/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
   
    deformation = (0.5*weight*speed*speed)/22500;

    car.velocityX=0;
   
    if (deformation < 100) {

      car.shapeColor = "green";
      car.velocityX=0;

      }
     
      if (deformation > 100 && deformation < 180) {
     
      car.shapeColor = "yellow";
      car.velocityX=0;
     
      }
     
      if (deformation > 180) {
     
      car.shapeColor = "red";
      car.velocityX=0;
     
      }

    }

    

  drawSprites();
}