// Global Variables
    var body = color(251, 187, 185);
    var face = color(111, 78, 55);
    
    var invertedbody = color(0, 0, 0 );
    var invertedface = color(193, 27, 23);
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
        
    body = color(251, 187, 185);
    face = color(111, 78, 55);
    
    lineColor = red;
        
    eyeX = hopX-20;
    eyeY = hopY;
    eyeSize = 10;
    
    //draw the circle
     
    fill(body);
    ellipse(earX, earY, earWidth, earLength);

    fill(body);
    ellipse(earX+60, earY, earWidth, earLength);
    
    fill(body);
    ellipse(bodyX, bodyY, circleSize, circleSize);
        
    fill(face);
    triangle(noseX, noseY, noseB, noseBB, noseD, noseDD);
    
    fill(face);
    ellipse(eyeX, eyeY, eyeSize, eyeSize);
        
    fill(face);
    ellipse(eyeX+39, eyeY, eyeSize, eyeSize);
    
       
        
    }

