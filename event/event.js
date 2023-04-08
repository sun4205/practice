var d = document.getElementById("d");
// d.addEventListener("mouseout", mouseOutEvent);
// d.addEventListener("mouseover", mouseOverEvent);
// d.addEventListener("click", clickEvent);
// d.addEventListener("dblclick", dblClickEvent);
// d.addEventListener("mousedown", mouseDownEvent);
// d.addEventListener("mouseup", mouseUpEvent);
d.addEventListener("mousemove",mouseMoveEvent);

function mouseOverEvent(event) {
	console.log("Your mouse is in");
}

function mouseOutEvent(event) {
	console.log("Your mouse is out");
}

function clickEvent(event) {
	console.log("your mouse is cliked")
}

function dblClickEvent(event){
	console.log("your mouse is double clicked")
}

function mouseDownEvent(event){
	console.log("your mouse is pressed")
}

function mouseUpEvent(event){
	console.log("your mouse is released")
}

function mouseMoveEvent(event){
	console.log("mouse move", event);
	var x = event.screenX;
	var y = event.screenY;
	var redDiv = document.getElementById("d");
	redDiv.style.left = x + "px";
	redDiv.style.top = y + "px";
}

var key = document.getElementById("key");
key.addEventListener("keydown",keyDownEvent);
key.addEventListener("keyup",keyUpEvent);
key.addEventListener("keypress",keyPressEvent);


function keyDownEvent(){
	console.log("you pressed a key")
}

function keyUpEvent(){
	console.log("you released a key")
}

function keyPressEvent(){
	console.log("you pressed a key inside input field")
}

function changePerson(){
	var par = document.getElementsByClassName("par");
		for(var con of par){
		con.innerHTML = "hello Mir";
	}

}

function changeToRed(){
	var items= document.getElementById("items").children;
	for(item of items){
	if(item.classList.contains("cold")){
		item.classList.remove("cold");
		item.classList.add("hot");
	}
	}
}

function countHot(){
	var count=0;
	var items = document.getElementById("items").children;
	for(item of items){
		if(item.classList.contains("hot")){
			count++;
		}
	}
 var a = document.getElementById("a");
     a.innerHTML="The number of hot is " + count;
}


function countBlue(){
	var items=document.getElementById("items").children;
	var count=0;
	for(var item of items){
         if(item.classList.contains("cold")){
         	count++;
         }
	} var a = document.getElementById("a");
	a.innerHTML="The number of blue is " + count;
}

function removeIceCoffee(){
	var items = document.getElementById("items").children;
	var parent = document.getElementById("items");
	var found = false;
	for(var i=0; i<items.length; i++){
		var itemName = items[i].innerText;
		if(itemName=="ice coffee"){
			parent.removeChild(items[i]);
			found = true;		
		} 
	}
	if (found == false) {
		var a = document.getElementById("a");
     	a.innerHTML="Could not find ice coffe";

	}
}
/*
page 246 do examples of mouse events and keyboard events
for keyboard events, you need to create a text input and add event listener on it.
*/

var key = document.getElementById("text-input");


var text="Hi Hanna how are you?"
var correct = true;	

	for(var i=0; i<text.length; i++){
		
		console.log(text.charAt(i));
	}


		

var pj1 = $("#me").html(); 
console.log(pj1);

$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);





