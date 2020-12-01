class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
display(){
    var bodyA=this.sling.bodyA.position
    var pointB=this.pointB;
    push();
    stroke(255)
    line(bodyA.x,bodyA.y,pointB.x,pointB.y)
    pop();
}
}
