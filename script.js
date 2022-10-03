// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('Generate Password button clicked.')

  // 1. Prompt the user for the password criteria

  //    a. Password length 8 < 128
  const passwordLength = (prompt('How long will your password be? Choose between 8-128 characters long.'))

  // Lowercase Alphabet
function lowercaseList() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Uppercase Alphabet
function lowercaseList() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

console.log(lowercaseList());

  // 2. Validate the input~

  // 3. Generate password based on criteria

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
