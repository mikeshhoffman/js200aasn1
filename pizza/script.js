// 1. Using the Math object, put together a code snippet that allows you to draw a random card with a value between 1 and 13 (assume ace is 1, jack is 11).
var card = Math.floor(Math.random() * (13)) + 1;
console.log("card: ", card);


// 2. Draw 3 cards and use Math to determine the highest card.
var card1 = Math.floor(Math.random() * 13) + 1;
console.log("card1: ", card1);

var card2 = Math.floor(Math.random() * 13) + 1;
console.log("card2: ", card2);

var card3 = Math.floor(Math.random() * 13) + 1;
console.log("card3 ", card3);

var cardMax = Math.max(card1, card2, card3);
console.log("cardMax: ", cardMax);


//3. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza. What is the surface area for each of these pizzas?
var diam1 = 13;
var surfaceArea1 = Math.PI * ((diam1 / 2.0) ** 2);
console.log("surfaceArea of 13-inch pizza: ", surfaceArea1);

var diam2 = 17;
var surfaceArea2 = Math.PI * ((diam2 / 2.0) ** 2);
console.log("surfaceArea of 17-inch pizza: ", surfaceArea2);


// 4. What is the cost per square inch of each pizza?
var price1 = 16.99;
var price2 = 19.99;

var costPerSquareInch1 = price1/surfaceArea1;
var costPerSquareInch2 = price2/surfaceArea2;

console.log("Cost per square inch of 13-inch pizza: ", costPerSquareInch1);
console.log("Cost per square inch of 17-inch pizza: ", costPerSquareInch2);
