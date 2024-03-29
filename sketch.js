
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;

function setup() {
	createCanvas(800, 400);
  

	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
   rightSide = new Dustbin(670,620,20,100);
   paper = new Paper(100,300,10);
   leftSide = new Dustbin(550,620,20,100);
   bottom = new Dustbin(610,660,100,20);
   ground = new Ground(400,680,800,20)
   Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);
  bottom.display();
  paper.display();
 ground.display();
 leftSide.display();
 rightSide.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{
			x:15,
			y:-15
		})
	}
}


