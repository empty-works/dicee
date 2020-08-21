var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumsButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {

		var buttonInnerHTML = this.innerHTML;

		// Can grab the identity of the button with "this"
		switch(buttonInnerHTML) {
			
			case "w":
				var audio = new Audio("sounds/tom-1.mp3");
				audio.play();
			break;

			default:
		}
	});
}



