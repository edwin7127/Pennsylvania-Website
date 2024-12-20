const initTypingEffect = () => {
    new Typed('#typed-text', {
        strings: ["JavaScript Developer", "Web Enthusiast", "Open Source Contributor"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
};

const initProjectSlideshow = () => {
    const cards = document.querySelectorAll('.portfolio-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval;

    const showCard = (index) => {
        cards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
            card.classList.toggle('active', i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    };

    const nextCard = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    };

    const startSlideshow = () => {
        interval = setInterval(nextCard, 4000);
    };

    const stopSlideshow = () => {
        clearInterval(interval);
    };

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            stopSlideshow();
            currentIndex = i;
            showCard(currentIndex);
            startSlideshow();
        });
    });

    showCard(currentIndex);
    startSlideshow();
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === "#") {
            const navHeight = document.querySelector('nav').offsetHeight;
            
            window.scrollTo({
                top: 0 - navHeight,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initProjectSlideshow();
});
