/* This is a guessing game that can be played in the console of Google Chrome when opening developer tools 
(ctrl + shift + i on PC) as well as on other browsers. The goal is to try to guess the number chosen randomly
by the program. The number can be 1 to 100 inclusive. */


//Global Variables

let guess;
const actualNumber = Math.ceil(Math.random() * 100);
let numberGuesses = 0;
let isValid;
let difference;
let response;

//Functions

function userPrompt() {
	if (numberGuesses) {
		response = prompt("Do you want to play again? (Y or N)");
		if (response.toLowerCase() === 'n') {return "Goodbye!"}
		else if (response.toLowerCase() === 'y') {
			guess = parseInt(prompt("pick a number between 1 and 100"));
			console.log(guess);
			return validateGuess(guess);
		}
		else { return userPrompt(); }
	}
	guess = parseInt(prompt("pick a number between 1 and 100"));
	console.log(guess)
	return validateGuess(guess);
}

function validateGuess(guess) {
	isValid = typeof guess === "number" && guess <= 100 && guess >= 1 ? true : false
	return processGuess(guess);
}

function processGuess(guess) {
	if (!isValid) {
		alert("Guess must be an integer between 1 and 100 inclusive.");
		return userPrompt();
	}
	numberGuesses++;
	difference = guess - actualNumber;
	if (difference === 0) {
		alert(`Correct! You took ${numberGuesses} guesses to get it!`);
		return "Goodbye!";
	}

	else if (difference >= 10) {
		alert("Way too high!");
		return userPrompt();
	}

	else if (difference <= -10) {
		alert("Way too low!");
		return userPrompt();
	}

	else if (difference > 0 && difference < 10) {
		alert("Too high!");
		return userPrompt();
	}

	else if (difference < 0 && difference > -10) {
		alert("Too low!");
		return userPrompt();
	}
}