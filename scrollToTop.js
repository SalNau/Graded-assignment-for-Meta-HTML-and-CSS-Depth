 // Function to toggle the visibility of the scroll-to-top button
 function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrolled = window.scrollY > 0;
    if (scrolled) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

// Add event listener to window scroll event to toggle scroll-to-top button visibility
window.addEventListener('scroll', toggleScrollToTopButton);

//scroll to top arrow
document.addEventListener('DOMContentLoaded', function() {
        const scrollToTopBtn = document.getElementById('scroll-to-top');

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll
            });
        }

        // Add click event listener to the scroll-to-top icon
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }); 

    window.addEventListener('scroll', function() {
  const scrolled = window.scrollY > 0;
  document.body.classList.toggle('scrolled-down', scrolled);
});