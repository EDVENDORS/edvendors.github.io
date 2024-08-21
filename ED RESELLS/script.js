document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links with added visual feedback
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
           
            // Add a flash effect to the target section
            targetElement.style.transition = 'background-color 0.3s ease';
            targetElement.style.backgroundColor = '#3498db33';
            setTimeout(() => {
                targetElement.style.backgroundColor = '';
            }, 500);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Enhanced product animations
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        product.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // Parallax effect for header background
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    /*
    // Animated counter for product views
    const counters = document.querySelectorAll('.product-views');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        function updateCount() {
            if(count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    }); */

    // Typewriter effect for main heading
    const heading = document.querySelector('h1');
    const text = heading.textContent;
    heading.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Animate elements when they come into view
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
