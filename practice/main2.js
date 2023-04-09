var lunch = ["rice", "chicken", "beef", "goat", "fish"];

var prices = [10.34, 20, 25, 35.65, 15];


for (var i = 0; i < lunch.length; i++) {
	console.log(i + ". " + lunch[i] + "    $" + prices[i]);
}

var item = parseInt(prompt("Please enter an item number:"));

while(item < 0 || item >= lunch.length) { // keep asking when user puts a wrong item number
	var item = parseInt(prompt("Invalid item number. Please enter an item number:"));
}

var quantity = parseInt(prompt("How many " + lunch[item] + " do you want?"));

while (quantity <= 0) {
	var quantity = parseInt(prompt("Invalid Quantity. How many " + lunch[item] + " do you want?"));
}


console.log("You ordered " + quantity + " "+ lunch[item]);
console.log("your total is" + prices[item]*quantity);


/*

1. watch videos on while loops
2. watch vidoes on javascript prompt.
write a function that prints a values n number of times using while loop

*/

function print(val, n) {
var string="";
while(n>0) {
	string += val;
	n--;
}
return string;
}

function print2(val, n) {
	while (n>0){
		console.log(val);
		n--;
	}
}

//console.log("hanna".repeat(10));
// var result = print("hanna", 10);
print2("hanna", 10);

function printer(v,n){
	var count=0;
	var string="";
	while(count<n) {
		string += v;
			count++;	
			console.log(v);
		
			
	}

	}
	


printer("peter",7);


function print3(val, n) {
	for(var i=0; i<n; i++){
		console.log(val)
	}
}

print3("hanna",5);







names = ["mir", "hanna", "george", "adam", "peter", "wendy","tom"];

/* write a function that prints name that are less than n letters/characters */

function printNames(n) {
	
	var i=0;

	while(i<names.length){
		if(names[i].length<=n){
			console.log("A name less than " + n + " characters are " + names[i]);
		}
		i++
	}
		   

	}

   printNames(3);


   var car = {
	fuel: "gas"
};

function addFeature() {
	var key = document.getElementById("key").value;
	var value = document.getElementById("value").value;
	
	car[key] = value;

	if(car[key]in car){
		
	}

    
   	
	console.log(car);
	

 








/*
 part 1: when I add a property that already exists in the car, show an alert to the user and do not add.
 part 2: when I add a property that already exists, ask the user if they want to update, if they say yes then
 update the the property, if they say no, then do not update the property. (hint: use prompt)
*/


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

for(key in persons) {
	console.log("question " + key) // index of the list (0,1,2,3)
	var person = persons[key]; // each item in the list
	var result = isEvenAndGreater(person.age); // calling the isEvenAndGreater function and saving the output in variable called result
	if (result == true) { // check to see if result is strue
 		console.log(person.name); // print the person's name
	}
}


