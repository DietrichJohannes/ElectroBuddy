var currentValue = 0;
var maxValueNorm = 0;
var minValueNorm = 0;

var minValueSkale = 0;
var maxValueSkale = 0;

var normValue = 0;
var scaleValue = 0;

// InputViews
var inputMinValueNorm = document.getElementById('value_min_norm');
var inputCurrentValueNorm = document.getElementById('current_value_norm');
var inputMaxValueNorm = document.getElementById('value_max_norm');

var inputMinValueScale = document.getElementById('value_min_scale');
var inputMaxValueScale = document.getElementById('value_max_scale');

var resultNorm = document.getElementById('resultNorm');
var resultScale = document.getElementById('resultScale');
var resultBlock = document.getElementById("result");


function calculate(){
    getUserInput();
    NormX();
    ScaleX();
    updateView();
}

function updateView(){
    document.getElementById('result_norm_value').textContent = normValue.toFixed(2);
    document.getElementById('result_scale_value').textContent = scaleValue.toFixed(2);

    resultBlock.style.display = "block";
}

function getUserInput(){
    currentValue = parseFloat(inputCurrentValueNorm.value);
    maxValueNorm = parseFloat(inputMaxValueNorm.value);
    minValueNorm = parseFloat(inputMinValueNorm.value);

    minValueSkale = parseFloat(inputMinValueScale.value);
    maxValueSkale = parseFloat(inputMaxValueScale.value);
}

function NormX(){
    normValue = (currentValue - minValueNorm) / (maxValueNorm - minValueNorm);
}

function ScaleX(){
    scaleValue = (normValue * (maxValueSkale - minValueSkale)) + minValueSkale;
}