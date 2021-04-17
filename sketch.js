
function preload() {
bg = loadImage("images/garden.png");
    cat = loadAnimmation("Animmations/cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat4 = loadAnimmation("cat4.png");

    mouse = loadAnimmation("Animmations/mosue1.png");
    mouse2 = loadAnimation("mouse2.png", "mouse3.png");
    mouse4 = loadAnimmation("mouse4.png");

}

function setup(){

    createCanvas(1000,800);
    Tom = createSprite(870, 600);
    Tom.addAnimation("tom_sleeps", cat);
    Jerry = createSprite(200, 600);
    Jerry.addAnimation("Jerry_stands", mouse);

    Jerry.scale = 0.2;
    Tom.scale = 0.3;

function draw() {

    background(bg);
    if (Tom.x - Jerry.x < Tom.width%2 - Jerry.width%2)
    {
      Tom.velocityX = 0;
      Tom.addAnimation("tom_froze", cat3);
      Tom.changeAnimation("tom_froze");

      Jerry.addAnimation("jerry_froze", mouse4);
      Jerry.changeAnimation("jerryfroze");
     
      Tom.x = 300;
      Tom.scale = 0.3;

      Jerry.scale = 0.2;
    }
    

    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW)
{
tom.velocityX = -5;
tom.addAnimation("tom_running", tom2);
tom.changeAnimation("tom_running")

jerry.addAnimation("jerry", mouse2);
jerry.changeAnimation("jerry");
}


}
