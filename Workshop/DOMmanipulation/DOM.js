// function dateValidator() {
// // 	var realD = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
// // 	if(form.date.value != '' && !form.date.value.match(realD)) {
// //       alert("Invalid date format: " + form.date.value);
// //       form.date.focus();
// //       return false;
// // };
// 	var date = document.getElementById('date').value;
	
// 	//if(document.ginosForm.date === "")

// 	// var theDate = new Date();
// 	var month = theDate.getMonth() //+ 1  // Is this jQuery?...trying to figure out how to get what is inputted in the date field to javascript...
// 	var day = theDate.get
// 	var year = theDate.get

// 	if (month < 10) {
// 		month = "0" + month
// 	}

// 	if (day < 10) {
// 		day = "0" + day
// 	}

// 	if (year < 99) {
// 		year = year[2] + year[3]   //the last 2 numbers, i'm not sure if this is right??
// 	}
        
//  if string.length !==9 {
//	FAIL
//}

// 	var realDate = month + "/" + day + "/" + hours + 
// 	"/" + year

// var dateFormat = new Date(realDate);

//I'm not sure how I can input the new date into the system
//split then array...also try finding length 

//} var array = ["12", "04", "1941"]  []  .split  basically take 1st 2nd and 3rd element to see if right format
     // if
     // array[0].length != 2 {

     //}
     // else if array[1].length != 2 {

     //}
     // else if array[2].length != 2

     //} else {
     // 	right
     // }

// [0] = 0 or 1   12/29/93
// [1] = 0  thru 9   [2] = /  [3] = 1 thru 3 | [4] = 0 through 9 |  [5] = / | [6and7] = 0 thourhg 9
// 1st item 01-12 2nd item 01-31 3rd 00-99

/* --------------------- DEFINITELY FAILED CODE OR CLUES ABOVE --------------------- */

function dateValidator() {
	var datee = document.getElementById('date').value
	var res = datee.split("/")
	var month = res[0]
	var day = res[1]
	var year = res[2]
    var monthString = month.toString()   
    var dayString = day.toString()
    var yearString = year.toString()
    if(month > 0 && month < 13 && day > 0 && day < 32 && year > 0 && year < 9999) {
   		if(monthString.length == 2 && dayString.length ==2 && yearString.length ==4)
   	 		alert("Date confirmed.")
   		} else {
			alert("Please enter a valid date in mm/dd/yyyy format.")
	} else {
		alert("Please enter a valid date in mm/dd/yyyy format.")
	}
}  //eh it didn't work.


function userValidator() {
	var user = document.getElementById('username').value; 
	if (user == null || user == "") {
		alert('Please submit a username.')
		return false;
	} else {
		alert('Username confirmed.')
		return true;
	}
}               //Should work.


function passValidator() {
	var pass = document.getElementById('password').value
	if (pass !== "12345") {
		alert("Password should be 12345.")
	} else {
		alert("Password confirmed.")
	}  
}     //Should work. Or at least it works in another file...

function keyPress() {
	var x = document.getElementById("username").value
	if (isNaN(x)) {
		document.getElementById('curry').innerHTML = "<h1>a letter</h1>"			
	} else {
		document.getElementById('curry').innerHTML = "<h1>a number</h1>"
	}
}   // Doesn't work




//  ----------------------------- DEFINITELY FAILED CODE BELOW -----------------------
//h1 , class
	// if(x === 'a' || x === 'b') { //|| x = 'c' || x = 'd' || x = 'e' || x = 'f' || x = 'g' || x = 'h' ||  ) {     //...there has to be a faster way to do this...
	// 	x.innerText = 'letter';	       
	// }        		
	// 	x.innerText = 'letter'
	// var Input =  BLAHHHH         // what is the code for receving the input for what you press?
	// if (BLAHHH =  WHATEVER THE CODE IS FOR A LETTER )     // if you press a letter (which i don't know how to code...)
	// 	var x = document.getElementById('curry').value;                 								
	// 	x.innerText = 'letter'	                            // print 'letter' on h1
	// else if (BLAHHH = WHATEVER THE CODE IS FOR A NUMBER)                         // if you press a # (which i don't know how to code...)
	// 	var y = document.getElementById('curry').value;
	// 	y.innerText = 'number'	                 //if number print 'number'
/* 



