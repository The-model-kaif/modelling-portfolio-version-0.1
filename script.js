document.addEventListener("DOMContentLoaded", function() {
    // Trigger the slide-down animation for each image-container
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(function(container, index) {
        container.style.animationDelay = (index * 0.1) + "s";
    });
});


window.onload = function() {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Toggle class for enlarged image
            this.closest('.image-container').classList.toggle('image-enlarged');
            // Toggle class for blurred background
            document.body.classList.toggle('blurred');
        });
    });
};

