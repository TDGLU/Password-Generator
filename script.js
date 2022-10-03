// HTML ID Selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Writes password to the password ID
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// When clicked, this button should display a prompt for length input
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  // Console testing
  console.log('Generate Password button clicked.')

  // These are the different characters that could be used in the generator
  // The alphabet in uppercase
  const upperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // the alphabet in lowercase
  const lowerList = 'abcdefghijklmnopqrstuvwxyz'
  // Every number
  const numbList = '0123456789'
  // The special characters
  const specialList = '!@#$%^&*()-=_+'
  let characters = ''
  let newPassword = ''

  //Console testing
  console.log('List of all characters used', lowerList, upperList, numbList, specialList);
  
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

   // Prompts for the user to choose from
   let passLower = confirm('Should your password contain any lowercase letters? a-z')
   let passUpper = confirm('Should your password contain any Uppercase letters? A-Z')
   let passNumber = confirm('Should your password contain any numbers? 0-9')
   let passSpecial = confirm('Should your password contain any special characters?')

   // If the prompts are accepted, they are to be added to the generator
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

    // If all the prompts are denied, the results will be invalid
    if (!passLower && !passUpper && !passNumber && !passSpecial) {
      alert('You must choose atleast one.')
      console.log('Invalid input')
      return 'Invalid input';
    }
    // For loop that generates the password determined by character length
    for (i = 0; i < passwordLength; i++) {
     let randomNumber = Math.floor(Math.random() * characters.length)
     newPassword += characters.charAt(randomNumber)
    }
    // Displays generated password
    return newPassword
}
