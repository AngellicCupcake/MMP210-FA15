function setup() {
    //create the Canvas
    createCanvas(windowWidth, 5000);  
    
    var x = 50;
    var y = 60;
    var gridWidth = width - 180;
    
    for(var i=0; i<84; i++){
console.log(i);
        
        drawWindow(x, y);
        x += 190;
        
        if(x>gridWidth){
            x = 50;
            y += 400;
        }
    }  
}
 

function drawWindow(startX, startY){
    fill(255, 237, 246);
    stroke(249, 167, 176);
    strokeWeight(5);
    var rectWidth = 150;
    rect(startX, startY, 150, 280);
    
    
    //rect(startX, startY, winWidth, winHeight);
    
    fill(249, 167, 176);
    rect(startX-10, startY, 170, 30);
    rect(startX-10, startY+280, 170, 30);
    
    stroke(249, 167, 176);
    line(startX+75, startY+275, startX+75, startY+35);
    
    stroke(249, 167, 176);
    line(startX+145, startY+150, startX+5, startY+150);
    
    stroke(249, 167, 176);
    line(startX+165, startY+5, startX+80, startY+150);
    
    
}



