var geräteleistung = 0;
var betriebszeit = 0;
var strompreis = 0;
var kosten = 0;
var energie = 0;

// Views

var inputGeräteLeistung = document.getElementById("geräteleistung");
var inputBetriebszeit = document.getElementById("betriebszeit");
var inputStromPreis = document.getElementById("strompreis");

var resultBlock = document.getElementById("result");
var resultEnergie = document.getElementById("result_energie");
var resultKosten = document.getElementById("result_kosten");


function calculate(){
    getUserInput();
    calculatePrice();
    updateView();
}

function getUserInput(){
    geräteleistung = parseFloat(inputGeräteLeistung.value);
    betriebszeit = parseFloat(inputBetriebszeit.value);
    strompreis = parseFloat(inputStromPreis.value);
}

function calculatePrice(){
    energie = (geräteleistung * betriebszeit) / 1000;

    kosten = energie * strompreis;
}

function updateView(){
    resultEnergie.innerHTML = "Verbrauchte Energie: " + energie.toFixed(2) + "kWh";
    resultKosten.innerHTML = "Stromkosten: " + kosten.toFixed(2) + "€";

    resultBlock.style.display = "block";
}