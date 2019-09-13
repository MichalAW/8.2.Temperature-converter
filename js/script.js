'use strict'
//Change to fahrenheit:
var outputC;
var buttonC;
var factorTempA;
var factorTempB;
var outputF;
var buttonF;

outputC = document.getElementById('celsius-output');

outputC.innerHTML += 'Click the button to check weather in celsius!' + '<br><br>';

buttonC = document.getElementById('celsius-button');

factorTempA = 1.8;

factorTempB = 32;

buttonC.addEventListener('click', function () {
    var nameC;
    var numberC;

    nameC = window.prompt('Put here temperature in fahrenheits');

    numberC = (nameC * factorTempA) + factorTempB;

    if (isNaN(nameC)) {
        alert('It must be a number')
        return;
    }

    if (numberC > 1 && numberC < 50) {
        outputC.innerHTML += ('water is in liquid condition, and you should wear scarf<br>');
    }

    if (numberC > -50 && numberC < 10) {
        outputC.innerHTML += ('water is in frozen condition, and you should light jacket<br>');
    }

    if (numberC > 50 && numberC < 200) {
        outputC.innerHTML += ('water is in state condition, and you should wear shorts<br>');
    }

    if (numberC <= -273.15) {
        outputC.innerHTML += ('it is gonna be iceage<br>');
    }

    outputC.innerHTML += 'fahrenheit ' + numberC + '!' + '<br><br>';
});
//Change to Celsius

outputF = document.getElementById('fahrenheit-output');

outputF.innerHTML += 'Click the button to check weather in fahrenheits!' + '<br><br>';

buttonF = document.getElementById('fahrenheit-button');

buttonF.addEventListener('click', function () {
    var nameF;
    var numberF;

    nameF = window.prompt('Put here the temperature in celsius');

    numberF = (nameF - factorTempB) / factorTempA;

    if (isNaN(nameF)) {
        alert('It must be a number')
        return;
    }

    if (numberF > 1 && numberF < 50) {
        outputF.innerHTML += ('water is in liquid condition, and you should wear scarf<br>');
    }

    if (numberF > -50 && numberF < 1) {
        outputF.innerHTML += ('water is in frozen condition, and you should light   jacket<br>');
    }

    if (numberF > 50 && numberF < 200) {
        outputF.innerHTML += ('water is in state condition, and you should wear shorts<br>');
    }

    if (numberF <= -273.15) {
        outputF.innerHTML += ('it is gonna be iceage<br>');
    }

    outputF.innerHTML += 'celsius ' + numberF + '!' + '<br><br>';
});