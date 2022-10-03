// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// When clicked, this button should display generated password
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  // Console testing
  console.log('Generate Password button clicked.')

  // Constants
  const randomFunc = {
    lower: lowerList,
    upper: upperList,
    number: numbList,
    special: specialList
  };

  // All the valid characters
  // Lowercase Alphabet from a-z
  function lowerList() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  // Uppercase Alphabet from A-Z
  function upperList() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  // Numbers from 1 - 10
  function numbList() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  // Special characters (14)
  function specialList() {
    return String.fromCharCode(Math.floor(Math.random() * 14) + 33)
  }

  // Character Length
  let characters = ''
  let newPassword = ''

  //Console testing
  console.log('Randomly generated characters:', lowerList(), upperList(), numbList(), specialList(),'.');
  
  // Prompt for the user to input the number of characters the password should have
  const passwordLength = parseInt(prompt('How long will your password be? Choose between 8-128 characters long.'))
  
 // Invalid number message
  if (passwordLength >= 8 && passwordLength <= 128) {
    //Console testing
    console.log('Valid password')
  }
    else {
      alert('Password must be 8 - 128 characters long.')
      console.log('Invalid password')
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
      alert('At least pick one lol')
   }

   for (i = 0; i < passwordLength; i++) {
     let randomNumber = Math.floor(Math.random() * characters.length)
     newPassword += characters.charAt(randomNumber)
  }
}