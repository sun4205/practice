var turn = "O";
var winBoxBackground= "blue"
var winBoxColor = "white"

function onBoxClicked(event) {
	var box = event.target
	box.innerHTML=turn;

	var playerWin = isWin(turn);
	if (playaerWin == true) {
       alert("player" + trun + " has Won!");
       disableClicking();
       return;

       if(isBoradfull()) {
       	alert("board is full")
       	disableClicking();
       	return;
       }


       
	}
	if(turn=="x")
		turn="o"
	else
		turn = "x"
}

function disableClicking() {
	document.getElementById("board").style.pointerEvent = "none";

}
function enambleClicking() {
	document.getElementById("board").style.pointerEvent ="auto";

}

function colorMatchingBoxes(box1Div,box2Div,box3Div) {
	box1Div.style.background = winBoxBackground;
	box2Div.style.background = winBoxBackground;
	box3Div.style.background = winBoxBackground;
	box1Div.style.color = winBoxColor;
	box2Div.style.color = winBoxColor;
	box3Div.style.color = winBoxColor;
}


function isBoardFull() {
	var boxr1c1 = document.getElementById("r1c1");
	var boxr1c2 = document.getElementById("r1c2");
	var boxr1c3 = document.getElementById("r1c3");
	var boxr2c1 = document.getElementById("r2c1");
	var boxr2c2 = document.getElementById("r2c2");
	var boxr2c3 = document.getElementById("r2c3");
	var box3c1 = document.getElementById("r3c1");
	var boxr3c2 = document.getElementById("r3c2");
	var boxr3c3 = document.getElementById("r3c3");
	if (boxr1c1.innerHTML="" || boxric2.innerHTML="" ||boxr1c3.innerHTML="" ||boxr2c1.innerHTML=""; || boxr2c2.innerHTML="" || boxr2c3.innerHTML="" || boxr3c1.innerHTML=""||boxr3c2.innerHTML=""||boxr3c3.innerHTML="" ){
		return false;
	}
        else {
        	return  true;
        }
}

function isWin(turn) {
	var boxr1c1 = document.getElementById("r1c1");
	var boxr1c2 = document.getElementById("r1c2");
	var boxr1c3 = document.getElementById("r1c3");
	var boxr2c1 = document.getElementById("r2c1");
	var boxr2c2 = document.getElementById("r2c2");
	var boxr2c3 = document.getElementById("r2c3");
	var box3c1 = document.getElementById("r3c1");
	var boxr3c2 = document.getElementById("r3c2");
	var boxr3c3 = document.getElementById("r3c3");
	if (boxr1c1.innerHTML ==turn && boxr1c2.innerHTML==turn && boxr1c3.innerHTML==turn) {
		colorMatchingBoxes(boxr1c1,boxr1c2,boxr1c3);
		return true;
	}
}
