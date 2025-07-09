var spezifischerWiderstand = 0;
var rho = 0;
var laenge = 0;
var querschnitt = 0;

// Views

var userDefRho = document.getElementById("customRho");
var inputLaenge = document.getElementById("länge");
var inputQuerschnitt = document.getElementById("fläche");

var resultWiderstand = document.getElementById("result_widerstand");

var resultBlock = document.getElementById("result");

animate();


function updateInputVisibility() {
    var selectedValue = getSelectedMaterial();
    if (selectedValue === "0") {
        userDefRho.style.display = "block";
    } else {
       userDefRho.style.display = "none";
    }
}

var radios = document.getElementsByName("material");
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", updateInputVisibility);
}

function getSelectedMaterial() {
    var radios = document.getElementsByName("material");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}


function animate(){
    updateInputVisibility();
}

function startCalculator(){
    getUserInput();
    calculate();
    updateView();
}

function getUserInput(){
    var selected = getSelectedMaterial();
    rho = selected === "0" ? parseFloat(userDefRho.value) : parseFloat(selected);
    laenge = parseFloat(inputLaenge.value);
    querschnitt = parseFloat(inputQuerschnitt.value);
}

function calculate(){
    spezifischerWiderstand = rho * (laenge / querschnitt);
}

function updateView(){
    resultWiderstand.innerHTML = "Widerstand der Leitung: " + formatWithPrefix(spezifischerWiderstand, 'Ω');

    resultBlock.style.display = "block";
}