/*class Ball{
    constructor(x,y,r)
    {
        var Options={
        density:1,
        frictionAir:0.005
        }
this.body=Bodies.circle(x,y,r,Options);
this.r=r;
this.x=x;
this.y=y;
World.add(world,this.body);
    }

    display(){
var pos=this.body.position;
translate(pos.x,pos.y);
ellipseMode(RADIUS);
ellipse(0,0,this.r*2);
    }
}*/
class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  