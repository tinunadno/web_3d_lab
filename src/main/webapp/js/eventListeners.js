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

function validateYField() {
    var yField = document.getElementById('userInputForm:user-input-textField');
    var yValue = yField.value;
    var resultDiv = document.getElementById('userInputForm:outputText');
    console.log("ama here");
    // Проверка на числовое значение
    if (isNaN(yValue) || yValue.trim() === "") {
        console.log("ama here1");
        resultDiv.innerHTML = "Введите корректное число в поле Y.";
        return false; // отменяет отправку формы
    }

    return true;
}