// HTML ID Selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// When clicked, this button should display generated password
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  // Console testing
  console.log('Generate Password button clicked.')

  // All the valid characters
  // Lowercase Alphabet from a-z

  // Character Length
  const upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerList = upperList.toLowerCase();
  const numbList = '0123456789';
  const specialList = '!@#$%^&*()-=_+';
  let characters = ''
  let newPassword = ''

  //Console testing
  console.log('Randomly generated characters:', lowerList, upperList, numbList, specialList);
  
  // Prompt for the user to input the number of characters the password should have
  const passwordLength = parseInt(prompt('How long will your password be? Choose between 8-128 characters long.'))
  
 // Valid number message
  if (passwordLength >= 8 && passwordLength <= 128) {
    //Console testing
    console.log('Valid input')
  } 
    // Invalid answer response
    else {
      alert('Password must be 8 - 128 characters long.')
      //Console testing
      console.log('Invalid input')
      return 'Invalid input';
    }

   // Prompt the user for the password criteria
   let passLower = confirm('Should your password contain any lowercase letters? a-z')
   let passUpper = confirm('Should your password contain any Uppercase letters? A-Z')
   let passNumber = confirm('Should your password contain any numbers? 0-9')
   let passSpecial = confirm('Should your password contain any special characters?')

    if (passLower) {
      characters += lowerList
    }

    if (passUpper) {
     characters += upperList
    }

    if (passNumber) {
      characters += numbList
    }
    
    if (passSpecial) {
      characters += specialList
    }

    if (!passLower && !passUpper && !passNumber && !passSpecial) {
      alert('You must choose atleast one.')
      console.log('Invalid input')
      return 'Invalid input';
    }
    // For loop that creates the password determined by character length
    for (i = 0; i < passwordLength; i++) {
     let randomNumber = Math.floor(Math.random() * characters.length)
     newPassword += characters.charAt(randomNumber)
    }
    return newPassword
}
