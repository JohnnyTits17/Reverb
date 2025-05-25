// Stellar Reverb - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Scroll Animation
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initialize scroll animation check
    handleScrollAnimation();
    
    // Audio Player Functionality
    const playPauseBtn = document.querySelector('.play-pause');
    
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        });
    }
    
    // Void Portal Effect
    const voidLink = document.querySelector('.void-link');
    
    if (voidLink) {
        voidLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create void portal element if it doesn't exist
            let voidPortal = document.querySelector('.void-portal');
            
            if (!voidPortal) {
                voidPortal = document.createElement('div');
                voidPortal.className = 'void-portal';
                
                const portalContent = document.createElement('div');
                portalContent.className = 'portal-content';
                
                const portalText = document.createElement('div');
                portalText.className = 'portal-text';
                portalText.innerHTML = '<h2>Entering the Void</h2><p>Transmission in progress...</p>';
                
                portalContent.appendChild(portalText);
                voidPortal.appendChild(portalContent);
                document.body.appendChild(voidPortal);
            }
            
            // Activate portal
            voidPortal.classList.add('active');
            
            // Simulate loading and redirect
            setTimeout(() => {
                voidPortal.classList.remove('active');
                // In a real implementation, this would redirect to another page
                // window.location.href = 'void.html';
            }, 3000);
        });
    }
    
    // Glitch effect for elements with .glitch class
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        const text = element.textContent;
        element.setAttribute('data-text', text);
    });
});
