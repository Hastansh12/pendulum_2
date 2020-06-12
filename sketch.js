const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall,bob,ground;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    wall = new Ground(400, 70, 600, 20);
    bob=new Bob(500,250,30);
wire = new Wire(bob.body,wall.body);

}

function draw(){

    background('white');
    text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
  text("Press Enter to stop the Pendulum from oscillating",100,40);
  fill('white');
    Engine.update(engine);
    bob.display();
    ground.display();
     wall.display();
     wire.display();
    
 //wire.display();
}
