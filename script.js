document.addEventListener('DOMContentLoaded', () => {
    // Gallery Thumbnails Interaction
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.querySelector('.main-img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove active class from all
            thumbs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked
            thumb.classList.add('active');
            
            // Swap main image src
            const imgSrc = thumb.querySelector('img').src;
            // The main image is larger in quality, let's just change the width param for higher res
            const highResSrc = imgSrc.replace('w=150', 'w=800');
            mainImg.src = highResSrc;
        });
    });

    // Simple Form Submission Prevent Default
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Booking request sent successfully!');
            bookingForm.reset();
        });
    }

    // Scroll Animation Observer (Optional for smooth entrance)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Add slight fade in up to major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        sec.style.opacity = 0;
        sec.style.transform = 'translateY(20px)';
        sec.style.transition = 'all 0.6s ease-out';
        observer.observe(sec);
    });
});
