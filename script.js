document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetElement = document.querySelector(this.getAttribute('href'));
            const offset = document.querySelector('.navbar').offsetHeight;
    
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
    

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    });

    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '<i data-lucide="menu"></i>';
    mobileMenuButton.classList.add('mobile-menu-button');
    navbar.querySelector('.container').appendChild(mobileMenuButton);

    mobileMenuButton.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').textContent = `© ${currentYear} Freo. All rights reserved.`;

    const featureCards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(card);
    });

    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    showTestimonial(currentTestimonial);

    setInterval(nextTestimonial, 5000);
});