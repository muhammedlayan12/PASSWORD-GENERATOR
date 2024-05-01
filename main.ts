 // TypeScript function converted to JavaScript
 function generatePassword(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Event listener for the generate button
const generateButton = document.getElementById('generate-button');
if (generateButton) {
    generateButton.addEventListener('click', () => {
        const lengthInput = document.getElementById('password-length');
        const length = parseInt(lengthInput.value);
        const generatedPassword = generatePassword(length);
        const passwordDisplay = document.getElementById('password-display');
        if (passwordDisplay) {
            passwordDisplay.innerText = generatedPassword;
        }
    });
}