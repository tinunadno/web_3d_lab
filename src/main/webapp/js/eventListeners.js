document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('#userInputForm :not([id$=":0"]) input[type="radio"]');

    radios.forEach(radio => {
        console.log("asd");
        radio.addEventListener('change', () => {
            console.log("asd1");
            if (radio.checked) {
                drawFigure(parseFloat(radio.value));
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    drawFigure(2.5);
});