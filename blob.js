// Function to create a blob element
function createBlob(blobId, left, top, blur = false) {
    const blobContainer = document.querySelector('.blob-container');
    const blob = document.createElement('div');
    blob.classList.add('back-blob');
    
    // Set position and other styles
    blob.style.left = `${left}%`;
    blob.style.top = `${top}%`;
    blob.style.height = `${50 + blobId * 10}vw`; // Example to vary sizes
    blob.style.width = `${50 + blobId * 10}vw`;

    if (blur) {
        blob.style.filter = 'blur(2rem)';
    }

    // Add SVG structure
    blob.innerHTML = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fill${blobId}" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(11 0.5 0.5)">
                    <stop offset="0%" stop-color="#9a30ff"></stop>
                    <stop offset="100%" stop-color="#d371fe"></stop>
                </linearGradient>
            </defs>
            <path stroke="none" stroke-width="0" fill="url(#fill${blobId})">
                <animate 
                    attributeName="d" 
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="
                        M83.5,65.5Q75,81,58.5,84Q42,87,28.5,77Q15,67,10,47.5Q5,28,22,15Q39,2,59,8Q79,14,85.5,32Q92,50,83.5,65.5Z;
                        M86,68Q78,86,58.5,92Q39,98,23.5,84Q8,70,11,51.5Q14,33,27,20.5Q40,8,58,13Q76,18,85,34Q94,50,86,68Z;
                        M87,67.5Q78,85,59.5,86Q41,87,28,77Q15,67,12,48.5Q9,30,25,20.5Q41,11,59.5,13Q78,15,87,32.5Q96,50,87,67.5Z;
                        M86.5,65.5Q75,81,58.5,84Q42,87,26.5,78Q11,69,8.5,49Q6,29,23,17.5Q40,6,58.5,11Q77,16,87.5,33Q98,50,86.5,65.5Z;
                        M86,67Q77,84,59,86Q41,88,25,79Q9,70,11.5,51.5Q14,33,27,20Q40,7,57,13.5Q74,20,84.5,35Q95,50,86,67Z;
                        M83.5,65.5Q75,81,58.5,84Q42,87,28.5,77Q15,67,10,47.5Q5,28,22,15Q39,2,59,8Q79,14,85.5,32Q92,50,83.5,65.5Z;
                    ">
                </animate>
            </path>
        </svg>
    `;

    blobContainer.appendChild(blob);
}

// Example usage to create multiple blobs
createBlob(1, 10, 1);
createBlob(1, 10, 1, true); // A blurred blob
createBlob(2, 70, 80);
createBlob(2, 70, 80, true);

createBlob(3, 20, 50);
createBlob(3, 20, 50, true);


function openModal(index) {
  const myCarousel = new bootstrap.Carousel(document.getElementById('carouselGallery'));
  myCarousel.to(index); // Opens the modal at the clicked image index
}



function styleEventCards() {
    // Select all event cards
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach((card) => {
        // Add the blob effect
        const blob = document.createElement('div');
        blob.classList.add('blob');
        card.appendChild(blob);

        // Add the grid effect
        const grid = document.createElement('div');
        grid.classList.add('grid');
        card.appendChild(grid);

        // Add the particles container
        const particlesContainer = document.createElement('div');
        particlesContainer.classList.add('particles');
        card.appendChild(particlesContainer);

        // Add multiple particles
        for (let i = 1; i <= 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.animationDelay = `${Math.random() * 15}s`; // Randomize animation delay
            particle.style.left = `${Math.random() * 100}%`; // Randomize position
            particlesContainer.appendChild(particle);
        }
    });
}

// Call the function to apply styles to event cards
styleEventCards();

document.addEventListener('DOMContentLoaded', function() {
  // Select all nav links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add event listeners to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));
      // Add 'active' class to the clicked link
      this.classList.add('active');
    });
  });
});