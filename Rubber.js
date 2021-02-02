class Rubber{
    constructor(){

        var options={
            'density':1,
            'restitution':0.3,
            'friction':5
        }

       this.rubber =Bodies.circle(30,580,40);
       World.add(world,this.rubber);

       

    }
    display(){
        

        push();
        translate(this.rubber.position.x,this.rubber.position.y)
        rotate(this.rubber.angle)
        ellipseMode(RADIUS);
        ellipse(0,0,40);
        pop();


    }

}