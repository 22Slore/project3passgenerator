// Assignment code here

//defined variables
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numericCase = '1234567890'
var specialCase = '~!@#$%^&*()_+=-'

//prompt pop ups
function generatePassword() {
  var allCase = ''.split("");
  var metaCase = [];
  var userLength = prompt("password must be at least 8 characters and less than 128.");
  

  if(userLength < 8 || userLength > 128) {
 alert ("Rewrite with over 8 and less than 128 characters");
 return;
  } 

  var userUppercase = confirm("Add uppercase characters?");
  if (userUppercase) {
    allCase += upperCase
  }
 

  var userLowercase = confirm("Add lowercase characters?");
  if (userLowercase) {
    allCase += lowerCase
  }


  var userNumeric = confirm("Add numeric characters?");
  if (userNumeric) {
    allCase += numericCase
  }


  var userSpecial = confirm("add Special characters?");
  if (userSpecial) {
    allCase += specialCase
  }


  // for (var i = 0; i < userLength; i++) {
  //   allCase = allCase + metaCase[Math.floor(Math.random() * metaCase.length)];
  //   console.log(allCase)
  // }
  // return allCase;

for (let i = 0; i < userLength; i++) {
  metaCase += allCase[Math.floor(Math.random() * (allCase.length))];
  // each time i is less than userLength, the code in this block runs
  // grab a random character from allCase and add it to whatever
  // variable you create to store the password
  // use allCase.charAt(the random value here) to add that to the password
  
}
console.log(metaCase);
return metaCase; // return that stored password variable




}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
