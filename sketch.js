
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
    world = engine.world;
    
    ground = new Plane();

    stone1 = new Stone();

	hammer1 = new Hammer(mouseX,mouseY);

	

	rubber1 = new Rubber();

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  hammer1.display();
  rubber1.display();
  stone1.display();
  ground.display();
  
  
 
}



