window.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    const scrollPos = window.scrollY;

    // Détection du scroll pour déclencher l'effet de fade
    if (scrollPos > 50) {
        scrollText.style.opacity = '1';
    } else {
        scrollText.style.opacity = '0';
    }
});

