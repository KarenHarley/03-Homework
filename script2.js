// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersABC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
specialCharacters = ["@", "%"];
// Write password to the #password input
function writePassword() {
  var userChoiceLengthCharacters = prompt(
    "How many characters would you like your password to contain?"
  );

  if (userChoiceLengthCharacters > 8 && userChoiceLengthCharacters < 128) {
    var characterlength = userChoiceLengthCharacters;
  } else {
    userChoiceLengthCharacters = alert(
      "Character length must by greater that 8 and less than 128"
    );
    userChoiceLengthCharacters = prompt(
      "Try again : How many characters would you like your password to contain? "
    );
  }
  var userSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  if (userSpecialCharacters) {
    var specialCharacters = userSpecialCharacters;
  }

  var userNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  if (userNumericCharacters) {
    var numericCharacters = userNumericCharacters;
  }

  var userUpperCharacters = confirm(
    "Click OK to confirm including UPPERCASE characters."
  );
  if (userUpperCharacters) {
    var upperCharacters = userUpperCharacters;
  }

  function generatePassword() {

    



    var charactersABC = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var pass = "";
    for (var i = 0; i < characterlength; i++) {
      var generate =
        charactersABC[Math.floor(Math.random() * charactersABC.length)];
      pass += generate;
    }
    return pass;
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
