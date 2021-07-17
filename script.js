// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var numbers = ["1", "2", "3", "4", "5", "7", "8", "9", "10"];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var specialCharacters = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "*",
    "&",
    "-",
    "+",
    "?",
    "/",
    "(",
    ")",
    "|",
    "[",
    "]",
  ];
  var normalCharacters = [
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
  var UserArry = []; //empty array
  var UserResponse = " ";
  var userChoiceLengthCharacters = prompt(
    "How many characters would you like your password to contain?"
  );
  if (userChoiceLengthCharacters) {
    if (userChoiceLengthCharacters > 8 && userChoiceLengthCharacters < 128) {
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

    var userNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );

    var userUpperCharacters = confirm(
      "Click OK to confirm including UPPERCASE characters."
    );
  } else {
    alert("Thanks for nothing");
  }

  if (userSpecialCharacters && !userNumericCharacters && !userUpperCharacters) {
    UserArry = UserArry.concat(specialCharacters, normalCharacters);
  } else if (
    userSpecialCharacters &&
    userNumericCharacters &&
    !userUpperCharacters
  ) {
    UserArry = UserArry.concat(numbers, specialCharacters, normalCharacters);
  } else if (
    userSpecialCharacters &&
    userNumericCharacters &&
    userUpperCharacters
  ) {
    UserArry = UserArry.concat(
      numbers,
      upperCase,
      specialCharacters,
      normalCharacters
    );
  } else if (
    userSpecialCharacters &&
    !userNumericCharacters &&
    userUpperCharacters
  ) {
    UserArry = UserArry.concat(upperCase, specialCharacters, normalCharacters);
  } else if (
    !userSpecialCharacters &&
    userNumericCharacters &&
    !userUpperCharacters
  ) {
    UserArry = UserArry.concat(numbers, normalCharacters);
  } else if (
    !userSpecialCharacters &&
    !userNumericCharacters &&
    userUpperCharacters
  ) {
    UserArry = UserArry.concat(upperCase, normalCharacters);
  } else if (
    !userSpecialCharacters &&
    !userNumericCharacters &&
    !userUpperCharacters
  ) {
    UserArry = UserArry.concat(normalCharacters);
  }

  for (var i = 0; i < userChoiceLengthCharacters; i++) {
    var generate = UserArry[Math.floor(Math.random() * UserArry.length)];
    UserResponse += generate;
  }
  return UserResponse;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
