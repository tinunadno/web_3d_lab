document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('#userInputForm :not([id$=":0"]) input[type="radio"]');
    let selectedRadioValue = 2.5
    radios.forEach(radio => {
        if (radio.checked) {
            selectedRadioValue = parseFloat(radio.value); // Инициализируем значением выбранного радиобатона
        }
        console.log("asd");
        radio.addEventListener('change', () => {
            console.log("asd1");
            if (radio.checked) {
                drawFigure(parseFloat(radio.value));
            }
        });
    });
    drawFigure(selectedRadioValue);
});