var display=document.getElementById("display");
var operator
function numberClicked(number) {
	console.log("the numberis", number);
	display.innerText=display.innerText+number;
}



function functionClicked(func) {
	if (func=="c") {
		display.innerText="";		
	} else if (func=="=") {
		var numbers=display.innerText.split(operator);
		console.log("the number are",numbers);
		console.log("the operator is", operator);
		var num1=parseFloat(numbers[0]);
		var num2=parseFloat(numbers[1]);
		var result;
		if (operator=="+")
			result=num1+num2;
		else if (operator=="-")
			result=num1+num2;
		else if(operator=="*")
			result=num1+num2;
		else 
			result=num1/num2;
		display.innerText=result;

	} else {
		operator = func;
		display.innerText=display.innerText+func;

	}
}