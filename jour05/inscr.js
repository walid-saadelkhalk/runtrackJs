document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inscriptionForm');
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const adresseInput = document.getElementById('adresse');
    const codePostalInput = document.getElementById('code_postal');

    function displayErrorMessage(inputElement, errorMessage) {
        const errorElementId = inputElement.id + 'Error';
        const errorElement = document.getElementById(errorElementId);
        errorElement.textContent = errorMessage;
    }

    function validateNom() {
        const nom = nomInput.value.trim();
        if (!nom) {
            displayErrorMessage(nomInput, 'Veuillez entrer votre nom.');
            return false;
        }
        if (!/^[A-Za-z]+$/.test(nom)) {
            displayErrorMessage(nomInput, 'Le nom ne doit contenir que des lettres.');
            return false;
        }
        displayErrorMessage(nomInput, '');
        return true;
    }


    function validatePrenom() {
        const prenom = prenomInput.value.trim();
        if (!prenom) {
            displayErrorMessage(prenomInput, 'Veuillez entrer votre prénom.');
            return false;
        }
        if (!/^[A-Za-z]+$/.test(prenom)) {
            displayErrorMessage(prenomInput, 'Le prénom ne doit contenir que des lettres.');
            return false;
        }
        displayErrorMessage(prenomInput, '');
        return true;
    }


    function validateEmail() {
        const email = emailInput.value.trim();
        if (!email) {
            errorMessage.textContent = 'Veuillez entrer votre adresse e-mail.';
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            displayErrorMessage(emailInput, 'Veuillez entrer une adresse e-mail valide.');
            return false;
        }
        if (!/(?:\.com|\.fr|\.io|\.org|\.net)$/.test(email)) {
            displayErrorMessage(emailInput, 'Veuillez utiliser une extension de domaine valide (.com, .fr, .io, .org, .net).');
            return false;
        }
        displayErrorMessage(emailInput, '');
        return true;
    }


    function validatePassword() {
        const password = passwordInput.value.trim();
        if (!password) {
            displayErrorMessage(passwordInput, 'Veuillez entrer votre mot de passe.');
            return false;
        }    
        if (password.length < 8) {
            displayErrorMessage(passwordInput, 'Le mot de passe doit contenir au moins 8 caractères.');
            return false;
        }
        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+/*%*_@]).{8,}/.test(password)) {
            displayErrorMessage(passwordInput, 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial parmi +-/*%*_@.');
            return false;
        }
        displayErrorMessage(passwordInput, '');
        return true;
    }

    function validateAdresse() {
        const adresse = adresseInput.value.trim();
        if (!adresse) {
            displayErrorMessage(adresseInput, 'Veuillez entrer votre adresse.');
            return false;
        }
        if (!/^\d/.test(adresse)) {
            displayErrorMessage(adresseInput, 'L\'adresse doit commencer par un chiffre.');
            return false;
        }
        if (!/[a-zA-Z]/.test(adresse)) {
            displayErrorMessage(adresseInput, 'L\'adresse doit contenir au moins une lettre.');
            return false;
        }
        if (!/^[a-zA-Z0-9- ]+$/.test(adresse)) {
            displayErrorMessage(adresseInput, 'L\'adresse ne peut contenir que des lettres, des chiffres et le caractère spécial "-".');
            return false;
        }
        displayErrorMessage(adresseInput, '');
        return true;
    }    
    

    function validateCodePostal() {
        const codePostal = codePostalInput.value.trim();
        if (!codePostal) {
            displayErrorMessage(codePostalInput, 'Veuillez entrer votre code postal.');
            return false;
        }
        if (!/^\d{5}$/.test(codePostal)) {
            displayErrorMessage(codePostalInput, 'Le code postal doit contenir exactement 5 chiffres.');
            return false;
        }
        displayErrorMessage(codePostalInput, '');
        return true;
    }


    nomInput.addEventListener('input', validateNom);
    nomInput.addEventListener('change', validateNom);

    prenomInput.addEventListener('input', validatePrenom);
    prenomInput.addEventListener('change', validatePrenom);

    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('change', validateEmail);

    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('change', validatePassword);

    adresseInput.addEventListener('input', validateAdresse);
    adresseInput.addEventListener('change', validateAdresse);

    codePostalInput.addEventListener('input', validateCodePostal);
    codePostalInput.addEventListener('change', validateCodePostal);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const isNomValid = validateNom();
        const isPrenomValid = validatePrenom();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isAdresseValid = validateAdresse();
        const isCodePostalValid = validateCodePostal();

        if (!isNomValid || !isPrenomValid || !isEmailValid || !isPasswordValid || !isAdresseValid || !isCodePostalValid) {
            return;
        }

        form.submit();
    });
});
