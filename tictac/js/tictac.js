/*
1. understand the shopping cart more and write down the line you dont understand
2. understand the html and css for tictactoe
*/

var turn = "O";
winBoxBackground = "blue";
winBoxColor = "white";

function onBoxClicked(event) {
	var box = event.target; // get the box that is clicked
	console.log(box)
	box.innerHTML = turn; // insert X or O


	var playerWin = isWin(turn); // check if X or O has won

	if (playerWin == true) { // if x or o has won, show alert and exit the function 
		alert("Player " + turn + " has won!");
		disableClicking();
		return;
	}

	if (isBoardFull()) {
		alert("Board is Full");
		disableClicking();
		return;
	}

	// no one has won, therefore change the turn
	if (turn == "X")
		turn = "O";
	else
		turn = "X";
}


function disableClicking() {
	document.getElementById("board").style.pointerEvents = "none";
}
function enableClicking() {
	document.getElementById("board").style.pointerEvents = "auto";
}
/*
	this function takes in 3 divs/boxes and changes their background and foreground color
*/
function colorMatchingBoxes(box1Div, box2Div, box3Div) { 
	box1Div.style.background = winBoxBackground;
	box2Div.style.background = winBoxBackground;
	box3Div.style.background = winBoxBackground;
	box1Div.style.color = winBoxColor;
	box2Div.style.color = winBoxColor;
	box3Div.style.color = winBoxColor;
}


/*
	this function checks if at least one box out of 9 boxes is empty. If it is empty it returns false. 
	Otherwise it returns true because all of the boxes are used
*/
function isBoardFull() {
	var boxr1c1 = document.getElementById("r1c1");
	var boxr1c2 = document.getElementById("r1c2");
	var boxr1c3 = document.getElementById("r1c3");
	var boxr2c1 = document.getElementById("r2c1");
	var boxr2c2 = document.getElementById("r2c2");
	var boxr2c3 = document.getElementById("r2c3");
	var boxr3c1 = document.getElementById("r3c1");
	var boxr3c2 = document.getElementById("r3c2");
	var boxr3c3 = document.getElementById("r3c3");

	if (boxr1c1.innerHTML == "" || boxr1c2.innerHTML == "" || boxr1c3.innerHTML == "" || boxr2c1.innerHTML == "" || boxr2c2.innerHTML == "" || boxr2c3.innerHTML == "" || boxr3c1.innerHTML == "" || boxr3c2.innerHTML == "" || boxr3c3.innerHTML == "") {
		return false;
	} else {
		return true;
	}

}

/*
	this function checks whether x or o has won. it returns true if x or o has won; otherwise it returns false
*/
function isWin(turn) {
	var boxr1c1 = document.getElementById("r1c1");
	var boxr1c2 = document.getElementById("r1c2");
	var boxr1c3 = document.getElementById("r1c3");
	var boxr2c1 = document.getElementById("r2c1");
	var boxr2c2 = document.getElementById("r2c2");
	var boxr2c3 = document.getElementById("r2c3");
	var boxr3c1 = document.getElementById("r3c1");
	var boxr3c2 = document.getElementById("r3c2");
	var boxr3c3 = document.getElementById("r3c3");

	if (boxr1c1.innerHTML == turn && boxr1c2.innerHTML == turn && boxr1c3.innerHTML == turn){
		// first row matching
		colorMatchingBoxes(boxr1c1, boxr1c2, boxr1c3);
		return true;
	} else if (boxr2c1.innerHTML == turn && boxr2c2.innerHTML == turn && boxr2c3.innerHTML == turn) {
		// second row matching 
		colorMatchingBoxes(boxr2c1, boxr2c2, boxr2c3);
		return true;
	} else if (boxr3c1.innerHTML == turn && boxr3c2.innerHTML == turn && boxr3c3.innerHTML == turn) {
		// third row matching
		colorMatchingBoxes(boxr3c1, boxr3c2, boxr3c3);
		return true;
	} else if (boxr1c1.innerHTML == turn && boxr2c1.innerHTML == turn && boxr3c1.innerHTML == turn) {
		// first column matching
		colorMatchingBoxes(boxr1c1, boxr2c1, boxr3c1);
		return true;
	} else if (boxr1c2.innerHTML == turn && boxr2c2.innerHTML == turn && boxr3c2.innerHTML == turn) {
		// second column matching
		colorMatchingBoxes(boxr1c2, boxr2c2, boxr3c2);
		return true;
	} else if (boxr1c3.innerHTML == turn && boxr2c3.innerHTML == turn && boxr3c3.innerHTML == turn) {
		// third column matching
		colorMatchingBoxes(boxr1c3, boxr2c3, boxr3c3);
		return true;
	} else if (boxr1c1.innerHTML == turn && boxr2c2.innerHTML == turn && boxr3c3.innerHTML == turn) {
		// diagonal from left
		colorMatchingBoxes(boxr1c1, boxr2c2, boxr3c3);
		return true;
	} else if (boxr1c3.innerHTML == turn && boxr2c2.innerHTML == turn && boxr3c1.innerHTML == turn) {
		// diagonal from right
		colorMatchingBoxes(boxr1c3, boxr2c2, boxr3c1);
		return true;
	} else {
		return false;
	}
}


