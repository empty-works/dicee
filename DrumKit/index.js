var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumsButtons; i++) {
	document.querySelector("button")[i].addEventListener("click", function () {
		var audio = Audio('tom-1.mp3');
		audio.play();
	});
}

