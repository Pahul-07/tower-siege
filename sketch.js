const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
 polygonImg = loadImage("shield.png");
 bgImg=loadImage("baaa.png");
}

function setup(){
    createCanvas(1200,700);
  
    bg = Bodies.circle(600,370,20);
    engine= Engine.create()
    world = engine.world
    Engine.run(engine)

    ground= new Ground(600,690,1200,20);

    stand1= new Ground(525,610,350,10);
    stand2= new Ground(900,320,350,10);
  
    box1= new Box(410,570,40,80);
    box2= new Box(450,570,40,80);
    box3= new Box(490,570,40,80);
    box4= new Box(530,570,40,80);
    box5= new Box(570,570,40,80);
    box6= new Box(610,570,40,80);
    box7= new Box(650,570,40,80);

    box8= new Box(450,490,40,80);
    box9= new Box(490,490,40,80);
    box10= new Box(530,490,40,80);
    box11= new Box(570,490,40,80);
    box12= new Box(610,490,40,80);
  
    box13= new Box(490,410,40,80);
    box14= new Box(530,410,40,80);
    box15= new Box(570,410,40,80);
  
    box16= new Box(530,330,40,80);

    box17 = new Box(820,280,40,80);
    box18 = new Box(860,280,40,80);
    box19 = new Box(900,280,40,80);
    box20 = new Box(940,280,40,80);
    box21 = new Box(980,280,40,80);

    box22 = new Box(860,200,40,80);
    box23 = new Box(900,200,40,80);
    box24 = new Box(940,200,40,80);

    box25 = new Box(900,120,40,80);

    captain= new CA();

    polygon = Bodies.circle(160,384,20);
    World.add(world,polygon);

    sling1= new Sling(polygon, {x:160, y:385});

}    


function draw(){
  background(0);

  imageMode(CENTER);
  image(bgImg, bg.position.x, bg.position.y, 1200,740)

  ground.display(); 

  stand1.display();
  stand2.display();

  fill ("skyBlue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill ("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill ("lightGreen");
  box13.display();
  box14.display();
  box15.display();

  fill ("gray");
  box16.display();

  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();

  sling1.display();
  captain.display();

  fill("blue")
  textFont("hobo");
  textSize(30);
  text("Press space to reset the position of shield",90,100)
    
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 80, 50);

}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
  
function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
    sling1.attach(polygon);}
}