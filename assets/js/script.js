// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
	const length = Number(window.prompt("What length would you like your password (8 - 128)?"));
	var lower = window.confirm("Include lower case letters?");
	var upper = window.confirm("Include capital letters?");
	var num = window.confirm("Include numerals?")
	var special = window.confirm("Include special characters?");

	return pw;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
