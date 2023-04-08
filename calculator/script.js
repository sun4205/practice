function calculate() {
	var firstNumber = parseInt(document.getElementById("num1").value);
	var secondNumber = parseInt(document.getElementById("num2").value);
	var operator = document.getElementById("operator").value;
	var result;
	if (operator === '+') {
		result = firstNumber + secondNumber;
	} else if (operator === '-') {
		result = firstNumber - secondNumber;
	} else if (operator === '*') {
		result = firstNumber * secondNumber;
	} else { 
		result = firstNumber / secondNumber;
	}

	var resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "The result is " + result;	
}


var v = 1; // is a number;
var v1 = 'hello my name is Hanna' // is a string
var v3 = true; // is a boolean
var v4 = false; // is a boolean

var v5 = [1,2,3,4,6,6,7]; // is an array
var v6 = ['mir', 'hanna', 'george', 'robert', 'soju'];


/*
1. what is a variable?
2. what does it mean by "declaring a variable"
3. what does it mean by "initializing a variable"
4. what is string / number / boolean / array
5. what is DOM in javascript
6. javascript DOM manipulation (https://www.w3schools.com/js/js_htmldom.asp) -- upto DOM html
*/



