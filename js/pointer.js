const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

// Track the cursor movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Smooth animation loop for delayed movement
function smoothFollow() {
    posX += (mouseX - posX) * 0.1;  // Adjust the delay by changing 0.1
    posY += (mouseY - posY) * 0.1;
    cursor.style.transform = `translate(${posX - 15}px, ${posY - 15}px)`;
    requestAnimationFrame(smoothFollow);
}

smoothFollow(); // Start the animation loop

// Optional: Change color on click
document.addEventListener('mousedown', () => {
    cursor.style.backgroundColor = '#245844';
});

document.addEventListener('mouseup', () => {
    cursor.style.backgroundColor = '#ec3318';
});