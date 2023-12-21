function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}

let randomNumber = generateRandomNumber();

function checkGuess() {
    event.preventDefault();
    let userGuess = document.getElementById("userGuess").value;
    let resultMessage = document.getElementById("resultMessage");
    let text = document.getElementById("inputGuess");

    if (isNaN(userGuess)) {
        resultMessage.innerHTML = "Do not input a character or word, input a number.";
    } else if (userGuess === " " || userGuess === "  " || userGuess === "   " || userGuess === "    ") {
        resultMessage.innerHTML = "Do not enter a space character.";
    } else if (userGuess < 1 || userGuess > 1000) {
        resultMessage.innerHTML = "Please enter a number between 1 and 1000.";
    } else {
        userGuess = parseInt(userGuess);

        if (userGuess === randomNumber) {
            resultMessage.innerHTML = `Congratulations! You guessed the correct number: ${randomNumber}`;
        } else if (userGuess < randomNumber) {
            resultMessage.innerHTML = `Too low. Try again!`;
            text.innerHTML = `You previously guessed: ${userGuess}`;
        } else {
            resultMessage.innerHTML = `Too high. Try again!`;
            text.innerHTML = `You previously guessed: ${userGuess}`;
        }
    }
}