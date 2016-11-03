/*
Author: Morgan Boyes
Description: 
A JS program that creates an array, that has a deck of 52 cards
One can then randomly draw any number of cards to create a hand, based on user input
*/


var cardSuits = ["Spades", "Clubs", "Hearts", "Diamonds"];

var createDeck = function(){
	var curDeck = [];
  for(var i = 1; i < 14; i++){
    for(var j = 0; j < 4; j++){
      curDeck.push(i + " of " + cardSuits[j]);
    }
  }
	return curDeck;
}
var dealCards = function(thisDeck, numberOfCards){
	var curHand = [];
  var curCardIndex = 0;
  var counter = 0;
  while(counter < numberOfCards){
  	var randCardIndex = Math.floor(Math.random() * 51);
  	curHand.push(thisDeck[randCardIndex]);
    curCarIndex = randCardIndex;
    thisDeck.splice(randCardIndex,1);
    counter += 1;
    }
  return curHand;
}

var myDeck = [];
var myHand = [];

myDeck = createDeck();
myHand = dealCards(myDeck, 10);
console.log(myHand);
console.log(myDeck);
