function setup() {
    //create the Canvas
    createCanvas(windowWidth, 5000);  
     
   /*drawWindow(600, 100);
    drawWindow(350, 100);
    drawWindow(100, 100);
   */ 
    
    var x = 50;
    var y = 60;
    var gridWidth = width - 180;
    
    for(var i=0; i<84; i++){
console.log(i);
       // drawWindow(50*i, 50*i);
        
        drawWindow(x, y);
        x += 190;
        
        if(x>gridWidth){
            x = 50;
            y += 400;
        }
            
}
    
    
    
    
}
 

function drawWindow(startX, startY){
    fill(70, 27, 126);
    stroke(230, 187, 255);
    strokeWeight(5);
    var rectWidth = 150;
    //var winHeight = 150; 
    //var winWidth = 280;
    rect(startX, startY, 150, 280);
    
    
    //rect(startX, startY, winWidth, winHeight);
    
    fill(230, 187, 255);
    rect(startX-10, startY, 170, 30);
    rect(startX-10, startY+280, 170, 30);
    
    stroke(230, 187, 255);
    line(startX+75, startY+275, startX+75, startY+35);
    
    stroke(230, 187, 255);
    line(startX+145, startY+150, startX+5, startY+150);
    
    
}

/*
    line(startX + winWidth/2, startY, startX + winWidth/2, startY + winHeight);
    
    line(startX,startY * .333, startX + winWidth, startY * .3333);

*/





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



