// Function to prompt the user for the password length
function getPasswordLength() {
    let pwLength = parseInt(window.prompt('Choose the length of your desired password. It must be between 8 and 128 characters'));
    
    while (pwLength<8 || pwLength>128 || pwLength % 1 !== 0 || isNaN(pwLength)) {
        pwLength = parseInt(window.prompt('FOLLOW THE DAMN INSTRUCTIONS and choose a password length between 8 and 128 characters'));
    }
    console.log(pwLength + " has been recorded as a valid length.");
    return pwLength;
}

// Function to prompt the user for password criteria
function getPasswordCriteria() {
    let pwLowercase = window.confirm('Would you like your password to include lowercase letters?');

    console.log("Include lowercase letters: " + pwLowercase);
    return pwLowercase
}
  
// lowercase, uppercase, numeric, and/or special characters

getPasswordLength()
getPasswordCriteria()

// Function to validate the user's input
function validateInput(criteria, length) {
    // TODO: Add code to validate the user's input
    // TODO: Return true if the input is valid, otherwise false
}

// // Function to generate the password
// function generatePassword() {
//     // TODO: Add code to generate the password based on the selected criteria
//     // TODO: Return the generated password
// }

// // Event listener for the generate button
// // document.getElementById("generate-button").addEventListener("click", function() {
//     var criteria = getPasswordCriteria();
//     var length = getPasswordLength();
  
// if (validateInput(criteria, length)) {
//     var password = generatePassword(criteria, length);
//     // TODO: Display the password in an alert or write it to the page
// } else {
//     // TODO: Display an error message or handle invalid input
// }
// });