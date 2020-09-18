var player1 = prompt("Player 1, enter your name. You will be blue");
var player1Color = "rgb(86, 151, 255)";

var player2 = prompt("Player 2, enter your name. You will be red");
var player2Color = "rgb(237, 45, 73)";

var game_on = true;
var table = $("table tr");

function changeColor(rowIndex, colIndex, color) {
	return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color", color);
}

function returnColor(rowIndex, colIndex) {
	return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color");
}

function checkBottom(colIndex) {
	var colorInput = returnColor(5, colIndex);
	for(var row = 5; row >= 0; row--) {
		colorInput = returnColor(row, colIndex);
		if(colorInput === "rgb(128, 128, 128)") {
			return row;
		}
	}
}

function matchCheck(one, two, three, four) {
	return one === two && one === three && one === four && one !== "rgb(128, 128, 128, 128)" && one !== undefined;
}

function checkHorizontalMatch() {
	for(var row = 0; i < 6; i++) {
		for(var col = 0; i < 4; i++) {
			if(matchCheck(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3)) === true) {
				console.log("horiz");
				//reportWin(row, col);
				return true;
			}
			else {
				continue;
			}
		}
	}
}
