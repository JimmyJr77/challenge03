// Function to prompt the user for the password length
function getPasswordLength() {
    let pwLength = parseInt(window.prompt('Choose the length of your desired password. It must be between 8 and 128 characters'));
    
    while (pwLength<8 || pwLength>128 || pwLength % 1 !== 0 || isNaN(pwLength)) {
        pwLength = parseInt(window.prompt('FOLLOW THE DAMN INSTRUCTIONS and choose a password length between 8 and 128 characters'));
    }
    console.log(pwLength + " has been recorded as a valid length.");
    return pwLength;
}

// Function to prompt the user for password criteria lowercase, uppercase, numeric, and/or special characters)
function getPasswordCriteria() {
    let pwLowercase = window.confirm('Would you like your password to include lowercase letters?');
    let pwUppercase = window.confirm('Would you like your password to include uppercase letters?');
    let pwNumeric = window.confirm('Would you like your password to include numbers?');
    let pwSpecial = window.confirm('Would you like your password to include special characters? (Valid special characters include: !@#$%^&*())');

    console.log("Include lowercase letters: " + pwLowercase);
    console.log("Include uppercase letters: " + pwUppercase);
    console.log("Include numbers: " + pwNumeric);
    console.log("Include special characters: " + pwSpecial);
    
    return {
        pwLowercase,
        pwUppercase,
        pwNumeric,
        pwSpecial
    };
}

getPasswordLength()
getPasswordCriteria()

// Function to validate the user's input
function validateInput(criteria, length) {
    // TODO: Add code to validate the user's input
    // TODO: Return true if the input is valid, otherwise false
}

// Function to generate the password
function generatePassword(criteria, length) {
    let characters = '';

    if (criteria.pwLowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (criteria.pwUppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (criteria.pwNumeric) {
        characters += '0123456789'
    }

    if (criteria.pwSpecial) {
        characters = '!@#$%^&*()'
    }

    length == getPasswordLength()

    // TODO: Return the generated password
    let password = ''
    i=0
    for (let i=0; i<length; i++) {
        password += characters.charAt(math.floor(math.random * characters.length));
    }

    console.log(password);
    return password;
}

return;

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