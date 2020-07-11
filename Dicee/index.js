var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var fileName = "images/dice" + randomNumber1 + ".png";
if(randomNumber1 == 1) {
	fileName = "dice1.png";
}
else if(randomNumber1 == 2) {
	fileName = "dice2.png";
}
else if(randomNumber1 == 3) {
	fileName = "dice3.png"; 
}
else if(randomNumber1 == 4) {
	fileName = "dice4.png";
}
else if(randomNumber1 == 5) {
	fileName = "dice5.png";
}
else if(randomNumber1 == 6) {
	fileName = "dice6.png";
}
document.querySelectorAll("img.img1")[0].setAttribute("src", fileName);
