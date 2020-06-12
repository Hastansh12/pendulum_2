class Wire{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
           bodyB:bodyB,
            stiffness: 0.004,
            length: 100
        }
       this.bodyA=bodyA;
       this.bodyB=bodyB;
        this.Wire = Constraint.create(options);
        World.add(world, this.Wire);
       
    }

    display(){
     
        var pointA = this.bodyA.position;
        var pointB=this.bodyB.position;
        push();

        strokeWeight(8);
        stroke('black');
        line(pointA.x, pointA.y, pointB.x , pointB.y);
        pop();
       
    }
}