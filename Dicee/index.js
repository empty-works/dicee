var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

function getDice(randNumber) {

	var fileName;
	if(randomNumber1 == 1) {
		fileName = "images/dice1.png";
	}
	else if(randomNumber1 == 2) {
		fileName = "images/dice2.png";
	}
	else if(randomNumber1 == 3) {
		fileName = "images/dice3.png"; 
	}
	else if(randomNumber1 == 4) {
		fileName = "images/dice4.png";
	}
	else if(randomNumber1 == 5) {
		fileName = "images/dice5.png";
	}
	else if(randomNumber1 == 6) {
		fileName = "images/dice6.png";
	}
	return fileName;
}
document.querySelectorAll("img.img1")[0].setAttribute("src", randomNumber1);
