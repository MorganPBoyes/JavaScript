/*
Author: Morgan Boyes
*/
//Game custom constructor
var Game = function(name){
	this.name;
  this.start = function(){
  	console.log("Game started");
  }
}

//Card class constructor
var Card = function(name, noPlayers){

	this.name = name;
  this.noPlayers = noPlayers;
}

//Snap class constructor
var Snap = function(name){

	this.name = name;
  this.noPlayers = 2;
}

Card.prototype = new Game();
Snap.prototype = new Card();

var mySnapGame = new Snap("Morgan's Snap Game");
mySnapGame.start();

for(var x in mySnapGame){
  console.log(x);
}