var canvas;
var umbrella, drops;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,600);

    var umbrella = createSprite(200,300,20,20);
    for (var i=0; i < maxDrops; i++){
        drops.push(new createDrop(random (0,400), (0,400)));

    }

   
    
}

function draw(){
    umbrella.display();
    drops.display();
    drops.update();

    
}   

