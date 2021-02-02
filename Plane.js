class Plane{

    constructor(){

    this.plane = Bodies.rectangle(100,590,700,20,{isStatic:true});
    World.add(world,this.plane);



    }

    display(){

        push();
        fill("brown");
        rectMode(CENTER)
        rect(300,590,800,20);
        pop();


    }


}

  