window.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    const aboutMeSection = document.getElementById('about-me');
    const rect = aboutMeSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        scrollText.style.opacity = '1';
        scrollText.style.transform = 'translateY(0)';
    } else {
        scrollText.style.opacity = '0';
        scrollText.style.transform = 'translateY(30px)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach((skillLevel) => {
        skillLevel.style.width = skillLevel.style.width;
    });
});
