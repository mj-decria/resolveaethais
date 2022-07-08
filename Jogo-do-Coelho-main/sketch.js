const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var CORDA;
var umacoisavermeiacomponto;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height*0.99,width,height*0.02);
  CORDA = new Rope(6,{x:245,y:30});
var options = {
  density: 0.01,
}
 umacoisavermeiacomponto = Bodies.circle(300,300,15,options);
 Matter.Composite.add(CORDA.body,umacoisavermeiacomponto);
 restricao = new Link(CORDA,umacoisavermeiacomponto);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  CORDA.show();
  ellipse(umacoisavermeiacomponto.position.x,umacoisavermeiacomponto.position.y,15,15);
}



