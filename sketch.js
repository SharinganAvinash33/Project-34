const Bodies=Matter.Bodies
const Body=Matter.Body
const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(1366,700);
  ceiling=Bodies.rectangle(width/2,100,500,20,{isStatic:true});
  World.add(world,ceiling);
  bob3=new Pendulum(683,320);
  bob2=new Pendulum(623,320);
  bob1=new Pendulum(563,320);
  bob4=new Pendulum(743,320)
  bob5=new Pendulum(803,320)
  sling1=new Sling(bob1.body,{x:563,y:100});
  sling2=new Sling(bob2.body,{x:623,y:100});
  sling3=new Sling(bob3.body,{x:683,y:100});
  sling4=new Sling(bob4.body,{x:743,y:100});
  sling5=new Sling(bob5.body,{x:803,y:100});
}

function draw() {
  var pos=ceiling.position

  Engine.update(engine);
  background(0);

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  push();
  rectMode(CENTER);
  fill("red")
  rect(pos.x,pos.y,500,20);   
  pop();
  bob3.display();
  bob2.display();
  bob1.display();
  bob4.display();
  bob5.display();
}
function mouseDragged(){
  Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}