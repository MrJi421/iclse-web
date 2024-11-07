document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.announcement-text p');
    
    lines.forEach((line, index) => {
        // Delay each line by 2-3 seconds
        setTimeout(() => {
            // Add the scrolling animation to each line after the delay
            line.style.animation = "scroll-text 30s linear infinite";
            line.style.opacity = 1;  // Make the text visible
        }, 3000 * index);  // Delay 2 seconds for each line (3000ms = 3s)
    });
});



// Intersection Observer for triggering animation when the section comes into view
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animated');

    const observerOptions = {
        root: null, // Viewport
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});