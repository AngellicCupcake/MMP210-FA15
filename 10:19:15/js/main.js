function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);  
     
    drawWindow(500, 100);
    drawWindow(100, 100);
}
 

function drawWindow(startX, startY){
     fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 350;
    rect(startX, startY, 350, 650);
    
    
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



