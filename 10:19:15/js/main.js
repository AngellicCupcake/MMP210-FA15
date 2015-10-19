function setup() {
    //create the Canvas
    createCanvas(windowWidth, 3600);  
     
   /*drawWindow(600, 100);
    drawWindow(350, 100);
    drawWindow(100, 100);
   */ 
    
    var x = 0;
    var y = 0;
    
    for(var i=0; i<84; i++){
console.log(i);
       // drawWindow(50*i, 50*i);
        
        drawWindow(x, y);
        x += 180;
        
        if(x>windowWidth-150){
            x = 0;
            y += 300;
        }
            
}
    
}
 

function drawWindow(startX, startY){
    fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 150;
    rect(startX, startY, 150, 280);
    
    
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



