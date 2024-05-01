// TypeScript function converted to JavaScript
function generatePassword(length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+';
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}
// Event listener for the generate button
var generateButton = document.getElementById('generate-button');
if (generateButton) {
    generateButton.addEventListener('click', function () {
        var lengthInput = document.getElementById('password-length');
        var length = parseInt(lengthInput.value);
        var generatedPassword = generatePassword(length);
        var passwordDisplay = document.getElementById('password-display');
        if (passwordDisplay) {
            passwordDisplay.innerText = generatedPassword;
        }
    });
}
