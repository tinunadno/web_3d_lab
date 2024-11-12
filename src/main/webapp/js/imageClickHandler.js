document.addEventListener('DOMContentLoaded', function() {
    const interactiveImage = document.getElementById('interactive-image');

    // Add click event listener
    interactiveImage.addEventListener('click', function(event) {
        // Get the bounding rectangle of the image
        const rect = interactiveImage.getBoundingClientRect();

        // Calculate click position relative to the image
        const x = (event.clientX - rect.left - 95);  // X position in pixels
        const y = (event.clientY - rect.top - 95);   // Y position in pixels

        // Calculate values to insert
        const xValue = Math.max(Math.min(Math.round((x * 10) / 560 - 5), 5), -5).toString();
        const yValue = ((y * 10 / 560 - 5) * -1).toString();

        // Insert values into the select and text fields
        $('#userInputForm\\:user-input-selectBox').val(xValue);
        $('#userInputForm\\:user-input-textField').val(yValue);

        document.getElementById('userInputForm:responseButton').click();
    });
});
