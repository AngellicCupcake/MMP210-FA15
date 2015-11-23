function setup(){
    noLoop();
    var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json' ;
    loadJSON(url, drawBird);
    
    
}

function draw(){
    background(225,225,225);
    
}

function drawBird(birds){
    var array = ["one, two, three"];
    loaded = true;
    console.log(birds);
    console.log(birds.birds[2].members[array]);

    
}