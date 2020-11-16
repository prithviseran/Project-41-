class Drop{
    constructor(){
this.position.x
this.position.y
this.rain

    }
    Display(){
        stroke (10);
        fill ("Blue");
        elipse(x,y,2,2);
        
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

        }

    }
}