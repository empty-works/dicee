var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumsButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var audio = new Audio("sounds/tom-1.mp3");
		audio.play();
	});
}

