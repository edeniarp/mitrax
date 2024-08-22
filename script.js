// Attendre que le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Cacher les nouveaux textes au chargement
    const glitchText = document.getElementById('glitch-text');
    const secondarySubtext = document.getElementById('secondary-subtext');
    
    glitchText.style.display = 'none';
    secondarySubtext.style.display = 'none';
});

// Ajouter un événement de défilement à la fenêtre
window.addEventListener('scroll', function() {
    const initialText = document.getElementById('initial-text');
    const initialSubtext = document.getElementById('initial-subtext');
    const glitchText = document.getElementById('glitch-text');
    const secondarySubtext = document.getElementById('secondary-subtext');
    
    // Vérifier si la page a été défilée
    if (window.scrollY > 50) { // Lorsque l'utilisateur défile de plus de 50px
        // Faire disparaître le texte initial
        initialText.style.opacity = '0';
        initialSubtext.style.opacity = '0';
        initialText.style.transition = 'opacity 1s ease-in-out';
        initialSubtext.style.transition = 'opacity 1s ease-in-out';
        
        // Après que le texte initial a disparu, afficher le nouveau texte
        setTimeout(() => {
            initialText.style.display = 'none';
            initialSubtext.style.display = 'none';
            
            // Afficher le texte avec l'effet glitch
            glitchText.style.display = 'block';
            secondarySubtext.style.display = 'block';
            glitchText.style.opacity = '1';
            secondarySubtext.style.opacity = '1';
            glitchText.style.transition = 'opacity 1s ease-in-out';
            secondarySubtext.style.transition = 'opacity 1s ease-in-out';
        }, 1000); // Attendre que l'animation de disparition soit terminée
    }
});

// Gestion de l'effet glitch sur le texte "Mitrax"
const glitchText = document.getElementById('glitch-text');

function applyGlitchEffect() {
    // Ajouter une classe qui applique l'effet glitch
    glitchText.classList.add('glitching');
    
    // Après une courte période, enlever l'effet glitch
    setTimeout(() => {
        glitchText.classList.remove('glitching');
    }, 150); // La classe est retirée après 150ms
}

// Appliquer l'effet glitch toutes les 1,5 secondes
setInterval(applyGlitchEffect, 1500);
