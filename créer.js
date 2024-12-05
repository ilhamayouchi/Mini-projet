document.getElementById('form-creation').onsubmit = function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire (rechargement de la page)

    // Récupérer les valeurs des champs du formulaire
    let nom = document.getElementById('titre').value;
    let categorie = document.getElementById('categorie').value;
    let lieu = document.getElementById('lieu').value;
    let dateDebut = document.getElementById('date-debut').value;
    let dateFin = document.getElementById('date-fin').value;
    let nombre = document.getElementById('limite').value;
    let description = document.getElementById('description').value;
    let criteres = document.getElementById('criteres').value;

    // Vérification que tous les champs sont remplis
    if (!nom || !categorie || !lieu || !dateDebut || !dateFin || !nombre || !description || !criteres) {
        // Afficher un message d'erreur si un champ est vide
        document.getElementById('error-message').style.display = 'block';
    } else {
        // Cacher le message d'erreur si tout est valide
        document.getElementById('error-message').style.display = 'none';

        // Affichage des valeurs récupérées dans la console (ou traitement des données)
        console.log("Nom du Concours: ", nom);
        console.log("Catégorie: ", categorie);
        console.log("Lieu: ", lieu);
        console.log("Date de Début: ", dateDebut);
        console.log("Date de Fin: ", dateFin);
        console.log("Limite de Participants: ", nombre);
        console.log("Description: ", description);
        console.log("Critères d'Éligibilité: ", criteres);

        // Message de confirmation
        alert("Le concours a été créé avec succès !");
    }
}
    