var voltage = 0;
var current = 0;
var resistance = 0;
var power = 0;

var inputVoltage = document.getElementById("spannung");
var inputCurrent = document.getElementById("strom");
var inputResistance = document.getElementById("widerstand");
var inputPower = document.getElementById("leistung");

var resultBlock = document.getElementById("result");
var resultVoltage = document.getElementById("result_spannung");
var resultCurrent = document.getElementById("result_strom");
var resultResistance = document.getElementById("result_widerstand");
var resultPower = document.getElementById("result_leistung");

function calculate() {
    getUserInput();
    getCaluclatorMode();
    getCaluclatorMode();
    updateView();
}

function updateView() {
    resultVoltage.innerHTML = "Spannung: " + formatWithPrefix(voltage, 'V');
    resultCurrent.innerHTML = "Strom: " + formatWithPrefix(current, 'A');
    resultResistance.innerHTML = "Widerstand: " + formatWithPrefix(resistance, 'Ω');
    resultPower.innerHTML = "Leistung: " + formatWithPrefix(power, 'W');

    resultBlock.style.display = "block";
}

function getUserInput() {
    voltage = parseFloat(getRealNumber(inputVoltage.value)) || 0;
    current = parseFloat(getRealNumber(inputCurrent.value)) || 0;
    resistance = parseFloat(getRealNumber(inputResistance.value)) || 0;
    power = parseFloat(getRealNumber(inputPower.value)) || 0;
}

function getRealNumber(eingabe){
    let ausdruck = eingabe.replace(/,/g, '.');  // Alle Kommas durch Punkte ersetzen
    try {
        let ergebnis = eval(ausdruck);
        return ergebnis;
    } catch (error) {
        return "Fehler";
    }
}

function getCaluclatorMode() {
    if (voltage === 0) {
        calculateVoltage();
    } else if (current === 0) {
        calculateCurrent();
    } else if (resistance === 0) {
        calculateResistance();
    } else if (power === 0) {
        calculatePower();
    }
}

function calculateVoltage() {
    if (current > 0 && resistance > 0) {
        voltage = current * resistance;
    } else if (power > 0 && current > 0) {
        voltage = power / current;
    } else if (power > 0 && resistance > 0) {
        voltage = Math.sqrt(power * resistance);
    }
}

function calculateCurrent() {
    if (voltage > 0 && resistance > 0) {
        current = voltage / resistance;
    } else if (power > 0 && voltage > 0) {
        current = power / voltage;
    } else if (power > 0 && resistance > 0) {
        current = Math.sqrt(power / resistance);
    }
}

function calculateResistance() {
    if (voltage > 0 && current > 0) {
        resistance = voltage / current;
    } else if (voltage > 0 && power > 0) {
        resistance = Math.pow(voltage, 2) / power;
    } else if (power > 0 && current > 0) {
        resistance = power / Math.pow(current, 2);
    }
}

function calculatePower() {
    if (voltage > 0 && current > 0) {
        power = voltage * current;
    } else if (voltage > 0 && resistance > 0) {
        power = Math.pow(voltage, 2) / resistance;
    } else if (current > 0 && resistance > 0) {
        power = Math.pow(current, 2) * resistance;
    }
}