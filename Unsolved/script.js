// Assignment Code OG
var generateBtn = document.querySelector("#generate");

//  created arrays for different kinds of password characters, caseArray is for generated password after the function call
var caseArray=[];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Write password to the #password input OG
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function for generating the password

function writePassword() {
    
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  // using boolean variables to ask for user input
      let useLowerCase=confirm("Do you want to include lower case characters?");
      let useUpperCase=confirm("Do you want to include uppercase characters?");
      let useNumbers=confirm("Do you want to include numbers?");
      let useSpecial=confirm("Do you want to include special characters?");
  
  // runs a loop if no character type is selected from the window, user is prompted to select again
      if (useLowerCase == false && useUpperCase == false && useNumbers == false && useSpecial == false) {
      alert("Please select at least one type of character")
       useLowerCase=confirm("Do you want to include lower case characters?");
       useUpperCase=confirm("Do you want to include uppercase characters?");
       useNumbers=confirm("Do you want to include numbers?");
       useSpecial=confirm("Do you want to include special characters?");
      }
  
  
  // while loop to check that password length is between 8 - 128 characters and that characters are a Number, if not then will ask for user input again
  
  let passwordLength=parseInt(prompt("How many characters do you want your password to have? Must be between 8 and 128 characters"));
  while(passwordLength < 8 || passwordLength >128 || typeof(passwordLength) !="number" || passwordLength === NaN || passwordLength === null) {
      alert("Please select a password length between 8 - 128 characters");
      passwordLength=parseInt(prompt("How many characters do you want your password to have? Must be between 8 and 128 characters"));
  }
  // once character type is selected, array name gets stored in a group array
  if (useLowerCase===true) {
      caseArray.push(lowerCase)
  }
  if (useUpperCase===true) {
      caseArray.push(upperCase)
  }
  if (useNumbers===true) {
      caseArray.push(number)
  }
  if (useSpecial===true) {
      caseArray.push(special)
  }
  
  // loop run for password length
  
  for(let i=0;i<passwordLength;i++) {
      let randomCharArrayNum;
      let selectedCharArray;
      let randomCharNumber;
      let randomChar;
  
      // random number generated for group array, based on password length
      randomCharArrayNum = parseInt(Math.floor(Math.random()*caseArray.length));
      // random number generated for the character array, based on password length
      randomCharNum = Math.floor(Math.random()*number.length);
      // variable that stores random number based on length of selected array
      selectedCharArray=caseArray[randomCharArrayNum];
      randomChar=selectedCharArray[randomCharNum];
      // accumulating the string of characters
      passwordText+=randomChar;

      password.textContent=passwordText;
  }
  }

  
  // When the password is created, it is displayed in the textbox (multiple attempts and will continue until resolved)


// Add event listener to generate button OG
generateBtn.addEventListener("click", writePassword);
caseArray.textContent=password;