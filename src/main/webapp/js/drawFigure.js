function drawFigure(r) {
    // Get the canvas element and its context
    const canvas = document.getElementById('figureCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions (assumes canvas is already sized to fit parent container)
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Clear the canvas for redrawing
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate the center of the canvas
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // Calculate the scaled size for the square
    const maxSquareSize = canvasWidth / 2; // Maximum size when r = 5
    const squareSize = (r / 5) * maxSquareSize; // Scale r relative to max size

    // Draw the square in the third quadrant (bottom-left from center)
    const squareX = centerX - squareSize;
    const squareY = centerY;
    ctx.fillStyle = '#6a93d1'; // Set the fill color for the square
    ctx.fillRect(squareX, squareY, squareSize, squareSize); // Draw rightwards and upwards

    // Calculate triangle vertices based on r
    const triangleHeight = (r / 5) * maxSquareSize; // Scaling height for triangle
    const triangleBase = triangleHeight / 2; // Triangle base is half of its height

    // Draw the triangle in the second quadrant (top-left from center)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY); // (0, 0) in the center
    ctx.lineTo(centerX - triangleBase, centerY); // (-r/2, 0) relative to center
    ctx.lineTo(centerX, centerY - triangleHeight); // (0, r) relative to center
    ctx.closePath();
    ctx.fillStyle = '#6a93d1'; // Set the fill color for the triangle
    ctx.fill(); // Draw the triangle

    // Calculate radius for the quarter-circle
    const circleRadius = (r / 10) * canvasWidth; // Scaling circle radius to fit r/2

    // Draw the quarter-circle in the first quadrant (top-right from center)
    ctx.beginPath();
    ctx.arc(centerX, centerY, circleRadius/2, 1.5 * Math.PI, 0, false); // Top-right quarter-circle
    ctx.lineTo(centerX, centerY); // Connect back to the center
    ctx.closePath();
    ctx.fillStyle = '#6a93d1'; // Set the fill color for the quarter-circle
    ctx.fill(); // Draw the quarter-circle
}