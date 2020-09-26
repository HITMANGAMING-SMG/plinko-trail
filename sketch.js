var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var circles = [];
var boundaries = [];
var plinkos = [];
var p;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  boundaries.push(new Boundary(200, height, width, 20, 0));

  boundaries.push(new Boundary(10, 380, 10, 100, 0));
  boundaries.push(new Boundary(100, 380, 10, 100, 0));
  boundaries.push(new Boundary(200, 380, 10, 100, 0));
  boundaries.push(new Boundary(300, 380, 10, 100, 0));
}

function draw() {
  background(50);
  circles.push(new Circle(200, 0, 5));

  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }

  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}
