// Select all the images in the gallery section
const images = document.querySelectorAll('.gallery img');

// Select the lightbox container
const lightbox = document.getElementById('lightbox');

// Select the image element inside lightbox where we’ll display the clicked photo
const lightboxImg = document.getElementById('lightbox-img');

// Select the “×” close button
const closeBtn = document.querySelector('.close');

// Loop through each image and add a click event
images.forEach(img => {
  img.addEventListener('click', () => {
    // When an image is clicked:
    lightbox.style.display = 'flex'; 
    // Show the lightbox (we set display: none initially in CSS)
    lightboxImg.src = img.src; 
    // Set the lightbox image source same as clicked image
  });
});

// When the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none'; 
  // Hide the lightbox
});

// If user clicks outside the main image (on dark background)
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    // If the click is on the background area (not the image)
    lightbox.style.display = 'none'; 
    // Close the lightbox
  }
});
