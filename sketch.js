
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 900);


	engine = Engine.create();
	world = engine.world;
	
ground=new Ground(400,890,1800,20)
bottomside=new Ground(1040,870,30,180)

rightside=new Ground(1180,870,30,180)



var ball_options = {
	isStatic:false,
	restitution:0.5,
    friction:0,
    density:1.2
}
	ball=Bodies.circle(100,100,20,ball_options)
	World.add(world,ball)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ellipse(ball.position.x,ball.position.y,20); 
  ground.show()
  bottomside.show()
  rightside.show()
  

  drawSprites();
 
}


	function keyPressed(){
		if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:74,y:-120})
		}
	}
  
  