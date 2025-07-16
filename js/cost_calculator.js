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

    document.getElementById('result_energie_value').textContent = energie.toFixed(2);
    document.getElementById('result_kosten_value').textContent = kosten.toFixed(2);
    document.getElementById('result_summary').textContent = `${kosten.toFixed(2)} € Stromkosten`;
    
    // Result div anzeigen
    document.getElementById('result').style.display = 'block';
    
    // Smooth scroll to result
    document.getElementById('result').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}