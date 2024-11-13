document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('#userInputForm :not([id$=":0"]) input[type="radio"]');
    let selectedRadioValue = 2.5;
    radios.forEach(radio => {
        if (radio.checked) {
            selectedRadioValue = parseFloat(radio.value); // Инициализируем значением выбранного радиобатона
        }
        radio.addEventListener('change', () => {
            if (radio.checked) {
                drawFigure(parseFloat(radio.value));
                togglePointsClass(radio.value);
            }
        });
    });
    drawFigure(selectedRadioValue);
});


function togglePointsClass(r) {
    const points = document.querySelectorAll('.point');
    points.forEach(point => {
        const x = parseFloat(getComputedStyle(point).getPropertyValue('--x'));
        const y = parseFloat(getComputedStyle(point).getPropertyValue('--y'));
        if (checkPoint(x, y, parseFloat(r))) {
            point.classList.remove('point_neg');
            point.classList.add('point_pos');
        } else {
            point.classList.remove('point_pos');
            point.classList.add('point_neg');
        }
    });
}
function checkPoint(x, y, r){
    firstPart = (y<=x*2+r)&&(x<=0)&&(y>=0);
    secondPart = (x*x+y*x<=r*r/4)&&(x>=0)&&(y>=0);
    thirdPart = (x>=-r)&&(x<=0)&&(y<=0)&&(y>=-r);
    return firstPart || secondPart || thirdPart;
}




function validateYField() {
    var yField = document.getElementById('userInputForm:user-input-textField');
    var xField = document.getElementById('userInputForm:user-input-xField');
    var yValue = yField.value;
    var xValue = xField.value;
    var resultDiv = document.getElementById('userInputForm:outputText');
    console.log("ama here");
    // Проверка на числовое значение
    if (isNaN(yValue) || yValue.trim() === "" || isNaN(xValue) || xValue.trim() === "") {
        console.log("ama here1");
        resultDiv.innerHTML = "Введите корректное число в поле Y.";
        return false; // отменяет отправку формы
    }

    return true;
}