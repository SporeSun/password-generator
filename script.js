// Assignment Code
var generateBtn = document.querySelector("#generate");
//defining variables for characters allowed options
var generatePassword = function() {
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numArray = ['1','2','3','4','5','6','7,','8','9','0'];
  var specArray = ['!','@','#','$','%','^','&','*','(',')'];
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password

  var passLength = prompt("How long will your password be?")

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (passLength >= 8 && passLength <= 128){
    
    // WHEN asked for character types to include in the password
    var lowerBool = confirm("Include lowercase characters?");
    var upperBool = confirm("Include uppercase characters?");
    var numBool = confirm("Include numerical characters?");
    var specBool = confirm("Include special characters?");
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    var finalArray = []
    
    if(lowerBool && !upperBool && !numBool && !specBool){
      
      finalArray = lowercaseArray;
      return finalArray;

    } else if(upperBool && !lowerBool && !numBool && !specBool){
      
      finalArray = uppercaseArray;
      return finalArray;

    } else if(numBool && !upperBool && !lowerBool && !specBool){
      
      finalArray = numArray;
      return finalArray;

    } else if(specBool && !upperBool && !lowerBool && !numBool){
      
      finalArray = specArray;
      return finalArray;

    } else if (lowerBool && upperBool && !numBool && !specBool){
      
      finalArray = lowercaseArray.concat(uppercaseArray);
      return finalArray

    } else if(lowerBool && numBool && !upperBool && !specBool){
      
      finalArray = lowercaseArray.concat(numArray);
      return finalArray;

    } else if(lowerBool && specBool && !upperBool && numBool){
      
      finalArray = lowercaseArray.concat(specArray);
      return finalArray;

    } else if(upperBool && !lowerBool && numBool && !specBool){
      
      finalArray = uppercaseArray.concat(numArray);
      return finalArray

    } else if(upperBool && !lowerBool && !numBool && specBool){
      
      finalArray = uppercaseArray.concat(specArray);
      return finalArray;

    } else if(!lowerBool && !upperBool && numBool && specBool){
      
      finalArray = numArray.concat(specArray);
      return finalArray;

    } else if(lowerBool && upperBool && numBool && !specBool){
      
      finalArray = lowercaseArray.concat(uppercaseArray, numArray);
      return finalArray;

    } else if(lowerBool && upperBool && !numBool && specBool){
      
      finalArray = lowercaseArray.concat(uppercaseArray, specArray);
      return finalArray;

    } else if(!lowerBool && upperBool && numBool && specBool){
      
      finalArray = uppercaseArray.concat(numArray, specArray);
      return finalArray;

    } else if(lowerBool && upperBool && numBool && specBool){

      finalArray = lowercaseArray.concat(uppercaseArray, numArray, specArray);
      return finalArray;

    } else(!lowerBool && !upperBool && !numBool && !specBool){
      alert("Please select one option for character types");
      return null;
    }
    for (var i = 0; i <= passLengthl; i++) {

    }

  } else {
     alert("Password must be at least 8 characters and less than 128 characters");
     return null;
  }

}
//event listener function
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
