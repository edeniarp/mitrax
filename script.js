window.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    const aboutMeSection = document.getElementById('about-me');
    const rect = aboutMeSection.getBoundingClientRect();
    
    // Si la section À propos de moi est visible dans la fenêtre
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        scrollText.style.opacity = '1';
        scrollText.style.transform = 'translateY(0)';
    } else {
        scrollText.style.opacity = '0';
        scrollText.style.transform = 'translateY(30px)';
    }
});
