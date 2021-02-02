class Stone{

    constructor(){

        var options={
            'density':1,
            'restitution':0.7,
            'friction':5,
             
        }

    
        this.stone = Bodies.rectangle(500,300,20,20,options);
        World.add(world,this.stone);
    
    }
    
    
    display(){

        
    
        push();
            fill("yellow");
            //translate(this.stone.position.x,this.stone.position.y);
            //rotate(this.stone.angle);
            rectMode(CENTER);
            rect(this.stone.position.x,this.stone.position.y,20,20);
        pop();
    
    
    
    }
}
        
