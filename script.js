// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('Generate Password button clicked.')

  // 1. Prompt the user for the password criteria

  //    a. Password length 8 < 128
  const passwordLength = (prompt('How long will your password be? Between 8-128 characters long'))

  //    b. Lowercase, uppercase, numbers, special characters
  const uppercaseListed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseListed = 'abcdefghijklmnopqrstuvwxyz'
  const numberListed = '0123456789'
  const specialListed = '[]/^_`:;<?@=>!#$%&,()+*-./'

  var listed = uppercaseListed; lowercaseListed; numberListed; specialListed
  // 2. Validate the input

  // 3. Generate password based on criteria
  function listed(numberListed,specialListed,lowercaseListed,uppercaseListed) {
    let charactersList = uppercaseListed
  }
  // 4. Display password to the page

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
