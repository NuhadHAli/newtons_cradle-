class Bob{
    constructor(x, y, radious){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        
       this.body = Bodies.circle(x, y, radious, options)
       this.radious = radious;
       World.add(world, this.body);  
    }

    display(){
 
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        fill("gold");
        circle(0, 0, this.radious*2);
        pop();    
    }
}