document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksHidden = document.querySelector('.nav-links.hidden');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Ajoute ou enlève la classe active
        navLinksHidden.classList.toggle('active'); // Affiche ou cache la liste cachée
    });

    // Ajout d'un gestionnaire d'événements pour fermer le menu lors du clic sur un lien
    const links = document.querySelectorAll('.nav-links.hidden a'); // Sélectionne tous les liens dans la liste cachée
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active'); // Ferme le menu
            navLinksHidden.classList.remove('active'); // Ferme la liste cachée
        });
    });

    // Gestion du défilement pour rendre le header fixe
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('fixed'); // Ajoute la classe fixed lorsque l'utilisateur fait défiler
        } else {
            header.classList.remove('fixed'); // Retire la classe fixed lorsque l'utilisateur est en haut
        }
    });
});
