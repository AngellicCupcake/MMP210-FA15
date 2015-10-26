// Global Var


function setup(){
    // Create Canvas
    
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");
    
    var myArray = []; // Create blank array
    //Add things
    
    for(var i=0; i<1201; i++){
        myArray[i] = "apple number " + i;
    }
    
    // log out of the array
    console.log(myArray);
    
    //Loop to go through every item on the array.
    
    for(var i=0; i<myArray.length; i++){
        myArray[i]+=10;
        console.log(myArray[i]);
    }
    
    
    
   /* console.log(myArray[0]);
    console.log(myArray[1]);
    console.log(myArray[2]);
    console.log(myArray);*/
    
    
} // Setup End