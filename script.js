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

// Get all image containers
const imageContainers = document.querySelectorAll('.image-container');

// Variable to track the currently clicked image
let clickedImage = null;

// Function to reset all images to normal size and remove blur
function resetImages() {
  imageContainers.forEach(container => {
    const image = container.querySelector('img');
    image.style.transform = 'scale(1)';
    image.classList.remove('blurred');
  });
}

// Loop through each image container
imageContainers.forEach(container => {
  // Get the image inside the current container
  const image = container.querySelector('img');

  // Add click event listener to each image container
  container.addEventListener('click', function() {
    if (clickedImage === image) {
      resetImages();
      clickedImage = null; // Reset clicked image
    } else {
      resetImages(); // Reset all images
      // Add blur to all other images
      imageContainers.forEach(otherContainer => {
        const otherImage = otherContainer.querySelector('img');
        if (otherImage !== image) {
          otherImage.classList.add('blurred');
        }
      });
      // Increase the size of the clicked image
      image.style.transform = 'scale(1.2)';
      clickedImage = image; // Update clicked image
    }
  });
});