function strengthCheck(password) {
    let strength = 0;
    if (password.length > 0) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;
    switch (strength) {
        case 0:

        case 1: return "Very Weak";

        case 2: return "Weak";

        case 3: return "Moderate";

        case 4: return "Strong";

        case 5: return "Very Strong";

        default: return "Invalid";

    }


}



document.getElementById('password').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    document.getElementById('submit').addEventListener('click', () => {
        const strengthText = document.getElementById('strength');
        strengthText.innerText = strengthCheck(password);
        
    });
});