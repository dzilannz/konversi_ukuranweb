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

    if (inputTypeValue === "c" && resultTypeValue === "r") {
        result.value = Number(input.value)*4/5;
    } else if (inputTypeValue === "c" && resultTypeValue === "f") {
        result.value = 9/5*Number(input.value)+32;
    } else if (inputTypeValue === "c" && resultTypeValue === "k") {
        result.value = Number(input.value)+273;
    } else if (inputTypeValue === "c" && resultTypeValue === "c") {
        result.value = input.value;
    }

    if (inputTypeValue === "r" && resultTypeValue === "c") {
        result.value = Number(input.value)*5/4;
    } else if (inputTypeValue === "r" && resultTypeValue === "f") {
        result.value = 9/4*Number(input.value)+32;
    } else if (inputTypeValue === "r" && resultTypeValue === "k") {
        result.value = 5/4*Number(input.value)+273;
    } else if (inputTypeValue === "r" && resultTypeValue === "r") {
        result.value = input.value;
    }

    if (inputTypeValue === "f" && resultTypeValue === "c") {
        result.value = (Number(input.value) -32)*5/9;
    } else if (inputTypeValue === "f" && resultTypeValue === "r") {
        result.value = (Number(input.value) -32)*4/9;
    } else if (inputTypeValue === "f" && resultTypeValue === "k") {
        result.value = (Number(input.value)+459.67)*5/9;
    } else if (inputTypeValue === "f" && resultTypeValue === "f") {
        result.value = input.value;
    }

    if (inputTypeValue === "k" && resultTypeValue === "c") {
        result.value = Number(input.value)-273;
    } else if (inputTypeValue === "k" && resultTypeValue === "r") {
        result.value = (Number(input.value) -273)*4/5;
    } else if (inputTypeValue === "k" && resultTypeValue === "f") {
        result.value = 9/5*(Number(input.value) - 273) + 32;
    } else if (inputTypeValue === "k" && resultTypeValue === "k") {
        result.value = input.value;
    } 
}
function resetInput() {
document.getElementById("input").value = "";
document.getElementById("result").value = "";
}