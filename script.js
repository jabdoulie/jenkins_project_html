// Fonction pour afficher l'heure actuelle
function showCurrentTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleTimeString('fr-FR', options);
    document.getElementById('current-time').textContent = `Heure actuelle : ${formattedTime}`;
}

// Mettre à jour l'heure toutes les secondes
setInterval(showCurrentTime, 1000);

// Fonction pour défiler jusqu'à la section des destinations
function scrollToDestinations() {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

// Initialisation de l'heure au chargement
showCurrentTime();