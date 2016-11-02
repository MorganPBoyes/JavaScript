/* Weekly Assignment #1
Author: Morgan Boyes

Write a JS program to allow the user to enter a number between 1 & 50
If the number they enter is the same as the total length of your first and last name (including spaces), then display they have been awarded 5 bonus marks to their coursework

*/

// variables to request and store first, last names and length of full name

var firstName = prompt("Please enter your first name user.");
var lastName = prompt("Please enter your last name " + firstName);
var userNumber = prompt("Please enter a number between 1 & 50, " + firstName + " " + lastName);
var fullName = firstName + lastName;
var nameLength = (firstName.length) + (lastName.length);

if(!isNaN(fullName)){
	console.log("You have entered a number into your name." + "\n" + "This is invalid.");
}

if(parseInt(userNumber) <= parseInt(nameLength)){
	var result = fullName.split("");
  console.log("This is the letter at the index that matches your number: " + result[userNumber])
}

console.log("Thank you for submitting your details.");
console.log("End of demonstration");