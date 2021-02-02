class Hammer{

constructor(x,y){

    var options={
        'density':2,
        'restitution':0.5,
        'friction':1
    }

    this.hammer = Bodies.rectangle(x,y,120,30);
    World.add(world,this.hammer);

}


display(){

    this.hammer.position.x=mouseX;
    this.hammer.position.y=mouseY;

    push();
        fill("yellow");
        translate(mouseX,mouseY);
        rectMode(CENTER);
        rect(0,0,120,30);
    pop();



}





}