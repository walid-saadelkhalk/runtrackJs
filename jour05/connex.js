document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('connexionForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    function validateEmail() {
        const email = emailInput.value.trim();
        if (!email) {
            errorMessage.textContent = 'Veuillez entrer votre adresse e-mail.';
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage.textContent = 'Veuillez entrer une adresse e-mail valide.';
            return false;
        }

        if (!/(?:\.com|\.fr|\.io|\.org|\.net)$/.test(email)) {
            errorMessage.textContent = 'Veuillez utiliser une extension de domaine valide (.com, .fr, .io, .org, .net).';
            return false;
        }

        errorMessage.textContent = '';
        return true;
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        if (!password) {
            errorMessage.textContent = 'Veuillez entrer votre mot de passe.';
            return false;
        }
        
        if (password.length < 8) {
            errorMessage.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
            return false;
        }
        
        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+/*%*_@]).{8,}/.test(password)) {
            errorMessage.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial parmi +-/*%*_@.';
            return false;
        }
        
        errorMessage.textContent = '';
        return true;
    }

    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('change', validateEmail);

    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('change', validatePassword);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.textContent = ''; 

        if (!validateEmail() || !validatePassword()) {
            return;
        }

        form.submit();
    });
});
