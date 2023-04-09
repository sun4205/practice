function add(num1, num2) {
	var result = num1 + num2;
	return result;
}

	

function isGreater(num1, num2) {
	if (num1 > num2)
		return true;
	else
		return false;
}




var sum = add(3,4)
console.log(sum);

var greater = isGreater(4,3);
console.log(greater);


 var names = ["mir", "hanna", "adam", "henry", "hector", "lisa"];
//var names = ["mir", "hanna"];

function nameislong(names) {
	if(names.length>3)
		return true;
	else
		return false;
}



if (nameislong(names)) {
	console.log("the list is long");
} else {
	console.log("the list is short");
}




var list1 = ["robert", "hanna","mir"];
var list2 = ["adam", "ken", "hector", "yo", "hanna", "mir"];

function addList(l1, l2) {
	for (var item of l2) {
		if (l1.includes(item) == false) {
			l1.push(item);
		}		
	}
	return l1;
}

var l = addList(list1, list2);
console.log(l);







	var ispsycho = true;

	function ispsychoPa(human) {
		if(human==true) {
			return "you are psychopathic!"
		} else 
		return " you are not psychopathic!"
	}

	var a = ispsychoPa(ispsycho);
	console.log(a);

	function ispsychopa(human){
		var ispsycho = true;
		if(human==true){
			return "you are psychopathic"
		}else
		return"you are not psychopathic"
	}
	 var a = ispsychopa(ispsycho);
	 console.log(a);

	

    var psycho=document.getElementById("psy");
	function bb(kim){
		if (kim != "Hanna")
			alert(kim + " You are psychopathic!");
		else
			alert("you cannot say that")
	}

/*

homework: learn about loop, functions, function return values, if else*/



var cars = ["ford", "dodge", "bmw", "mercedes", "toyota", "jeep"];

function findCar(carToFind){
	var found = false;
	for(var car of cars) {
		if(car == carToFind) {
			console.log(car + " is found");
			found = true;
			break;
		}
	}
	if (found == false)
		console.log(carToFind + " is NOT found");
}

var a = findCar("ford");
console.log(a);





function calculate(num1, num2, operator) {
	if (operator == "+")
		return num1 + num2;
	else if (operator == "-")
		return num1 - num2;
	else if  (operator == "*")
		return num1*num2;
	else if (operator == "/"){
		if(num2!==0) {
			return num1/num2;
		} else {
			console.log("You cannot divide with 0");
		}
	}
}

var a = calculate(100, 0, "/");
console.log(a);





// q1
numbers = [67,23,134,65,234,2,5,7,8,5,3,2];

// write a function to count how many numbers are greater than a specific number

function countGreater(num) {
	var count =0;
	for(var number of numbers) {
		if(number> num){
			count++;
		}

	}
		return count;
}

var a = countGreater(3);
var b = countGreater(100);
console.log("COUNTER GREATER " + a);
console.log("COUNT GREATER " + b);




// write a function to count how many are even numbers
function countEven() {
	var count = 0;
	for(var number of numbers) {
		if(number % 2===0){
			count++;
		}
	}
		return count;
}

var a = countEven();
console.log("counteven" + a);




// function to count the numbers that are divisible by a specific number
function countDivisible(divisor) {
	var count = 0;
	for(var number of numbers) {
		if(number % divisor == 0) {
			count++;
		}
	}
       return count;
}

var a = countDivisible(2);
console.log("divisor" + a);

//-----------------------------------------------------------------------------------------------//

//prctice
var numbers = [12,334,56,56,543,32,32,4,565,767,5454,343,23232,46,55,4543332,323];

function findNum() {
	var num =[];
	for(var number of numbers) {
		if(number>10 && number%2===0 && number<400) {
			    num.push(number)
			
		}
	}
	return num;
}
 
 function findNum() {
 	var count = 0;
 	for(var number of numbers) {
 		if(number>10 && number%2===0 && number<400){
 			count++;
 		}
 	}
 	return count;
 }
 var a = findNum();
 console.log("another count" + a);

var count=0;
for(var number of numbers) {
	if(number>10 && number%2===0 && number<400){
		count++;
	}
}
console.log("count" + count);


var words = ["hello", "my", "name", "is", "Hanna", "and", "I", "want", "to", "go", "on", "a", "vacation"];

var result = "";

for (var word of words) {
	result = result + " " + word ;
}

console.log(result);

var nums = [56,34,27,-65,27,-88,-17,-27,-88,-43,45,39,57,90,-12,66,12,7,13,-7,34,27,14,99,87,44,23,33];
		/*
		0. print all the numbers		
		1. print all the negative numbers
		2. print all the positive numbers
		3. print all the numbers that are between -10 and 40
		4. print the sum of all positive numbers
		5. print the sum of all negative numbers
		6. print the sum of all numbers
		7. print the sum of all positive even numbers
		8. print the sum of all negative numbers that are odd
		*/


		for (var num of nums) {
			console.log(num);
		}

		for (var num of nums) {
			if(num<0){
				console.log("number 1 is"+ num);
			}
		}

		for( var num of nums) {
			if(num>0){
				console.log("number 2 is" + num);
			}
		}

		for(var num of nums) {
           if(num<40 && num>-10){
           	console.log("number 3 is" + num);
           }
		}

		var sum=0;
		for(var num of nums) {
			if(num>0){
				sum=sum+num;
			}
		}
		console.log("number 4" + sum);

		var sum=0;
		for(var num of nums) {
			if(num<0){
				sum=sum+num;
			}
		}
		console.log("number 5" + sum);

		var sum=0;
		for(var num of nums) {
			sum=sum+num;
		}
		console.log("number6" + sum);

		var sum=0;
		for(var num of nums) {
			if(num>0 && num%2===0){
				sum=sum+num;
			}
		}
		console.log("number7" + sum);

		var sum=0;
		for (var num of nums) {
			if(num<0 && num%2!==0){
				sum=sum+num;
			}
		}
		console.log("number8" + sum);

function calculate(num1, num2, operator) {
	if (operator == "+")
		return num1 + num2;
	else if (operator == "-")
		return num1 - num2;
	else if  (operator == "*")
		return num1*num2;
	else if (operator == "/"){
		if(num2!==0) {
			return num1/num2;
		} else {
			console.log("You cannot divide with 0");
		}
	}
}

var a = calculate(100, 0, "/");
console.log(a);

/*var lunch = ["rice", "chicken", "beef", "goat", "fish"];

var prices = [10.34, 20, 25, 35.65, 15];


for(var i=0; i<lunch.length; i++){
	console.log(i +". " + lunch[i] + " $" + prices[i]);
}

var item = parseInt(prompt("please enter an item number"));
while(item<0 || item>=lunch.length){
	var item = parseInt(prompt("invaild number please enter an item number"));
}

var quantity = parseInt(prompt("how many " + lunch[item] + " do you want?"));
while(quantity<=0){
	var quantity = parseInt(prompt("invaild number how many " + lunch[item] + " do you want?"));
}

console.log("your order is " + quantity + " " + lunch[item]);
console.log("your total is " + prices[item] * quantity);*/



/*var wishes = ["house", "car", "boat", "building", "won rotery"];
var prices = [60, 20, 30, 40, 70];

for(var i=0; i<wishes.length; i++){
	console.log(i + ". " + wishes[i] + " $" + prices[i]);

	var wishitem = parseInt(prompt("please enter an your whishes number"));
	while(wishitem<0 || wishitem>=wishes.length){
		var wishitem = parseInt(prompt("invaild number please enter again"));
	}
}
var amount = parseInt(prompt("how many" + wishes[wishitem] + " do you want"));
while(amount<=0){
	var amount = parseInt(prompt("invalid how many "+ wishes[whishitem] + "do you want?" ));
}

console.log("your wishes are " + amount + " " + wishes[wishitem]);
console.log("your total is" + prices[wishitem] * amount);*/


function calculate(num1, num2) {
	var multiplication = num1 * num2;
	var addition = num1 + num2;
	var minus = num1 - num2;
	var result = [multiplication, addition, minus];
	return result;
}
var add = calculate(6,5)[2] // [6,5]
console.log(add);

var minus = calculate(10,5)[2] // [6,5]
console.log(minus);

console.log(calculate(12,10)[0]);

console.log(calculate(6,5)[0]-calculate(10,5)[1]);

var number = 12;

function isEvenAndGreater(num) {
	return (num % 2 == 0) && (num > 10);
}

console.log(isEvenAndGreater(number)); 



var persons = [
	{name : "Mir", age: 12},
	{name: "Hanna", age: 10},
	{name: "Alice", age: 26},
	{name: "Kim", age: 26},
	{name: "Robert", age: 8},
	{name: "Denise", age: 13}
]





var subtotal=50;
var shipping=7;
var total = subtotal + shipping;

var elsubtotal=document.getElementById("subtotal");
elsubtotal.innerHTML="$ " +  subtotal;
var elshipping = document.getElementById("shipping");
elshipping.innerHTML="$ " +  shipping;
var eltotal = document.getElementById("grandtotal");
eltotal.innerHTML="$ " +  total;