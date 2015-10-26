// Global Var


function setup(){
    // Create Canvas
    
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");
    
    var myArray = []; // Create blank array
    //Add things
    
    for(var i=0; i<1201; i++){
 //       myArray[i] = "apple number " + i;
        
        // This adds circles to the array
        //but we won't be able to address individual circles later
        myArray[i] = ellipse(i,i,10,10);
    }
    
    // log out of the array
    console.log(myArray);
    
    //Loop to go through every item on the array.
    
    for(var i=0; i < myArray.length; i++){
        // log out each item, for ellipses it will return the whole p5 object instead.
        myArray[i]+=10;
        console.log(myArray[i]);
    }
    
    
    
   /* console.log(myArray[0]);
    console.log(myArray[1]);
    console.log(myArray[2]);
    console.log(myArray);*/
    
    
} // Setup End