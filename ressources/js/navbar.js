// Fonction pour vérifier la position de défilement et ajuster la barre de navigation
function ajusterNavbar() {
    // Obtenir la position actuelle de défilement
    const positionScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Récupérer l'élément navbar par sa classe ou son ID
    const navbar = document.querySelector('.navbar'); // Remplacer '.navbar' par la classe ou l'ID approprié

    // Vérifier si la position de défilement dépasse 500px
    if (positionScroll > 10) {
        navbar.className = 'navbar px-8 fixed z-[50] top-0 left-8 right-8 text-white bg-stone-800/[75%] backdrop-blur-xl border-l border-r border-b border-white/[15%] flex items-center justify-between shadow-xl shadow-stone-800/[25%] transition-all'; // Remplacer 'navbar navbar-fixed-top' par la classe ou l'ID approprié
    } else {
        // Remettre la navbar à sa position initiale
        navbar.className = 'navbar px-8 fixed z-[50] top-8 left-8 right-8 text-white bg-stone-800/[75%] backdrop-blur-xl border border-white/[15%] flex items-center justify-between shadow-xl shadow-stone-800/[25%] transition-all'; // Remplacer 'navbar navbar-fixed-top' par la classe ou l'ID approprié
    }
}

// Ajouter l'événement de défilement à la fenêtre
window.addEventListener('scroll', ajusterNavbar);