function bringToFront(imageElement) {
    // Get the current z-index of the clicked image
    const currentZIndex = parseInt(window.getComputedStyle(imageElement).zIndex);

    // Find all images in the gallery container
    const images = document.querySelectorAll('.gallery-container .image');

    // Set the z-index of all images to be lower than the clicked one
    let maxZIndex = 0;
    images.forEach(img => {
        const zIndex = parseInt(window.getComputedStyle(img).zIndex);
        if (zIndex > maxZIndex) {
            maxZIndex = zIndex;
        }
    });

    // Set the clicked image to have the highest z-index
    imageElement.style.zIndex = maxZIndex + 1;
}
