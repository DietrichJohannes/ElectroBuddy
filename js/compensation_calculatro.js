var netzspannung = 230;
var netzfrequenz = 0;
var abgegebeneleistung = 0;
var wirkungsgrad = 0.0;
var aufgebommeneLeistung = 0;
var blindleistung = 0;
var cosPhi1 = 0;
var cosPhi2 = 0;
var kapazität = 0;

// Spannungs Radio
var selectedStar = document.getElementById("dreieck");
var selectedDelta = document.getElementById("stern");
var selectedUserInput = document.getElementById("userSpannung");

// Input Views
var inputSpannung = document.getElementById("userInputSpannung");
var inputFrequenz = document.getElementById("frequenz");
var inputLeistung = document.getElementById("leistung");
var inputCosPhi1 = document.getElementById("cosphi1");
var inputCosPhi2 = document.getElementById("cosphi2");
var inputWirkungsgrad = document.getElementById("wirkungsgrad");

var resultSpannung = document.getElementById("resultSpannung");
var resultFrequenz = document.getElementById("resultFrequenz");
var resultWirkleisung = document.getElementById("resultWirkleistung");
var resultWirkungsgrad = document.getElementById("resultWirkungsgrad");
var resultAufgenommeneLeisung = document.getElementById("resultAufgenommeneLeistung");
var resultBlindleistung = document.getElementById("resultBlindleistung");
var resultPhi1 = document.getElementById("resultPhi1");
var resultPhi2 = document.getElementById("resultPhi2");
var resultKapazität = document.getElementById("resultKapazität");

var resultBlock = document.getElementById("result");

animate();

function updateInputVisibility() {
  var selectedValue = getSelectedSpannung();
  if (selectedValue === "0") {
    inputSpannung.style.display = "block";
  } else {
    inputSpannung.style.display = "none";
  }
}

var radios = document.getElementsByName("spannung");
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", updateInputVisibility);
}

function startCalculator() {
  getUserInput();
  calculateConsumedPower();
  calculateReactivePower();
  calculateCapacity();
  updateView();
}

function updateView(){
  resultSpannung.innerHTML = "Spannung: " + formatWithPrefix(netzspannung, "V");
  resultFrequenz.innerHTML = "Frequenz: " + formatWithPrefix(netzfrequenz, "Hz");
  resultWirkleisung.innerHTML = "Abgegebene Leistung: " + formatWithPrefix(abgegebeneleistung, "W");
  resultWirkungsgrad.innerHTML = "Wirkungsgrad: " + "%";
  resultAufgenommeneLeisung.innerHTML = "Aufgenommene Leistung: " + formatWithPrefix(aufgebommeneLeistung, "VA");
  resultBlindleistung.innerHTML = "Blindleistung: " + formatWithPrefix(blindleistung, "VAr");
  resultPhi1.innerHTML = "Phi1: " + cosPhi1;
  resultPhi2.innerHTML = "Phi2: " + cosPhi2;
  resultKapazität.innerHTML = "Gesammt Kapazität: " + formatWithPrefix(kapazität, "F");


  resultBlock.style.display = "block";
}

function calculateConsumedPower() {
  if (wirkungsgrad > 0) {
    aufgebommeneLeistung = abgegebeneleistung / wirkungsgrad;
  } else {
    aufgebommeneLeistung = 0;
  }
}

function calculateReactivePower() {
  if (cosPhi1 > 0 && cosPhi2 > 0 && cosPhi1 <= 1 && cosPhi2 <= 1) {
    let phiAlt = Math.acos(cosPhi1);
    let phiNeu = Math.acos(cosPhi2);
    let tanAlt = Math.tan(phiAlt);
    let tanNeu = Math.tan(phiNeu);
    blindleistung = aufgebommeneLeistung * (tanAlt - tanNeu);
  } else {
    blindleistung = 0;
  }
}

function calculateCapacity(){
  kapazität = blindleistung / (2 * 3.14159 * netzfrequenz * (netzspannung * netzspannung));
  console.log(formatWithPrefix(kapazität, 'F'));
}

function animate() {
  getUserInput();
  updateInputVisibility();
}

function getSelectedSpannung() {
  var radios = document.getElementsByName("spannung");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}

function getUserInput() {
  var selected = getSelectedSpannung();
  netzspannung = selected === "0" ? parseFloat(inputSpannung.value) : parseFloat(selected);
  netzfrequenz = parseFloat(inputFrequenz.value);
  abgegebeneleistung = parseFloat(inputLeistung.value);
  cosPhi1 = parseFloat(inputCosPhi1.value);
  cosPhi2 = parseFloat(inputCosPhi2.value);
  wirkungsgrad = parseFloat(inputWirkungsgrad.value);

  // Falls Wirkungsgrad als Prozent eingegeben wird:
  if (wirkungsgrad > 1) {
    wirkungsgrad = wirkungsgrad / 100;
  }
}
