#! /usr/bin/env node
import inquirer from "inquirer";
//computer generates a number
//user input a number to guess
//compare user and computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "guess a number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations u guessed it right");
}
else {
    console.log("you guessed wrong");
}
