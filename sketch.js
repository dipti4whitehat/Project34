var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter = 40;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof1, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(250, 500, 50);
	bobObject2 = new Bob(300, 500, 50);
	bobObject3 = new Bob(350, 500, 50);
	bobObject4 = new Bob(400, 500, 50);
	bobObject5 = new Bob(450, 500, 50);
	
	roof1 = new Roof(350, 200, 300, 30);

	ground = new Roof(400, 700, 800, 20);

	rope1 = new Rope(bobObject1.body, roof1.body, -bobDiameter * 2, 0);
	rope2 = new Rope(bobObject2.body, roof1.body, -bobDiameter * 1, 0);
	rope3 = new Rope(bobObject3.body, roof1.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof1.body, bobDiameter * 1, 0);
	rope5 = new Rope(bobObject5.body, roof1.body, bobDiameter * 2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-50});
	}
  
}