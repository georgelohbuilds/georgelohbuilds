// Smooth scrolling functions
function scrollToMission() {
    document.getElementById('mission').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll event listener for parallax effect on hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Add fade-in animation for sections on scroll
function fadeInOnScroll() {
    const sections = document.querySelectorAll('.mission, .journey, .future-apps, .contact');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.pageYOffset;
        
        if (scrollY > sectionTop - windowHeight + 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize fade-in styles
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.mission, .journey, .future-apps, .contact');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
    });
    
    // Initial check
    fadeInOnScroll();
});

// Add scroll event listener for fade-in animation
window.addEventListener('scroll', fadeInOnScroll);

// Add click tracking for analytics (placeholder)
document.addEventListener('click', function(e) {
    if (e.target.matches('.contact-link')) {
        console.log('Contact link clicked:', e.target.href);
        // Add your analytics tracking here
    }
    
    if (e.target.matches('.btn')) {
        console.log('Button clicked:', e.target.textContent);
        // Add your analytics tracking here
    }
});