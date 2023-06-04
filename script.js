// Function to prompt the user for the password length. Use parseInt to change the window prompt response from a string to an integer. Q: Why is parseInt between 2 and 36?
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

    do {
        pwLowercase = window.confirm('Would you like your password to include lowercase letters?');
        pwUppercase = window.confirm('Would you like your password to include uppercase letters?');
        pwNumeric = window.confirm('Would you like your password to include numbers?');
        pwSpecial = window.confirm('Would you like your password to include special characters? (Valid special characters include: !@#$%^&*())');
  
        if (!(pwLowercase || pwUppercase || pwNumeric || pwSpecial)) {
            const iq = parseInt(window.prompt('Please enter your IQ'));

                if (iq < 90) {
                    window.alert('Clearly. You must select at least one password criteria. Please try again.');
                } else if (iq >= 90 && iq<120) {
                    window.alert('If you are of average intelligence, we are all in trouble. You must select at least one password criteria. Please try again.');
                } else {
                    window.alert('Okay, there Elon. Sure. You must select at least one password criteria. Please try again.');
                }
        }
    } while (!(pwLowercase || pwUppercase || pwNumeric || pwSpecial));
  
    console.log('Include lowercase letters: ' + pwLowercase);
    console.log('Include uppercase letters: ' + pwUppercase);
    console.log('Include numbers: ' + pwNumeric);
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

    // Generate and display the password.
    var password = generatePassword(criteria, length);
    document.getElementById('password').value = password;
});