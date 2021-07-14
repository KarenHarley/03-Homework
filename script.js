// Assignment Code
var generateBtn = document.querySelector("#generate");

specialCharacters = ["@", "%"];
// Write password to the #password input
function writePassword() {
  var userChoiceLengthCharacters = prompt(
    "How many characters would you like your password to contain?"
  );
  if (userChoiceLengthCharacters) {
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

    var userNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );

    var userUpperCharacters = confirm(
      "Click OK to confirm including UPPERCASE characters."
    );
  } else {
    alert("Thanks for nothing");
  }
  function generatePassword() {
    if (
      userSpecialCharacters &&
      !userNumericCharacters &&
      !userUpperCharacters
    ) {
      var characters = [
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
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      userSpecialCharacters &&
      userNumericCharacters &&
      !userUpperCharacters
    ) {
      var characters = [
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
      ];
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      userSpecialCharacters &&
      userNumericCharacters &&
      userUpperCharacters
    ) {
      var characters = [
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
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
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      !userSpecialCharacters &&
      userNumericCharacters &&
      userUpperCharacters
    ) {
      var characters = [
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
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
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      userSpecialCharacters &&
      !userNumericCharacters &&
      userUpperCharacters
    ) {
      var characters = [
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
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      userSpecialCharacters &&
      userNumericCharacters &&
      !userUpperCharacters
    ) {
      var characters = [
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
      ];
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      !userSpecialCharacters &&
      userNumericCharacters &&
      !userUpperCharacters
    ) {
      var characters = [
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
      ];
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      !userSpecialCharacters &&
      !userNumericCharacters &&
      userUpperCharacters
    ) {
      var characters = [
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
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      !userSpecialCharacters &&
      !userNumericCharacters &&
      !userUpperCharacters
    ) {
      var characters = [
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
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    } else if (
      userSpecialCharacters &&
      userNumericCharacters &&
      !userUpperCharacters
    ) {
      var characters = [
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
        "1",
        "2",
        "3",
        "4",
        "5",
        "7",
        "8",
        "9",
        "10",
      ];
      var pass = "";
      for (var i = 0; i < characterlength; i++) {
        var generate =
          characters[Math.floor(Math.random() * characters.length)];
        pass += generate;
      }
      return pass;
    }
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
