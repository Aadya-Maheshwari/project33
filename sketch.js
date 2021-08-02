const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var snowFall;
var girl,girlImg;

function preload(){

  backgroundImg=loadImage("snow3.jpg");
  
  girlImg=loadAnimation("girl_2.png,girl_1.png,girl_3.png,girl_1.png");


}



function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine,world;
 
 girl=createSprite(200,100,10,10);
 girl.addImage(girlImg);

 
}

function draw() {
  background(backgroundImg); 
  
  Engine.update(engine);
  drawSprites()

}

