// Function to prompt the user for the password length. Q: Why is parseInt between 2 and 36?
function getPasswordLength() {
    let pwLength = parseInt(window.prompt('Choose the length of your desired password. It must be between 8 and 128 characters'));
  
    while (pwLength < 8 || pwLength > 128 || pwLength % 1 !== 0 || isNaN(pwLength)) {
        pwLength = parseInt(window.prompt('FOLLOW THE DAMN INSTRUCTIONS and choose a password length between 8 and 128 characters'));
    }
  
    console.log(pwLength + ' has been recorded as a valid length.');
    return pwLength;
}
  
// Function to prompt the user for password criteria (lowercase, uppercase, numeric, and/or special characters)
function getPasswordCriteria() {
    let pwLowercase = window.confirm('Would you like your password to include lowercase letters?');
        console.log('Include lowercase letters: ' + pwLowercase);
    let pwUppercase = window.confirm('Would you like your password to include uppercase letters?');
        console.log('Include uppercase letters: ' + pwUppercase);
    let pwNumeric = window.confirm('Would you like your password to include numbers?');
        console.log('Include numbers: ' + pwNumeric);
    let pwSpecial = window.confirm('Would you like your password to include special characters? (Valid special characters include: !@#$%^&*()');
        console.log('Include special characters: ' + pwSpecial);

    return {
      pwLowercase,
      pwUppercase,
      pwNumeric,
      pwSpecial,
    };
  }

// Function to generate the password. Qs: How does the system know. Qs: How does the system connect (criteria, length) to given criteria requirements?
function generatePassword(criteria, length) {
    let characters = '';
  
    if (criteria.pwLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
  
    if (criteria.pwUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (criteria.pwNumeric) {
      characters += '0123456789';
    }
  
    if (criteria.pwSpecial) {
      characters += '!@#$%^&*()';
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    console.log(password);
    return password;
}
  
// Add event listener to the "Generate Password" button. Qs: How does the Eventlistner functionality work... what are different ways to use it?
document.getElementById('generate').addEventListener('click', function () {
    // Get the password length and criteria
    var length = getPasswordLength();
    var criteria = getPasswordCriteria();  

    // Generate and display the password. Qs: How do I get the generated password to appear in the password box?
    var password = generatePassword(criteria, length);
});