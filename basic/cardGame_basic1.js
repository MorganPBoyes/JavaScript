/*
Author: Morgan Boyes
Description: A JavaScript program that deals 5 cards for a card player.
*/
var suiteNames = ["Hearts", "Diamonds", "Spades", "Clubs"];
var myHand = "";
var counter = 0;

var drawSuite = function(){
	var suiteRandNum = Math.floor(Math.random()*4);
  return suiteNames[suiteRandNum];
}

var drawCard = function(){
	var cardRandNum = Math.floor((Math.random()*13)+1);
  return cardRandNum;
}

while(counter < 5){
  myHand += drawCard() + " of " + drawSuite() + " ";
  counter++;
}

console.log(myHand);
