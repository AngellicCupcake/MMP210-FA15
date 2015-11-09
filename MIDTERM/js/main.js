// Global Variables

// Create Canvas

function setup(){
    // Create Canvas
    
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("farm");
    drawBunny();
    var x = 100;
    var y = 120;
    for(var i=0; i<=40; i++){
        //console.log(i);
        drawBunny(x,y);
        x += 180;
        if( x > width){
            x = 100;
            y += 200;
        }
            
    }
}

// Create Functions

    function drawBunny(hopX, hopY){
    console.log("hopX",hopX);   
    earX = hopX-30;//70;
    earY = hopY-70//50;
    circleSize = 100;
        
    earWidth = 25;
    earLength = 75;
    
    bodyX = hopX;//100;
    bodyY = hopY;//120;
    
    noseX = hopX-8;//92; //x
    noseY = hopY+25;//145; //y
    noseB = hopX;//100;// x
    noseBB = hopY+30;//150; //y
    noseD = hopX+8;//108; //x
    noseDD = hopY+25;//145; //y
        
    pink = color(251, 187, 185 );
    purple = color(218, 183, 255);
    brown = color(111, 78, 55);
    lineColor = red;
        
    eyeX = hopX-20;
    eyeY = hopY;
    eyeSize = 10;
    
    //draw the circle
     
    fill(pink);
    ellipse(earX, earY, earWidth, earLength);

    fill(pink);
    ellipse(earX+60, earY, earWidth, earLength);
    
    fill(pink);
    ellipse(bodyX, bodyY, circleSize, circleSize);
        
    fill(brown);
    triangle(noseX, noseY, noseB, noseBB, noseD, noseDD);
    
    fill(brown);
    ellipse(eyeX, eyeY, eyeSize, eyeSize);
        
    fill(brown);
    ellipse(eyeX+39, eyeY, eyeSize, eyeSize);
    
       
        
    }