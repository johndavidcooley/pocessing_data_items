// var items = [{}, {}, {}, {}, {}, ... {}]

// Mid Century Siesta
// Hops shirt
// Dragon beer mug
// Paulaner Das Rathaus
// Bottle cap catcher
// GUN PISTOL
// RUSH ORDER
// 1970s Coors
// Medium Size Welcome
// Follow Me Bring Beer
// 1970s Schlitz
// Libbey 2.5 oz. Shot Glass
// Qty of 2 Groomsmen GIft
// Wine Corkscrew
// Magnetic Wall Mount
// 20% OFF SALE
// The Three Broomsticks
// Engraves Pocket Knife
// Hand Painted Colorful Feather Glass
// Groomsman Gifts
// Bike Beer Growler
// 1970s PBR Glass
// Libbey 14oz Glass
// Libbey 14oz Glass
// Beautiful Vintage Pendant
// 

//Stuff to look at:
//-----title
//-----price
//-----currency_code
//-----Materials

var answerOne = document.querySelector('#answer1');
var answerTwo = document.querySelector('#answer2');
var answerThree = document.querySelector('#answer3');
var answerFour = document.querySelector('#answer4');
var answerFive = document.querySelector('#answer5');
var answerSix = document.querySelector('#answer6');


// Question 1
// Show me how to calculate the average price of all items.

var arrayOfPrices = items.map(function(obj) {
	return obj.price;
});
var totalPrice = arrayOfPrices.reduce(function(sumOfPrice, currentPrice) {
	sumOfPrice += currentPrice;
}, 0);
var avgPrice = totalPrice / items.length;
answerOne.textContent = "The average price is $" + avgPrice;




// Question 2
// Show me how to get an array of items that cost between $14.00 and $18.00 USD

var newArray = items.filter(function(object) {
	return object.price > 14.00 && object["price"] < 18.00;
});
var namesOfStuff = newArray["title"];
answerTwo.textContent = namesOfStuff;



// Question 3
// Which item has a "GBP" currency code? Display it's name and price.

var hasGbp = items.filter(function(object) {
	return object.currency_code === 'GBP';
});
var nameOfGbp = hasGbp title;
var priceOfGbp = hasGbp.price;
answerThree.textContent = nameOfGbp + 'costs' + priceOfGbp;


// Question 4
// Display a list of all items who are made of wood.
// filter by




// Question 5
// Which items are made of eight or more materials? Display the name,
// number of items and the items it is made of.





// Question 6
// How many items were made by their sellers?

// filter(function() {

// })


