/*
Author: Morgan Boyes
Description: Simple JS program for a game based on flipping a coin.
						 The players flips a coin 3 times. It is against 1 human and 1 computer.
             Most Heads wins
*/
var firstTurn = prompt("Would you like to go first? (Y/N)");
var userScore = 0;
var computerScore = 0;

var flipCoin = function(){
	var coinSide = ["Heads", "Tails"];
  var randNum = Math.floor(Math.random()*2);
  return coinSide[randNum];
}

if(firstTurn.toLowerCase() === 'y'){
	var counter1 = 0;
  while (counter1 < 4) {
  	userScore += (flipCoin() === "Heads" ? 1 : 0);
    counter1 += 1;
    }
	var counter2 = 0;
  while (counter2 < 4){
  	computerScore += (flipCoin() === "Heads" ? 1 : 0);
    counter2 += 1;
  	} 
	}else if(firstTurn.toLowerCase() === 'n'){
	var counter1 = 0;
  while (counter1 < 4) {
  	computerScore += (flipCoin() === "Heads" ? 1 : 0);
    counter1 += 1;
    }
	var counter2 = 0;
  while (counter2 < 4){
  	userScore += (flipCoin() === "Heads" ? 1 : 0);
    counter2 += 1;
	} 
  }else{
  	alert("Error." + "\n" + "Invalid Input.");
  }

if(userScore < computerScore){
	alert("Tough Luck. The Computer won with " + computerScore + " heads against your " + userScore);
} else if(userScore > computerScore){
	alert("Nice one!! You beat the Computer's score of " + computerScore + " heads with "+ userScore);
} else{
	alert("The game was a tie. Play again, if you dare!");
}
