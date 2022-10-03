// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Console testing
  console.log('Generate Password button clicked.')

  const randomFunc = {
    lower: lowerList,
    upper: UpperList,
    number: numbList,
    special: SpecialList
  };
  
  // 1. Prompt the user for the password criteria
  const passwordLength = (prompt('How long will your password be? Choose between 8-128 characters long.'))
 
  //    a. Password length 8 < 128

// All the valid characters
  // Lowercase Alphabet from a-z
function lowerList() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Uppercase Alphabet from A-Z
function UpperList() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Numbers from 1 - 10
function numbList() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// Special characters (14)
function SpecialList() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33)
}

//Console testing
console.log(lowerList(), UpperList(), numbList(), SpecialList());

  // 2. Validate the input

  // 3. Generate password based on criteria
  let passLower = confirm('Should your password contain any lowercase letters? a-z')
  let passUpper = confirm('Should your password contain any Uppercase letters? A-Z')
  let passNumber = confirm('Should your password contain any numbers? 0-9')
  let passSpecial = confirm('Should your password contain any special characters?')
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
