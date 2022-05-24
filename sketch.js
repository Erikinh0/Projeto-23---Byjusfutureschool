
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	var block_options={
		isStatic: true
	}

	var rotator_options={
		isStatic: true
	}

	plane = Bodies.rectangle(100,650,400,20, plane_options);
	World.add(world, plane)

	block1 = Bodies.rectangle(250,400,50,20, block_options);
	World.add(world, block1)

	block2 = Bodies.rectangle(1100,400,50,20, block_options);
	World.add(world, block2)
	
	rotator1 = Bodies.rectangle(700,250,50,20, rotator_options);
	World.add(world, rotator1)

	rotator2 = Bodies.rectangle(700,250,50,20, rotator_options);
	World.add(world, rotator2)

	rotator3 = Bodies.rectangle(700,250,50,20, rotator_options);
	World.add(world, rotator3)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  

  Engine.update(engine);
  background(30,144,255);

  rect(plane.position.x,plane.position.y,3500,20)
  rect(block1.position.x,block1.position.y,220,25)
  rect(block2.position.x,block2.position.y,220,25)
  rect(rotator1.position.x,rotator1.position.y,220,25)
  rect(rotator2.position.x,rotator2.position.y,220,25)
  rect(rotator3.position.x,rotator3.position.y,220,25)

  drawSprites();
 
}



