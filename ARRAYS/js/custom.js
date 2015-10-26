// Global Var
var myArray = []; // Create blank array
// Bubble Constructor

function Bubble(){
    // Create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 25; // r is for radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2; // width and height are twice the radius
    
    this.bubbleColor = color(255, 207, 216);
    //method: draw bubble
    this.drawBubble = function(){
    fill(this.bubbleColor);
    stroke(225, 177, 186);
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);

    }
    
    this.changeColor = function(){
        this.bubbleColor = color(218, 183, 255);
        this.drawBubble();
    }
}
//End Bubble



function setup(){
    // Create Canvas
    
    var cnv = createCanvas(800,800);
    cnv.parent("windows");

    //Add things
    
    for(var i=0; i<100; i++){
 //       myArray[i] = "apple number " + i;
        
        // adds bubbles to the array
        myArray[i] = new Bubble();
        myArray[i].drawBubble();
        
    }
    
    // log out of the array
    console.log(myArray);
    
    //Loop to go through every item on the array.
    
    /*for(var i=0; i < myArray.length; i++){
        // log out each item, for ellipses it will return the whole p5 object instead.
    
        console.log(myArray[i]);
    }
    */
    
    
   /* console.log(myArray[0]);
    console.log(myArray[1]);
    console.log(myArray[2]);
    console.log(myArray);*/
    
    
} // Setup End

function mousePressed(){
    // Check to see if it's working.
    console.log("mouse is Pressed");


    //  loop through myArrayy and check if mouse is in each Bubble
        var d;
    for(var i=0; i < myArray.length; i++){
        d = dist(mouseX, mouseY, myArray[i].x, myArray[i].y);
         if(d < myArray[i].r){
             myArray[i].changeColor(); // calls the color change function
         }
    }

}
