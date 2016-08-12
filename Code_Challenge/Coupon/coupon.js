
$(document).ready(function() {
	$("#target").click(function() {
		checkCoupon()
	}) 
})

//valid if there is a vowel at end of code
function checkCoupon() {
	var coupon1 = prompt("Please enter your coupon code.")
		if(hasVowel(coupon1) == true) {
    		alert("Thank you! Your coupon has been applied") //code challenge instructions are contradictory - print to console or alert if valid? change alert to console.log if the other way.
  	} else {
    		alert("Sorry, this coupon is not valid")
  	}
}

function hasVowel(code) {
  for (i = 0; i < code.length; i++) {
    if(code[code.length-1] == "a" || code[code.length-1] == "e" || code[code.length-1] == "i" || code[code.length-1] == "o" || code[code.length-1] == "u" ) { //check regular expression
      return true
    }
  }
}


//not enough time to upper/lowercase letters