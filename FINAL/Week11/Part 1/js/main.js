function setup(){
    noLoop();
    var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json' ;
    loadJSON(url, drawBird);
    
    
}

function draw(){
    background(225,225,225);
    
}

function drawBird(birds){
    b = birds.birds[5].members[1];
    loaded = true;
    console.log(birds);
    console.log(birds.birds[5].members[1]);
    text(b, 0,0, 100, 100);
    
    
}