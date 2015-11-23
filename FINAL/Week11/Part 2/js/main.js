
// Inserts the json file
function setup(){
    var cnv = createCanvas(500, 500);
    
    noLoop();
    var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json' ;
    loadJSON(url, drawBird);
    
    
}
//Draws bg
function draw(){
    background(225,225,225);
}

// draws birds
// Makes text pop up
function drawBird(birds){
    //To call in text
    b = birds.birds[1].members;
    loaded = true;
    console.log(birds);
    console.log(birds.birds[2].members[1]);
    //Visible on page
    
    for(var i=0; i < b.length; i++){
    text(b[i],10,20*i+20);

    }
}