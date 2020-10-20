class Rope{
    constructor(bodyA,bodyB,offsetX){
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
           
        }
        this.offsetX = offsetX
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
       
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            
                line(pointA.x , pointA.y, pointB.x+this.offsetX, pointB.y);
               
            
           
            
    }
}