						//Javascript Cheatsheet

//<----------------------  Variables --------------------------->

/*

var a = 1
var b = 2
var c = "Gino"
var abcd = true
***must add var*****

*/

//<----------------- Debugging (alerts, comments, the console) ---------------->

/*

Stack Trace
• Many times, you'll ﬁnd the answer to the bug in the error message you get 
• Occasionally it will even indicate the exact ﬁle and line number the problem
was caused by:
console.lg("hi") Uncaught TypeError: undefined is not a function script.js:10 // You tried to call something that wasn't a function // In this case, "lg" is not a function of the console, "log" is

"debugger" pauses everything and stops anything after that line;

alert("Screen pops up to show message")
console.log("Shows message in console") 
console - built in tool in browser where you can run Javascript code directly, shows output */
//comment


//<--------------------- Different data types ----------------------------->

/* 

"string" 
8 
boolean - true, false
undefined - no value
arrays - (look down)
objects - like arrays  {
	var car = {make: 'Honda', model: 'Civic' {
	console.log(car['model']);    (='Civic')
	console.log(car.model);    (='Civic')
}

typeof "asdfsd"; // string

var array = [2,3]
array.indexOf(3); // 1

*/

//<----------------------- Arrays ------------------------------>

/*

var singleDimensionArray = [1, x, "xyz", true,];
var multiDimensionArray = [[true, false], [[1, 4], 3]];

*/

//<-------------------------- Testing ------------------------>

/*

• Any test returns a boolean true or false • To test if two strings are equal:
"stringone" === "string two"; >false
• Using three equals signs instead of two also checks the object type • If you don't check type, these are both true:
(10-5) == 5; (10-5) == "5";


More testing examples
To test if two strings are NOT equal:
"stringone" !== "string two"; >true
To test if one number is greater than another:
5 > 10; > false
<, >, <=, >= are also valid comparison operators


REMEMBER NOT!

*/

//<---------------------- Logic---------------------------------->

/*

^ && = and
|| = or

5>2 = true
4+4 < 1 = false
4+4 < 1 && 5>2 = false
4+4 < 1 || 5>2 = true

*/

//<--------------------------- Functions --------------------------->

/*

way to encapsulate code for later use, can take arguments
var P =  function(x) {
	console.log("s");
};
P(2) //prints "s"
*/

//<--------------------------------- LOOPS -------------------------------->
var x = 20;
var z = 300;
function ifLoopExample(){	
	if (x==z) {
		console.log('abc')
	} else {
		console.log('zzz')
	}
}

ifLoopExample()

//<---------------------------------PROBLEMS ------------------------------>

var awesome = function(a) {  //Function#1
	alert("You are awesome!");
};

var areaSquare = function(sidelength) { //Function#2
	alert(sidelength*sidelength);
};

var areaRectangle = function(height, width) {  //Function#3
	alert(height * width);
};

//#4 multi-dimensional array
/*
var myWarriorsArray = [["Curry", "Point Guard", 30], [["Thompson", "Shooting Guard", 11]], ["Kerr", "Coach"]]; 
console.log([(myWarriorsArray[0][0]), (myWarriorsArray[1][0])]); // [Curry, Thompson]
*/

//#5 less than 10
var lessThanTen = function(number) { 
	if(number < 10) {
		alert("Your number is less than 10.");
	} else if(number > 10) {
		alert("Your number is " + number + " and it is greater than 10.");
	} else if(number == 10) {
		alert("Your number is 10.")
	} else {
		alert("Please input a number.")
	}
};
lessThanTen("not a number");  // alerts "Please input a number"

//#6 change var value
lessThanTen(10); // alerts "Your number is 10."
lessThanTen(-1); // alerts "Your number is less than 10."

//#8 Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
var nameReturn = function(name) { 
	console.log('You have entered ' + '"' + name + '"'); 
};
nameReturn("Gino"); // prints 'You have entered "Gino"'

//#9 Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
var noArg = function() { 
	console.log("Can't you put in an argument???");
};
noArg(); // prints "Can't you put in an argument???"


var prizeDoor = function(door) { //#Optional - Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options.
	if(door==1 /*|| (door==="door 1".toLowerCase()*/) {      //how to get rid of space???
		alert("You win a rubber duck!");
	} else if(door==2 /*|| door==="door 2".toLowerCase()*/) {
		alert("You win a $10,000 scholarship to attend the New York Code + Design Academy!");
	} else if(door==3 /*|| door==="door 3".toLowerCase()*/) {
		alert("You win an all-expense paid trip to Oakland, California to see Stephen Curry and the Golden State Warriors basketball team!!!");
	} else {
		alert("Please choose door 1, 2, or 3.");
	}
};
prizeDoor(3); // alerts the (Steph Curry with the shot boi) one

