function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);  
     
    drawWindow(600, 100);
    drawWindow(350, 100);
    drawWindow(100, 100);
}
 

function drawWindow(startX, startY){
     fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 150;
    rect(startX, startY, 150, 250);
    
    
}





/*
// One Way to Draw It
function draw(){
    fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 350;
    rect(windowWidth/2 - rectWidth/2, 50, 350, 650);
    
}*/


/*
// FOR CHRISTINAAAAA~
function drawWindow(startX, startY){
     fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 350;
    rect(windowWidth/2 - rectWidth/2, 50, 50, 350, 650);
}
*/



