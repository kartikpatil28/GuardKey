function strengthCheck(password) {
    let Strength = 0;
    if (password.length > 0) Strength++; // Changed from >= 0 to > 0
    if (/[A-Z]/.test(password)) Strength++;
    if (/[a-z]/.test(password)) Strength++;
    if (/[0-9]/.test(password)) Strength++;
    if (/[\W_]/.test(password)) Strength++;

    switch (Strength) {
        case 0:
        case 1: return "Very Weak";
        case 2: return "Weak";
        case 3: return "Moderate";
        case 4: return "Strong";
        case 5: return "Very Strong";
        default: return "Invalid";
    }
}

// Event listener for the password input to clear localStorage when typing a new password
document.getElementById('Password').addEventListener('input', () => {
    localStorage.removeItem('passwordStrength'); // Clear localStorage on new input
});

// Function to update the strength display and localStorage
function updateStrengthDisplay(password) {
    const strengthText = document.getElementById('strength');
    const strength = strengthCheck(password);
    strengthText.innerText = strength;
    localStorage.setItem('passwordStrength', strength); // Store in localStorage
}



// Event listener for the Submit button
document.getElementById('Submit').addEventListener('click', () => {
    const password = document.getElementById('Password').value; // Get the current password value
    updateStrengthDisplay(password); // Update strength display and localStorage
});

// Optional: Load the stored strength rating on page load
window.onload = () => {
    const storedStrength = localStorage.getItem('passwordStrength');
    if (storedStrength) {
        document.getElementById('strength').innerText = storedStrength; // Display the stored strength
    }
};