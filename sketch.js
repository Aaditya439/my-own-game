const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,sling,ball;
var cir1,cir2,cir3,cir4,cir5,cir6,cir7,cir8,cir9,cir10,ci11,ci12,cir13,cir14,cir15,cir16,cir17,cir18,	cir19,	cir20,	cir21	,cir22,	cir23	,cir24,	cir25	,cir26	,cir27,	cir28


function preload(){
  backgroundImg = loadImage("background.png")
  bubbleImg = loadImage("bubble.png")
}

function setup() {
  createCanvas(750,695);

  engine = Engine.create();
  world = engine.world;

  //first layer
 
  cir1 = new Bub(200,10)
  cir2 = new Bub(225,10)
  cir3 = new Bub(250,10)
  cir4 = new Bub(275,10)
  cir5 = new Bub(300,10)
  cir6 = new Bub(325,10)
  cir7 = new Bub(325,10)
  cir8 = new Bub(350,10)
  // to left
  cir9 = new Bub(175,10)
  cir10 = new Bub(150,10)
  cir11 = new Bub(125,10)
  cir12 = new Bub(100,10)
  cir13 = new Bub(75,10)
  cir14 = new Bub(50,10)
  cir15 = new Bub(25,10)
  //second layer
  
  cir16 = new Bub(200,35)
  cir17 = new Bub(225,35)
  cir18 = new Bub(250,35)
  cir19 = new Bub(275,35)
  cir20 = new Bub(300,35)
  cir22 = new Bub(325,35)
  cir23 = new Bub(350,35)
  cir24 = new Bub(175,35)
  //to left
  cir25 = new Bub(150,35)
  cir26 = new Bub(125,35)
  cir27 = new Bub(100,35)
  cir28 = new Bub(75,35)
  cir29 = new Bub(50,35)
  cir30 = new Bub(25,35)
  //third layer
  cir31= new Bub(200,60)
  cir32= new Bub(225,60)
  cir33= new Bub(250,60)
  cir34= new Bub(275,60)
  cir35= new Bub(300,60)
  cir36= new Bub(325,60)
  cir37= new Bub(350,60)
  cir38= new Bub(175,60)
  //to left
  cir39= new Bub(150,60)
  cir40= new Bub(125,60)
  cir41= new Bub(100,60)
  cir42= new Bub(75, 60)
  cir43= new Bub(50, 60)
  cir44= new Bub(25, 60)
  // 4 layer
  cir45= new Bub(200,85)
  cir46= new Bub(225,85)
  cir47= new Bub(250,85)
  cir48= new Bub(275,85)
  cir49= new Bub(300,85)
  cir50= new Bub(325,85)
  cir51= new Bub(350,85)
  cir52= new Bub(175,85)
  // to left
  cir53= new Bub(150,85)
  cir54= new Bub(125,85)
  cir55= new Bub(100,85)
  cir56= new Bub(75, 85)
  cir57= new Bub(50, 85)
  cir58= new Bub(25, 85)
  // 5 layer
  cir59= new Bub(200,110)
  cir60= new Bub(225,110)
  cir61= new Bub(250,110)
  cir62= new Bub(275,110)
  cir63= new Bub(300,110)
  cir64= new Bub(325,110)
  cir65= new Bub(350,110)
  cir66= new Bub(175,110)
  //to left
  cir67= new Bub(150,110)
  cir68= new Bub(125,110)
  cir69= new Bub(100,110)
  cir70= new Bub(75, 110)
  cir71= new Bub(50, 110)
  cir72= new Bub(25, 110)

  ball = Bodies.circle(50,100,20);
  World.add(world,ball);

  sling = new Sling(this.ball,{x:375,y:600})




  

  Engine.run(engine);
}

function draw() {
  
  background(backgroundImg);
  

  sling.display()
  fill(145, 242, 145)
  cir1.display() 
  cir2.display()
  cir3.display()
  cir4.display()
  cir5.display()
  cir6.display()
  cir7.display()
  cir8.display()
  cir9.display()
  cir10.display()
  cir11.display()
  cir12.display()
  cir13.display()
  cir14.display()
  cir15.display()
  fill(57, 0, 153)
  cir16.display()
  cir17.display()
  cir18.display()
  cir19.display()
  cir20.display()
  cir22.display()
  cir23.display()
  cir24.display()
  cir25.display()
  cir26.display()
  cir27.display()
  cir28.display()
  cir29.display()
  cir30.display()
  fill(255, 0, 84)
  cir31.display()
  cir32.display()
  cir33.display()
  cir34.display()
  cir35.display()
  cir36.display()
  cir37.display()
  cir38.display()
  cir39.display() 
  cir40.display() 
  cir41.display() 
  cir42.display() 
  cir43.display() 
  cir44.display()
  fill(153,94,251)
  cir45.display()
  cir46.display()
  cir47.display()
  cir48.display()
  cir49.display()
  cir50.display()
  cir51.display()
  cir52.display()
  cir53.display()
  cir54.display()
  cir55.display()
  cir56.display()
  cir57.display()
  cir58.display()
  fill(0,255,0)
  cir59.display()
  cir60.display()
  cir61.display()
  cir62.display()
  cir63.display()
  cir64.display()
  cir65.display()
  cir66.display()
  cir67.display()
  cir68.display()
  cir69.display()
  cir70.display()
  cir71.display()
  cir72.display()

  
  

  imageMode(CENTER)
  image(bubbleImg ,ball.position.x,ball.position.y,40,40)

}

function mouseDragged(){
	Matter.Body.setPosition(ball, {x:mouseX, y:mouseY}) 
}
function mouseReleased(){
	sling.fly();
}

