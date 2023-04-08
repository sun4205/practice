var display = document.getElementById("display");
var operator;
function numberClicked(number) {
	console.log("the number is ", number);
	// display.innerText += number;
	display.innerText = display.innerText + number;
}



function functionClicked(func) {
	if (func == "c") {
		display.innerText = "";
	} else if (func == "=") {
		var numbers = display.innerText.split(operator);
		console.log("the numbers are ", numbers);
		console.log("the operator is ", operator);
		var num1 = parseFloat(numbers[0]);
		var num2 = parseFloat(numbers[1]);
		var result;
		if (operator == "+")
			result = num1 + num2;
		else if (operator == "-")
			result = num1 - num2;
		else if (operator == "x")
			result = num1 * num2;
		else 
			result = num1 / num2;
		display.innerText = result;

	} else {
		operator = func;
		display.innerText = display.innerText + func;
	}
	
	/*
	1. javascript split function
	2. javascript array!!!!
	3. style the calculator
	4. make the function buttons align to the right
	*/


} 


var text = "12+1+3-4";
console.log(text.split("+"));
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[4]);
var i = 0;


var names = ["hanna", "mir", "bill", "robert", "peter", "alskjdf", "asef", "asdfas", "strgi", "asdfas", "asfsdfs"];
console.log(names.length);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

for (var i = 0; i < names.length; i = i+1) {
	console.log(names[i]);
}


// homework --- study loops and examples
