document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons
    const smileBtn = document.getElementById('smileBtn');
    const laughterBtn = document.getElementById('laughterBtn');
    const heartBtn = document.getElementById('heartBtn');

    // Function to display emoji
    function displayEmoji(emoji, button) {
    // Create an image element
    const img = document.createElement('img');
    // Set source attribute to the emoji
    img.src = emoji;
    // Add 'emoji' class for styling and animation
    img.classList.add('emoji');
    // Position the image relative to the button wrapper
    const buttonWrapper = button.parentElement;
    const buttonWrapperRect = buttonWrapper.getBoundingClientRect();
    // Append the image to the button wrapper
    buttonWrapper.appendChild(img);
    // Remove the image after animation duration if it still exists
    setTimeout(() => {
        if (buttonWrapper.contains(img)) {
        buttonWrapper.removeChild(img);
        }
    }, 500);
    }

    // Event listeners for each button
    smileBtn.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
        displayEmoji('smile.png', smileBtn); // Replace 'smile.png' with the path to your smile emoji
        }, i * 100); // Delay each image by 100ms
    }
    });

    laughterBtn.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
        displayEmoji('laughter.png', laughterBtn); // Replace 'laughter.png' with the path to your laughter emoji
        }, i * 100); // Delay each image by 100ms
    }
    });

    heartBtn.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
        displayEmoji('heart.jpg', heartBtn); // Replace 'heart.png' with the path to your heart
        }, i * 100); // Delay each image by 100ms
    }
    });

});