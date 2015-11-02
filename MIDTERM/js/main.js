// Global Variables

// Create Canvas

function setup(){
    // Create Canvas
    
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("farm");
}

// Create Functions

    function drawCat(meowX, meowY){
        triangle(30, 75, 58, 20, 86, 75);
    }

    function drawBunny(hopX, hopY){
        
    }
// Variables
    startX = 0;
    startY = 0;
// Create Loop

    for(i=0; i<40; i++){
        drawCat(20, 20);
        drawCat(60, 20);
        drawBunny(100, 20);
        drawBunny(149, 20);
        
        if(startX > windowWidth){
            startX = 0;
            startY += 100;
        }
        
    }
