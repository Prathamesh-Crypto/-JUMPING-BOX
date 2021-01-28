var canvas;
var music;
var ball;
var blueThingy,yellowThingy,pinkThingy,greenThingy;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(830,600);

    ball = createSprite(random(20,780),100,50,50);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=5;

    blueThingy = createSprite(100,590,200,20);
    blueThingy.shapeColor="blue";

    yellowThingy = createSprite(310,590,200,20);
    yellowThingy.shapeColor="yellow";

    pinkThingy = createSprite(520,590,200,20);
    pinkThingy.shapeColor="pink";

    greenThingy = createSprite(730,590,200,20);
    greenThingy.shapeColor="green";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();

    ball.bounceOff(edges);
   
    
   
    

   if(ball.isTouching(blueThingy)){
    ball.shapeColor="blue";
    ball.bounceOff(blueThingy);
    music.play();
   }

   if(ball.isTouching(yellowThingy)){
    ball.shapeColor="yellow";
    ball.bounceOff(yellowThingy);
    music.play();
   }

   if(ball.isTouching(pinkThingy)){
    ball.shapeColor="pink";
    ball.bounceOff(pinkThingy);
    music.play();
   }

   if(ball.isTouching(greenThingy)){
    ball.shapeColor="green";
    ball.bounceOff(greenThingy);
    music.play();
   }


    //add condition to check if box touching surface and make it box
    drawSprites()
}
