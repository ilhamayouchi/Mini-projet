// gestionConcours.js

// Données initiales (ajoutez les concours comme objets dans un tableau)
let contests = [
    {
        name: "Énergies Renouvelables et Développement Durable",
        category: "Sciences et Ingénierie",
        date: "01/12/2024 - 15/12/2024",
        status: "Ouvert"
    },
    {
        name: "Management des Ressources Humaines",
        category: "Management et Économie",
        date: "01/12/2024 - 15/12/2024",
        status: "Ouvert"
    },
    {
        name: "Ingénierie Logicielle et Systèmes Informatiques",
        category: "Informatique et Technologies",
        date: "01/12/2024 - 15/12/2024",
        status: "Ouvert"
    },
    // Ajoutez plus de concours si nécessaire
];

const tableBody = document.querySelector("#contestTable tbody");
const editFormContainer = document.getElementById("editFormContainer");
const editContestForm = document.getElementById("editContestForm");
let currentEditIndex = null;

// Fonction pour afficher les concours dans le tableau
function renderContests() {
    tableBody.innerHTML = ""; // Réinitialise le tableau
    contests.forEach((contest, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contest.name}</td>
            <td>${contest.category}</td>
            <td>${contest.date}</td>
            <td>${contest.status}</td>
            <td>
                <button onclick="editContest(${index})">Modifier</button>
                <button onclick="deleteContest(${index})">Supprimer</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonction pour modifier un concours
function editContest(index) {
    currentEditIndex = index;
    const contest = contests[index];

    // Préremplir le formulaire de modification
    document.getElementById("editName").value = contest.name;
    document.getElementById("editCategory").value = contest.category;
    document.getElementById("editDate").value = contest.date;
    document.getElementById("editStatus").value = contest.status;

    // Afficher le formulaire de modification
    editFormContainer.style.display = "block";
}

// Fonction pour enregistrer les modifications
editContestForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Mettre à jour le concours
    contests[currentEditIndex] = {
        name: document.getElementById("editName").value,
        category: document.getElementById("editCategory").value,
        date: document.getElementById("editDate").value,
        status: document.getElementById("editStatus").value
    };

    // Réinitialiser et masquer le formulaire
    editFormContainer.style.display = "none";
    currentEditIndex = null;

    // Rafraîchir l'affichage des concours
    renderContests();
});

// Fonction pour annuler la modification
document.getElementById("cancelEdit").addEventListener("click", () => {
    editFormContainer.style.display = "none";
    currentEditIndex = null;
});

// Fonction pour supprimer un concours
function deleteContest(index) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce concours ?")) {
        contests.splice(index, 1); // Supprimer le concours
        renderContests(); // Rafraîchir l'affichage
    }
}

// Initialiser l'affichage des concours
renderContests();
