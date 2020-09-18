var player1 = prompt("Player 1, enter your name. You will be blue");
var player1Color = "rgb(86, 151, 255)";

var player2 = prompt("Player 2, enter your name. You will be red");
var player2Color = "rgb(237, 45, 73)";

var game_on = true;
var table = $("table tr");

function changeColor(rowIndex, colIndex, color) {
	return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color", color);
}


