// Fonction de validation et redirection
function validateForm() {
    // Récupérer les valeurs des champs du formulaire
    const fullName = document.getElementById('fullName').value;
    const accountType = document.getElementById('accountType').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifier que tous les champs sont remplis
    if (!fullName || !accountType || !phoneNumber || !email || !password) {
        alert("Veuillez remplir tous les champs.");
        return false; // Empêche la soumission du formulaire
    }

    // Vérifier que le numéro de téléphone est valide
    const phonePattern = /^[0-9]{10}$/; // Exemple pour un numéro de téléphone à 10 chiffres
    if (!phonePattern.test(phoneNumber)) {
        alert("Veuillez entrer un numéro de téléphone valide.");
        return false; // Empêche la soumission du formulaire
    }

    // Vérifier que l'adresse email est valide
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false; // Empêche la soumission du formulaire
    }

    // Vérification du mot de passe (exemple de condition)
    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return false; // Empêche la soumission du formulaire
    }

    // Rediriger vers la page appropriée selon le type de compte
    if (accountType === "administrateur") {
        window.location.href = "menu.hmtl"; // Remplacez par la page de l'administrateur
        return false;
    } else if (accountType === "organisateur") {
        window.location.href = "index.html"; // Remplacez par la page de l'organisateur
        return false;
    } else if (accountType === "participant") {
        window.location.href = "acces.html"; // Remplacez par la page du participant
        return false;
    }

    // Si toutes les validations passent, autoriser la soumission du formulaire
    return true;
}
