// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//Prompt user for password requirements
var promptLength = window.prompt('Choose a password length between 8 and 128 characters');
var charResponses = []; //this will store the user's responses

let upperResponse = confirm("Would you like to use uppercase letters?");
let lowerResponse = confirm("Would you like to use lowercase letters?");
let numResponse = confirm("Would you like to use numbers?");
let specialResponse = confirm("Would you like to use special characters?");

charResponses = [upperResponse, lowerResponse, numResponse, specialResponse]

console.log(promptLength);
console.log(charResponses)



//Create the pool of characters from which the password will be generated

//Generate the random password

  //Selection: Write a function to select a random character from the character pool (use Math.random()?)
  //Repeat Selection: Repeat this process until the length of the password required is reached. (use a loop for this?)
  //Concatenation: Select each random character & add it to the password string
  //Display the password (use the DOM to display the password?)







//   // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

