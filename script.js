document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const filter = this.getAttribute('data-filter');
        const videos = document.querySelectorAll('.video-card');
        
        videos.forEach(video => {
            if (filter === 'all' || video.getAttribute('data-category') === filter) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
        
        // Remove active class from all buttons
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to the clicked button
        this.classList.add('active');
        
        // Scroll smoothly to video section
        document.querySelector('.video-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});