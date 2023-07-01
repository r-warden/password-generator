// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
	var charset = "";
	const length = Number(window.prompt("What length would you like your password (8 - 128)?"));
	var lower = window.confirm("Include lower case letters?");
	var upper = window.confirm("Include capital letters?");
	var num = window.confirm("Include numerals?")
	var special = window.confirm("Include special characters?");
	if (length>7 && length < 129){
		if (lower) {
			charset+="abcdefghijklmnopqrstuvwxyz";
		}
		if (upper) {
			charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		}
		if (num) {
			charset+="0123456789";
		}
		if (special) {
			charset+="!@#$%^&*";
		}
		if (!charset) {
			return "Must include at least one character type, try again";
		}
		var pw="";
		var setLength = charset.length;
		for (var i=0; i<length; i++) {
			pw+=charset.charAt(Math.floor(Math.random() * setLength)); //this line of code found at https://www.slingacademy.com/article/ways-to-generate-random-strings-in-javascript/
		}
		return pw;
	}
	else {
		return "Invalid password length, try again";
	}
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
