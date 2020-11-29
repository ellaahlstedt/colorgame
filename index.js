function randomizeRgb() {
	var slumpTal = Math.floor(Math.random() * 256); //slumpar tal mellan 0-256
	return slumpTal; //retunerar det slumpade talet
}

function randomizeColor() {
	var rgb = "rgb(" + randomizeRgb() + ", " + randomizeRgb() + ", " + randomizeRgb() + ")"; //string som innehåller bakgrundsfärg
	return rgb; //retunerar string
}

var colors = [ //string som innehåller flera värden
    randomizeColor(),
    randomizeColor(),
    randomizeColor(),
    randomizeColor(),
    randomizeColor(),
    randomizeColor()
];

var randomColors = Math.floor(Math.random() * 6); //slumpar tal mellan 1-6
var rightColor = colors[randomColors]; //en av värderna på stringen "colors" blir det värdet som skrivs på h2

var boxen = document.querySelectorAll(".box"); //selects allt med klassen ".box"

var h2 = document.querySelector("h2"); //selects h2
h2.innerHTML = rightColor; //byter texten på h2 till den rätta färgen

var resetButton = document.querySelector("#reset");

function mouseClickSound() {
	var crash = new Audio('mouseClick.mp3');
	crash.play();
}

for (var i = 0; i < boxen.length; i++) { //for loop som loopas så många gånger som det finns boxar (6)
	boxen[i].style.background = colors[i]; //

	boxen[i].addEventListener('click', function () { //vad som händer om man trycker på en box
		var clickedColor = this.style.background; //vilken färg den boxen man har tryckt på har
		mouseClickSound();

		if (clickedColor == rightColor) { //if sats som händer när man trycker på rätt färg
			alert("Right color!"); //skriver ut "Right color!" när man trycker på rätt box
		} else { //vad som händer annars
			this.style.background = "#f4f4f2"; //ändrar färgen på boxen till bakgrundsfärgen
		}

	});
}

resetButton.addEventListener('click', function () {
	location.reload();
})