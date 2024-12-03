document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Empêche la soumission par défaut
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cette partie devrait être remplacée par une logique d'authentification réelle
    if (username === 'admin' && password === 'password123') {
        window.location.href = 'dashboard.html'; // Redirige vers le tableau de bord
    } else {
        alert('Identifiant ou mot de passe incorrect!');
    }
};
// Script pour la gestion des utilisateurs
const users = [];

// Fonction pour ajouter un utilisateur
function addUser(username, email, role) {
    users.push({ username, email, role });
    alert(`Utilisateur ${username} ajouté avec succès !`);
}

// Fonction pour afficher les utilisateurs
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Réinitialiser la liste

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `${user.username} (${user.email}) - Rôle: ${user.role}`;
        userList.appendChild(userItem);
    });
}

// Fonction pour gérer les concours
const contests = [];

// Fonction pour ajouter un concours
function addContest(name, date) {
    contests.push({ name, date });
    alert(`Concours ${name} ajouté avec succès !`);
}

// Fonction pour afficher les concours
function displayContests() {
    const contestList = document.getElementById('contestList');
    contestList.innerHTML = ''; // Réinitialiser la liste

    contests.forEach(contest => {
        const contestItem = document.createElement('li');
        contestItem.textContent = `${contest.name} - Date: ${contest.date}`;
        contestList.appendChild(contestItem);
    });
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter des utilisateurs par défaut
    addUser('admin', 'admin@example.com', 'Administrateur');
    addUser('organizer1', 'organizer1@example.com', 'Organisateur');

    // Ajouter des concours par défaut
    addContest('Concours de Programmation', '2024-05-01');
    addContest('Concours de Dessin', '2024-06-15');

    // Afficher les utilisateurs et concours
    displayUsers();
    displayContests();
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupération des valeurs saisies
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemple de vérification des identifiants (remplacez par votre logique)
    if (username === 'admin' && password === 'password123') {
        // Redirection vers le tableau de bord si les identifiants sont corrects
        window.location.href = 'dashboard.html';
    } else {
        // Affichage d'un message d'erreur si les identifiants sont incorrects
        alert('Identifiant ou mot de passe incorrect.');
    }
});