var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}

function startup () {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function randomColors () {
  var letters = "0123456789ABCDEF";
  var colors = "#";

  for(var i=0; i<6; i++) {
  	 colors += letters[Math.floor(Math.random()*16)];
  }
  return colors;
}

function getRandomColor () {
	color1.value = randomColors();
	color2.value = randomColors();

	setGradient();
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", startup);

randomButton.addEventListener("click", getRandomColor);

