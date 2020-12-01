class Pendulum{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia:Infinity
        }
        this.body=Bodies.circle(x,y,30,options);
        this.x=x;
        this.y=y;
        
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,30,30);
        pop();
    }
}