class Boundary {
  constructor(x, y, w, h, a) {
    var options = {
      friction: 0,
      angle: a,
      restitution: 0.5,
      isStatic: true,
    };
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(engine.world, this.body);

    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      noStroke();
      fill(0);
      rect(0, 0, this.w, this.h);
      pop();
    };
  }
}
