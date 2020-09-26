class Plinko {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
    };
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(engine.world, this.body);

    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      //   translate(pos.x, pos.y);
      //   rotate(angle);
      //   rectMode(CENTER);
      strokeWeight(1);
      stroke(0);
      fill(127);
      ellipse(0, 0, this.r * 2);
      pop();
    };
  }
}
