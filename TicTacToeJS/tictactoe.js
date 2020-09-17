// Restart the game
var restart_button = document.querySelector("#b");

// Grabs all the squares
var table_cells = document.querySelectorAll("td");

// Clear the squares
function clear_cells() {
	for(var i = 0; i < table_cells.length; i++) {
		table_cells[i].textContent = '';	
	}
}

restart_button.addEventListener("click", clear_cells);

// Check the square marker

// For loop to add event listeners to all the squares
