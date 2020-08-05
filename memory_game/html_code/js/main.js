
console.log("Up and running!");

const cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png",
},

{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png",
},


{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png",
},


{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png",
}
]

let cardsInPlay = [];

function checkForMatch () 
	{
	if (cardsInPlay.length === 2){

	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
  		alert("You found a match!");
	} 	
	else {
  		console.log("Sorry, try again.");
  		alert("Sorry, try again.");
	}}
};


function flipCard () {
	let cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};


function createBoard () {
	for (let i = 0; i < 4; i++) {
    // Logic here
    let cardElement = document.createElement('img');

    cardElement.setAttribute('src', 'images/back.png');

    cardElement.setAttribute('data-id', i);
 
	cardElement.addEventListener('click', flipCard);

	document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();

