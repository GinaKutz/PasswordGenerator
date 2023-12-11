// Assignment code here

function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-_+=<>?{}[]|';

  let allChars = '';
  let password = '';

  const length = prompt("Enter the length of the password (between 8 and 128)");

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid password length between 8 and 128.");
    return;
  }

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected.");
    return;
  }

  if (includeLowercase) {
    allChars += lowercaseChars;
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumeric) {
    allChars += numericChars;
  }
  if (includeSpecial) {
    allChars += specialChars;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Call the function to generate the password based on user input
const newPassword = generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Display the generated password
alert("Your generated password is: " + newPassword);