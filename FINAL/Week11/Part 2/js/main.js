
// Inserts the json file
function setup(){
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
    text(b, 0, 0, 100, 100);

    }
}