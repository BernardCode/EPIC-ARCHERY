const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computerPlayer;
var computerBase,playerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
	
  playerBase = new PlayerBase(width/5,random(450,height-300),180,150);
  player = new Player(width/5,playerBase.body.position.y-153,50,180);

  computerBase = new ComputerBase(width-(width/5),random(450,height-300),180,150);
  computerPlayer = new ComputerPlayer(width-(width/5),computerBase.body.position.y-153,50,180);
 }

function draw() {

  background(3,255,213);

  Engine.update(engine);

  // Title
  fill("black");
  textAlign("center");
  textFont ("comic sans ms");
  textSize(80);
  stroke ("black");
  strokeWeight(1.5);
  text("EPIC ARCHERY", width / 2, 150);

  playerBase.display();
  player.display();
  computerBase.display();
  computerPlayer.display();
}
