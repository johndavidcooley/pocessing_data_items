var answerOne = document.querySelector('#answer1');
var answerTwo = document.querySelector('#answer2');
var answerThree = document.querySelector('#answer3');
var answerFour = document.querySelector('#answer4');
var answerFive = document.querySelector('#answer5');
var answerSix = document.querySelector('#answer6');


// Question 1
// Show me how to calculate the average price of all objects.
//
// We need to map [items] into a single array that includes
// only the prices. Then we need to reduce the new array into
// a single number equal to the sum of all prices. Then we
// need to didve the sum of all prices by the number of
// objects in [items].

var arrayOfPrices = items.map(function(obj) {
	return obj.price;
});
var totalPrice = arrayOfPrices.reduce(function(sumOfPrice, currentPrice) {
	return sumOfPrice += currentPrice;
}, 0);
var avgPrice = Math.round((totalPrice / items.length) * 100) / 100;
answerOne.innerHTML = "The average price is $" + avgPrice;


// Question 2
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
//
// We need to filter [items] to return a new array of items
// with prices greater than 14.00 AND less than 18.00.


var newArray = items.filter(function(object) {
	return (object.price > 14.00 && object.price < 18.00);
});
var namesOfStuff = newArray.map(function(object) {
	return object.title;
})
answerTwo.innerHTML = namesOfStuff;



// Question 3
// Which item has a "GBP" currency code? Display it's name and price.
//
// We need to filter [items] into an array with a single object
// in which the object has a property of "currency_code" that
// is equal to "GBP". Then we need to find the name and price
// of the item in our single array.

var hasGbp = items.filter(function(object) {
	return object.currency_code === "GBP";
});
var nameOfGbp = hasGbp.map(function(object) {
	return object.title;
});
var priceOfGbp = hasGbp.map(function(object) {
	return object.price;
});
// var pounds = '';
answerThree.innerHTML = nameOfGbp + ' costs &pound;' + priceOfGbp;


// Question 4
// Display a list of all items who are made of wood.
//
// We need to filter [items] into an array containing items
// made of wood. Then we need to get the title of each
// object in the array.

var madeWood = items.filter(function(object) {
	if(object.materials.indexOf("wood") > -1 ) {
		return object;
	};
});
var titleWood = madeWood.map(function(object) {
	return object.title;
});
answerFour.innerHTML = titleWood;


// Question 5
// Which items are made of eight or more materials? Display the name,
// number of items and the items it is made of.
//
// We need to filter [items] into a new array consisting of
// only object with the proprty "materials" that is at
// least 8.

var madeOf8 = items.filter(function(object) {
	return object.materials.length >= 8;
});
finalAnswer = madeOf8.map(function(object) {
	return object.title + " has " + object.materials.length + " materials: " + object.materials;
});
answerFive.innerHTML = finalAnswer;

// Question 6
// How many items were made by their sellers?
//
// We need to filter [items] into a new array consisting of
// objects with a property of "who_made" equal to "i_did".
// Then we need to find the length of the new array.

var madeBySeller = items.filter(function(object) {
	return object.who_made === "i_did";
});
var numMadeBySeller = madeBySeller.length;
answerSix.innerHTML = numMadeBySeller + " were made by their sellers"

