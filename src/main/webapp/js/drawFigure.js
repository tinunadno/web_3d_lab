// Function to draw the figure based on a given radius
function drawFigure(radius) {
    const canvas = document.getElementById("figureCanvas");
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the maximum radius for the figure
    const maxRadius = Math.min(centerX, centerY);

    // Ensure radius is within the allowed range (1 - 5)
    radius = Math.max(1, Math.min(radius, 5)) * maxRadius;

    // Draw the square in the bottom-left corner
    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.rect(centerX - radius, centerY - radius, radius, radius);
    ctx.fill();

    // Draw the triangle in the top-left corner
    ctx.fillStyle = "lightgreen";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - 0.5 * radius, centerY);
    ctx.lineTo(centerX, centerY - radius);
    ctx.closePath();
    ctx.fill();

    // Draw the quarter circle in the top-right corner
    ctx.fillStyle = "lightcoral";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 0.5 * radius, Math.PI, Math.PI * 1.5);
    ctx.closePath();
    ctx.fill();
}