//your JS code here. If required.
// Function to lazy load images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src"); // Load the image
                img.classList.remove("lazy"); // Remove lazy class
                observer.unobserve(img); // Stop observing this image
            }
        });
    });

    lazyImages.forEach((image) => {
        imageObserver.observe(image);
    });
}

// Initialize lazy loading when DOM is fully loaded
document.addEventListener("DOMContentLoaded", lazyLoadImages);
