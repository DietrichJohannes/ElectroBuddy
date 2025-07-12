var verbrauch;
var kosten;
var aufgenommendeLeistung;
var strompreis;
var betreibsdauer;


// Input Views

var inputLeistung = document.getElementById('leistung');
var inputBetreibsdauer = document.getElementById('betriebsdauer');
var inputStrompreis = document.getElementById('strompreis');

var resultVerbrauch = document.getElementById('resultVerbrauch');
var resultPrice = document.getElementById('resultPrice');
var resultBlock = document.getElementById('result');

function calculate() {
getUserInput();
calculatePower();
calculatePrice();
updateView();
}

function getUserInput() {
    aufgenommendeLeistung = parseFloat(inputLeistung.value);
    strompreis = parseFloat(inputStrompreis.value);
    betreibsdauer = parseFloat(inputBetreibsdauer.value);
}

function calculatePower() {
    verbrauch = (aufgenommendeLeistung * betreibsdauer) / 1000;
}

function calculatePrice() {
    kosten = strompreis * verbrauch;
}

function updateView() {
resultVerbrauch.innerHTML = "Verbrauch: " + verbrauch + "kWh";
resultPrice.innerHTML = "Stromkosten : " + kosten + "€";

resultBlock.style.display = "block";
}

