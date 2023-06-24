var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

//add listerner
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "kmk" && resultTypeValue === "hmk") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "kmk" && resultTypeValue === "damk") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "kmk" && resultTypeValue === "mk") {
        result.value = Number(input.value)*1000000000;
    } else if (inputTypeValue ==="kmk" && resultTypeValue === "dmk") {
        result.value = Number(input.value)*1000000000000;
    } else if (inputTypeValue === "kmk" && resultTypeValue === "cmk") {
        result.value = Number(input.value)*1000000000000000;
    } else if (inputTypeValue === "kmk" && resultTypeValue === "mmk") {
        result.value = Number(input.value)*1000000000000000000;
    } else if (inputTypeValue === "kmk" && resultTypeValue === "kmk") {
        result.value = input.value;
    } 

    if (inputTypeValue === "hmk" && resultTypeValue === "kmk") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "hmk" && resultTypeValue === "damk") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "hmk" && resultTypeValue === "mk") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "hmk" && resultTypeValue === "dmk") {
        result.value = Number(input.value)*1000000000;
    } else if (inputTypeValue === "hmk" && resultTypeValue === "cmk") {
        result.value = Number(input.value)*1000000000000;
    } else if (inputTypeValue === "hmk" && resultTypeValue === "mmk") {
        result.value = Number(input.value)*1000000000000000000;
    } else if (inputTypeValue === "hmk" && resultTypeValue === "hmk") {
        result.value = input.value;
    }

    if (inputTypeValue === "damk" && resultTypeValue === "kmk") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "damk" && resultTypeValue === "hmk") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "damk" && resultTypeValue === "mk") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "damk" && resultTypeValue === "dmk") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "damk" && resultTypeValue === "cmk") {
        result.value = Number(input.value)*1000000000;
    } else if (inputTypeValue === "damk" && resultTypeValue === "mmk") {
        result.value = Number(input.value)*1000000000000;
    } else if (inputTypeValue === "damk" && resultTypeValue === "damk") {
        result.value = input.value;
    }

    if (inputTypeValue === "mk" && resultTypeValue === "kmk") {
        result.value = Number(input.value)/1000000000;
    } else if (inputTypeValue === "mk" && resultTypeValue === "hmk") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "mk" && resultTypeValue === "damk") {
        result.value = Number(inpur.value)/1000;
    } else if (inputTypeValue === "mk" && resultTypeValue === "dmk") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "mk" && resultTypeValue === "cmk") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "mk" && resultTypeValue === "mmk") {
        result.value = Number(input.value)*1000000000;
    } else if (inputTypeValue === "mk" && resultTypeValue === "mk") {
        result.value = input.value;
    } 

    if (inputTypeValue === "dmk" && resultTypeValue === "kmk") {
        result.value = Number(input.value)/1000000000000;
    } else if (inputTypeValue === "dmk" && resultTypeValue === "hmk") {
        result.value = Number(input.value)/1000000000;
    } else if (inputTypeValue === "dmk" && resultTypeValue === "damk") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "dmk" && resultTypeValue === "mk") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "dmk" && resultTypeValue === "cmk") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "dmk" && resultTypeValue === "mmk") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "dmk" && resultTypeValue === "dmk") {
        result.value = input.value;
    }

    if (inputTypeValue === "cmk" && resultTypeValue === "kmk") {
        result.value = Number(input.value)/1000000000000000;
    } else if (inputTypeValue === "cmk" && resultTypeValue === "hmk") {
        result.value = Number(input.value)/1000000000000;
    } else if (inputTypeValue === "cmk" && resultTypeValue === "damk") {
        result.value = Number(input.value)/1000000000;
    } else if (inputTypeValue === "cmk" && resultTypeValue === "mk") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "cmk" && resultTypeValue === "dmk") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "cmk" && resultTypeValue === "mmk") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "cmk" && resultTypeValue === "cmk") {
        result.value = input.value;
    }

    if (inputTypeValue === "mmk" && resultTypeValue === "kmk") {
        result.value = Number(input.value)/1000000000000000000000;
    } else if (inputTypeValue === "mmk" && resultTypeValue === "hmk") {
        result.value = Number(input.value)/1000000000000000000;
    } else if (inputTypeValue === "mmk" && resultTypeValue === "damk") {
        result.value = Number(input.value)/1000000000000;
    } else if (inputTypeValue === "mmk" && resultTypeValue === "mk") {
        result.value = Number(input.value)/1000000000;
    } else if (inputTypeValue === "mmk" && resultTypeValue === "dmk") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "mmk" && resultTypeValue === "cmk") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "mmk" && resultTypeValue === "mmk") {
        result.value = input.value;
    }

  
}
function resetInput() {
document.getElementById("input").value = "";
document.getElementById("result").value = "";
}