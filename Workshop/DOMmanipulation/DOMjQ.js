$(document).ready(function() {	
	$("#passGo").on("click", function(){
			var pass = $('#password').val()
			if (pass == "12345678") {
				alert("Password confirmed.")
				$('#curry').html("<h1>Congrats for getting the right format!</h1>") //Why doesn't the changed text here stay on the screen? Was it because the function is attached to the Submit button? If so, I'm not sure how to make it permanent still.
			} else {
				alert("Password should be 12345678.")
			} 
		})
	$("#username").keypress (function(e) {
		var thing = $('#username').val()
			$('#curry2').text(String.fromCharCode(event.keyCode))  
	})








// 	// FAILED USERNAME VALIDATOR BELOW
// 	$(".passGo").on("click", function(){
// 		var user = document.getElementById('username').value
// 		//var val = $("username").val()
// 		if(isNumeric(user)) { 
// 			alert("Username confirmed.") 
// 		} else { 
// 			alert("Username must contain at least 1 number.") 
// 		}
// 	}) //test function??
}) 

// //Dave's User Validation code:
// for i=0 i < str.lenght, i++
// 	if str[i] % 1 ==0
// 		console.log("is a number")
// 	else
// 		console.log("not a #")







//FAILED:
// <!-- var pass = $('#password').val()
// 	if(pass=="12345678") { // && username has a number {
// 	$('#curry').html("<h1>Congrats for getting the right format!</h1>") 
// 	}  -->



// Exercise Part 1
// Update the form you made in last workshop to use the jquery library.

// checks that the password is 12345678

// checks that the username contains at least one number

// if anything is wrong, send an alert message

// Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.

// Exercise Part 2
// Update your Javascript file that listens for a keypress with the jQuery library.

// When the user presses that key, the text of the <h1> should show the value of the key they have pressed.

// Example: If the user presses "J", the text inside the <h1> should be "J".
// Previous Next
