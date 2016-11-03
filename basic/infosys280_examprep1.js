/*
Arrays, loops, functions, conditionals
Author: Morgan Boyes

*/


function dealCards(noCards){
	var counter = 0;
  var curCards = [];
  
  do{
  	var tempCard = Math.floor(Math.random()*4+1);
    var thisCard = "";
    switch(tempCard){
    	case 1:
      	thisCard = "Heart";
        break;
      case 2:
      	thisCard = "Diamond";
        break;
      case 3:
      	thisCard = "Spade";
        break;
      case 4:
      	thisCard = "Club";
        break;
      default:
      	alert("Error");
        break;
    }
    curCards.push(thisCard);
    counter += 1;
    
  } while (counter != noCards);
  return curCards;
}

console.log(dealCards(5));
