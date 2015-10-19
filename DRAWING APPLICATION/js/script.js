//circle location vars
var redX, redY;
var purpleX, purpleY;
var blueX, blueY;
var red, blue, purple;

//size of the circle
var circleSize;

var lineColor;

//setting the above circle variables makes it easier to write the code to check for the click on the circle

function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);

    //set circle vars
    redX = 150;
    redY = 350;
    purpleX = 150;
    purpleY = 200;
    blueX = 150;
    blueY = 50;
    circleSize = 100;
    red = color(249, 167, 176);
    purple = color(218, 183, 255);
    blue = color(194, 223, 255);
    lineColor = red;
    //draw the circle
    fill(red);
    ellipse(redX, redY, circleSize, circleSize);
    
    fill(purple);
    ellipse(purpleX, purpleY, circleSize, circleSize);
    
    fill(blue);
    ellipse(blueX, blueY, circleSize, circleSize);
  } //end setup


function draw(){
    
    if(mouseIsPressed){
        stroke(lineColor);
        strokeWeight(4); 
        line(pmouseX, pmouseY, mouseX, mouseY);
        
    }
    
    
    
}





//check when the mouse is pressed
function mouseClicked() {
    //mousePressed is a built in p5 function that is run when the mouse is pressed

    //get the distance between the mouse and the center of the circle
    var d = dist(mouseX, mouseY, redX, redY);

    //check to see if the distance is less than the size of the circle
    if (d < circleSize) {
      lineColor = red;
    }
    
    d = dist(mouseX, mouseY, blueX, blueY);

    //check to see if the distance is less than the size of the circle
    if (d < circleSize) {
      lineColor = blue;
    }
    
    d = dist(mouseX, mouseY, purpleX, purpleY);

    //check to see if the distance is less than the size of the circle
    if (d < circleSize) {
      lineColor = purple;
    }
    
  } //end mousePressed