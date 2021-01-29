class Rope{
    constructor(bodyA,pointB){
var Options={
    bodyA:bodyA,
    pointB:pointB,
   stiffness:1.2,
    length:300
}
this.pointB=pointB;
this.rope=Constraint.create(Options);
World.add(world,this.rope);
    }
    display(){
 var pointA=this.rope.bodyA.position;
 var pointB=this.pointB;
push();

strokeWeight(10);
stroke("black");
line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();
    }
}