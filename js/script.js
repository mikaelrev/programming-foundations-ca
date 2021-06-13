// Question 1

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock")
} else {
    console.log("In stock")
}



// Question 2

for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}



// Question 3

var gameContainer = document.querySelector(".games");

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

for (var i = 0; i < games.length; i++) {
    if (games[i].rating < 3.5) {
	gameContainer.innerHTML+= "<li>" + games[i].title + " - " + games[i].rating + "</li>";
	} 
}



// Question 4

function whatIDontLike(word) {
	if (typeof word !== "string") 
		console.log("Please send in a string");
	else
		console.log("I don't like " + word);
	
	
} 

whatIDontLike("fish");



// Question 5

subContainer = document.querySelector("#subtraction");

function subtraction(firstNumber, secondNumber) {
	var convertedNum1 = parseFloat(firstNumber);
	var convertedNum2 = parseFloat(secondNumber);
	
	
	if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
		return "Invalid argument(s)";
	}
	
	return firstNumber - secondNumber;
}


var result = subtraction("200", 100);

subContainer.innerHTML = result;



// Question 6

buttonPage = document.querySelector(".page");

var header = document.querySelector("title");
var heading = document.querySelector("h1");
var list = document.querySelector("ul");

function buttonClick() {
	header.innerHTML = "Updated title";
	document.body.style.backgroundColor = "yellow";
	heading.style.color = "green";
	heading.style.fontFamily = "impact";
	heading.innerHTML = "<a href=>Programming Foundations Course Assignment</a>";
	list.style.listStyleType = "none";
}

buttonPage.onclick = buttonClick;



// Question 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];


buttonPrice = document.querySelector(".price");
totalContainer = document.querySelector("#total");

// Couldn't figure out how to convert null to zero
function priceButtonClick() {
	totalContainer.innerHTML = toys[0].price + parseInt(toys[1].price) + toys[3].price;
}

for (var i = 0; i < toys.length; i++) {
	buttonPrice.onclick = priceButtonClick;
}