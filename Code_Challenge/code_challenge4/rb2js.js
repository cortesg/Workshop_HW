//a function that opens the door if the password is correct
function open_door(password){               
  var correct_password = "OpenSesame";
  if (password == correct_password) {
    output = "The door is open.";         
  } else {
    output = "You fall to your doom.";
  };
  return output;             
};

alert(open_door("OpenSesame"));    //alerts opens
alert(open_door("should fail"));  //fails


// a function that makes a sandwich from a js object, displays in console
function sandwich(ingredients){         
   console.log(ingredients['bread'] + " bread");
   console.log(ingredients['cheese'] + " cheese");
   console.log(ingredients['protein']);
   console.log(ingredients['condiments']);
   console.log(ingredients['bread'] + " bread");
};

var fishy = {
  bread:"white", 
  cheese:"american", 
  protein:"tuna", 
  condiments:"mayo"
};
sandwich(fishy);

// Displays:
// white bread
// american cheese
// tuna
// mayo
// white bread