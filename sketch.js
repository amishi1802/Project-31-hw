const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  

  ground=new Ground(0,780,800,20);
}

function draw() {
  background(255,255,255);  


  for(var a=0; a <= 10; a=a+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
  }

  for(var b=40; b<= 10; b=b+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var b=15; b<= 10; b=b+50){
    plinkos.push(new Plinko(b,175));
  }

  for (var b=40; b<=10; b=b+50 ){
    plinkos.push(new Plinko(b,275));
  }

  for(var b=15; b<=10; b=b+50){
    plinkos.push(new Plinko(b,375));
  }

  if(frameCount%60 ===0){
    particles.push(new particle(random(width/2-10, width/2+10),10,10));
  }

  for(var a=0; a<divisions.length; j++){
    divisions[a].display();
  }

  for(var b=0; b<particles.length; b++){
    particles[b].display();
  }

  for(var b=0; b<plinkos.length; b++){
    plinkos[b].display();
  }

  ground.display();
  drawSprites();
}