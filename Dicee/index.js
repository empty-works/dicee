var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

function getDice(randNumber) {

	var fileName;
	if(randNumber == 1) {
		fileName = "images/dice1.png";
	}
	else if(randNumber == 2) {
		fileName = "images/dice2.png";
	}
	else if(randNumber == 3) {
		fileName = "images/dice3.png"; 
	}
	else if(randNumber == 4) {
		fileName = "images/dice4.png";
	}
	else if(randNumber == 5) {
		fileName = "images/dice5.png";
	}
	else if(randNumber == 6) {
		fileName = "images/dice6.png";
	}
	return fileName;
}
document.querySelectorAll("img.img1")[0].setAttribute("src", getDice(randomNumber1));
