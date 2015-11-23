function setup(){
    // Drew Canvas
    var cnv = createCanvas(500, 500);
    
    noLoop();
    // Added JSON File
    var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json' ;
    // Loaded JSON File and called drawbird function
    loadJSON(url, drawBird);
    
    
}

// Colored canvas
function draw(){
    background(225,225,225); // Gray
    
}

// Created drawBird Function
function drawBird(birds){
    // b is the arrays in one place
    b = birds.birds[5].members[1];
    loaded = true;
    // Loads all the birds
    console.log(birds);
    // Loads Specific penguin
    console.log(birds.birds[5].members[1]);
    // Makes the Emperor Penguin visible on screen
    text(b, 0, 0, 100, 100);
    
    
}