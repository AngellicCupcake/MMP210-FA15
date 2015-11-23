// Global Variables & Variables
var words = ["die", "soo", "ki", "Daisuki"]; // Words, Daisuki

var iptr = 0; // Counter

var myVoice = new p5.Speech(); // Speech object

// Setup
function setup(){
    var cnv = createCanvas(500, 500);
    background(253, 215, 228);
    fill(255, 255, 255);
    
    //instructions
    textSize(50);
    textAlign(CENTER);
    text("click anywhere", width/2, height/2);
    
}

function mousePressed()
	{
		// if in bounds:
		if(mouseX<width && mouseY<height) {
			ellipse(mouseX, mouseY, 50, 50); // circle
			// randomize voice and speak word:
			myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
			myVoice.speak(words[iptr]);
			iptr = (iptr+1) % words.length; // increment
		}
	}