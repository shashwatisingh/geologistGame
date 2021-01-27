
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var Hammer;
var Stone;
var Rubber;

var multiSlesandParticle1;
var multiSlesandParticle2;
var multiSlesandParticle3;
var multiSlesandParticle4;
var multiSlesandParticle5;
var multiSlesandParticle6;
var multiSlesandParticle7;
var multiSlesandParticle8;
var multiSlesandParticle9;
var multiSlesandParticle10;

var stone;
var rubber;
var wideCanvas;
var iron;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

    multiSlesandParticle1 = new Box(110,150,10,10);
	multiplesandparticle2 = new Box(110,150,10,10);
	multiplesandparticle3 = new Box(110,150,10,10);
	multiplesandparticle4 = new Box(110,150,10,10);
	multiplesandparticle5 = new Box(110,150,10,10);
	multiplesandparticle6 = new Box(110,150,10,10);
	multiplesandparticle7 = new Box(110,150,10,10);
	multiplesandparticle8 = new Box(110,150,10,10);
	multiplesandparticle9 = new Box(110,150,10,10);
	multiplesandparticle10 = new Box(110,150,10,10);
	
	stone = new Stone(730,250,50,50);
	rubber = new Rubber(80,190,50,50);
	wideCanvas = new WideCanvas(80,190,50,50);
	iron = new Iron(80,190,50,50);

    
    hammer= new Bird(800,310,200,PI/2);
}

	
  



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
   
  multipleSandParticle1.display();
  multipleSandParticle2.display();
  multipleSandParticle3.display();
  multipleSandParticle4.display();
  multipleSandParticle5.display();
  multipleSandParticle6.display();
  multipleSandParticle7.display();
  multipleSandParticle8.display();
  multipleSandParticle9.display();
  multipleSandParticle10.display();

    stone.display();
    rubber.display();
    wideCanvas.display();
    iron.display();  
    
    hammer.display();

    ground.display();

	











  drawSprites();
 
}



