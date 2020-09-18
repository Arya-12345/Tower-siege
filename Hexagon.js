class Hexagon {
    constructor(x,y,radius){

        this.body = Bodies.polygon (x,y,sides,radius,);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        World.add(world, this.body);
    }

    display(){
        
    var pos=this.body.position
    push();  
    translate(pos.x,pos.y)
    rectMode(CENTER)
    strokeWeight(3)
    fill(255,0,255)
    ellipse(0,0,this.r,this.r)
    pop()
    }
}
