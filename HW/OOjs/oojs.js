						//Object Oriented Javascript Cheatsheet

//<----------------------  Object Literal --------------------------->

var my_car = {  brand: "Prius",   wheels: 4 }
//easy way

//object = brand AND wheels 
//instance = brand OR wheels

//<----------------- Constructor Function ---------------->

function Car(brand, wheels){   
	this.brand = brand;
	this.wheels = wheels; 
};

//Here we are instantiating a new instance of Car
var brother_car = new Car("Honda", 4)
//brother_car = Car {brand: "Honda", wheels: 4}

function human(eyes, legs, skin_color){
	this.eyes = eyes;
	this.legs = legs;
	this.skin_color = skin_color;
};

var oscar_pistorious = new human(2, 1, "white")
//oscar_pistorius = human {eyes: 2, legs: 1, skin_color: "white"}

//<--------------------- Accessing object attributes and methods ----------------------------->

function Car2(brand, wheels){   
	this.brand = brand;    //attribute <-------
	this.friendly_wheels = function(){     //method <--------
		return "Your car has this many wheels: " + wheels;   
	}  //DOESN'T SEEM TO WORK IF THIS IS ADDED OR SUBTRACTED ELSEWHERE
} 

var gi2 = new Car2("sonata", 4)
//ATTRIBUTE
//gi2 = Car2 {brand: "sonata"}
//gi2.brand || gi2["brand"] = "sonata"
// dot notation vs. square-bracket notation


console.log(gi2.friendly_wheels())
//METHOD
//="Your car has this many wheels: 4"

//<----------------------- Prototypes ------------------------------>

//using above

Car2.prototype.friendly_brand = function(){
   return "This car is a " + this.brand; }

// ALL INSTANCES get access to the new prototype method
console.log(gi2.friendly_brand())
//"This car is a sonata"
new_car = new Car2("tesla", 4)
console.log(new_car.friendly_brand())
//"This car is a Tesla"

//BEFORE-AFTER
gi2.color = "red" // NOTE: // If an attribute is already defined on an instance, // a new prototype attribute does not overwrite existing data.
Car2.prototype.color = "silver"
new_car2 = new Car2("tesla", 4) 
console.log(new_car2.color)
//silver
console.log(gi2.color)
//red

//<-------------------------- Prototypical Objects ------------------------>

function User(fname, lname, email){
   this.fname = fname;   
   this.lname = lname;   
   this.email = email;   
   this.name = function(){return this.fname + " " + this.lname;} 
}
function Admin(){   
	this.admin = true,
	User.apply(this, arguments); // Call parent constructor with admin prototype context. 
}
Admin.prototype = new User(); //Admin now has all of the traits of a User as well as its //own admin boolean flag

var me = new Admin("gino", "cortes", "g@gmail.com") //making me as an object
console.log(me)
//Admin {admin: true, fname: "gino", lname: "cortes", email: "g@gmail.com"}







//<-------------------------------------------------------------- PROBLEMS ------------------------------------------------------------------------------------------------------------>

//<--------------------2. The right way (key and value) ----------------------------------------------------------------------------> 

var getProps = function(obj){
   for(var prop in obj){
   	console.log(prop + ": " + obj[prop]);
   }
}

var a_car = {  brand: "A1000",   wheels: 4 }
getProps(a_car)
// brand: A1000
// wheels: 4

//<--------------------2a. Just the keys ----------------------------------------------------------------------------> 

var getProps = function(obj){
   var props = new Array();
   for(var prop in obj){
      props.push(prop);  // props.push(obj[prop]) for the values
   }
   return props;
}

var a_car = {  brand: "A1000",   wheels: 4 }
console.log(getProps(a_car)) // ["brand", "wheels"]

//Object.getPropertyNames(Object)
//FUTURE - try putting a constructor in    prop[key]

// <-------------------- 3. Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. getCurrentValue should return the last answer returned from multiply.------------------------------>  

// Object Multiplier
function Multiplier(){
	this.previous_number = 1;
}

Multiplier.prototype.multiply = function(num){
	return this.previous_number = this.previous_number*num;
}

//getCurrentValue method that returns latest value of object
Multiplier.prototype.getCurrentValue = function(){
	return this.previous_number;
}

//Creating instances of Multiplier object
var go = new Multiplier();
go.multiply(9)
console.log(go.getCurrentValue()) //9
go.multiply(2)
console.log(go.getCurrentValue()) //18

// <-------------------- 4. Photo --------------------------------------------------------> 

function Photo(name, location){
	this.name = name,
	this.location = location 
}
var wtc = new Photo("World Trade Center", "NYC");
var liberty = new Photo("Statue of Liberty", "NYC");
var great_wall = new Photo("Great Wall", "China");

function Album(){
    this.photos = [];
}

gino_album = new Album()

Album.prototype.addPhoto = function(photo){
	this.photos.push(photo)
}

Album.prototype.findPhoto = function(index){ 
	console.log(this.photos[index-1])  // subtract 1 so you don't look for the 0th photo
}

Album.prototype.listAllPhotos = function(){ 
	var show = [];
	for (var i = 0; i < this.photos.length ; i++){
  		show.push(this.photos[i]);
	}
	console.log(show) //FUTURE - Gino's album: [show]
}

gino_album.addPhoto(wtc)
gino_album.addPhoto(liberty)
gino_album.listAllPhotos()
gino_album.findPhoto(1)

// [ { name: 'World Trade Center', location: 'NYC' },
//   { name: 'Statue of Liberty', location: 'NYC' } ]
// { name: 'World Trade Center', location: 'NYC' }


// <-------------------- 4a. Photo (returns not an object way) ) --------------------------------------------------------> 


function Photo(name, location){
	this.name = name,
	this.location = location 
}
var wtc = new Photo("World Trade Center", "NYC");
var liberty = new Photo("Statue of Liberty", "NYC");
var great_wall = new Photo("Great Wall", "China");

function Album(){
    this.photos = [];
}

gino_album = new Album()

Album.prototype.addPhoto = function(photo){
	this.photos.push(photo)
}

Album.prototype.findPhoto = function(index){ 
	console.log(this.photos[index-1].name + " taken in " + this.photos[index-1].location)  // subtract 1 so you don't look for the 0th photo
}

Album.prototype.listAllPhotos = function(){ 
	var show = [];
	for (var i = 0; i < this.photos.length ; i++){
  		show.push(this.photos[i].name+" taken in "+ this.photos[i].location);
	}
	console.log(show) //FUTURE - Gino's album: [show]
}

gino_album.addPhoto(wtc)
gino_album.addPhoto(liberty)
gino_album.listAllPhotos()
gino_album.findPhoto(1)

//[ 'World Trade Center taken in NYC', 'Statue of Liberty taken in NYC' ]
// World Trade Center taken in NYC


// Album.prototype.listAllPhotos = function(){ 
// 	for (var i = 0; i < this.photos.length ; i++){
//   		console.log(this.photos[i].name+" taken in "+ this.photos[i].location);
// 	}
// }


//Album.prototype.listAllPhotos = function(){ 
// 	console.log(gino_album) 
// }

// <-------------------- 4b. Photo (my original way, but not the right way since Album isn't an object) -------------------------> 

function Photo(name, location){
	this.name = name,
	this.location = location 
};
var wtc = new Photo("World Trade Center", "NYC");
var liberty = new Photo("Statue of Liberty", "NYC");
var great_wall = new Photo("Great Wall", "China");

var Album = [];
Album[0] = wtc;
Album[1] = liberty;
Album[2] = great_wall

console.log(Album[0]) // Photo {name: "World Trade Center", location: "NYC"}

Album[3] = new Photo("NYCDA", "NYC");
console.log(Album[3]) // Photo {name: "NYCDA", location: "NYC"}

console.log(Album) //prints whole album [Photo, Photo, Photo, Photo]

// <-------------------- 5. School  -------------------------> 

function Person(name, age){
	this.heart = true,
	this.brain = true, 
	this.name = name;
	this.age = age;   
};

function Teacher(name, age, salary){
	this.degree = true,
	this.salary = salary,
	Person.call(this, name, age);
}
// Teacher.prototype = Object.create(Person.prototype)
var mr_bob = new Teacher("bob", 42, 60000)
// console.log(mr_bob)

function Student(){
	this.degree = false,
	Person.apply(this, arguments);
}

var alice = new Student("alice", 15)
var james = new Student("james", 16)


function School(){
    this.people = [];
}

// var School = [];
// School[0] = alice;
// School[1] = mr_bob;
// School[2] = james;

// console.log(School) //it's a little long


School.prototype.addPerson = function(person){
	this.people.push(person)
}


var NYCDA = new School()
NYCDA.addPerson(alice)
NYCDA.addPerson(mr_bob)
console.log(NYCDA)





