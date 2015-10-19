

function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);  
    
    drawWindow();
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


function drawWindow(){
     fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 350;
    rect(windowWidth/2 - rectWidth/2, 50, 350, 650);
}

