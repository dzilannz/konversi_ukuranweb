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

    if (inputTypeValue === "km" && resultTypeValue === "hm") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "km" && resultTypeValue === "dam") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "km" && resultTypeValue === "m") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue ==="km" && resultTypeValue === "dm") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "km" && resultTypeValue === "cm") {
        result.value = Number(input.value)*100000;
    } else if (inputTypeValue === "km" && resultTypeValue === "mm") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "km" && resultTypeValue === "km") {
        result.value = input.value;
    } 

    if (inputTypeValue === "hm" && resultTypeValue === "km") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "hm" && resultTypeValue === "dam") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "hm" && resultTypeValue === "m") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "hm" && resultTypeValue === "dm") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "hm" && resultTypeValue === "cm") {
        result.value = Number(input.value)*10000;
    } else if (inputTypeValue === "hm" && resultTypeValue === "mm") {
        result.value = Number(input.value)*100000;
    } else if (inputTypeValue === "hm" && resultTypeValue === "hm") {
        result.value = input.value;
    }

    if (inputTypeValue === "dam" && resultTypeValue === "km") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "dam" && resultTypeValue === "hm") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "dam" && resultTypeValue === "m") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "dam" && resultTypeValue === "dm") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "dam" && resultTypeValue === "cm") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "dam" && resultTypeValue === "mm") {
        result.value = Number(input.value)*10000;
    } else if (inputTypeValue === "dam" && resultTypeValue === "dam") {
        result.value = input.value;
    }

    if (inputTypeValue === "m" && resultTypeValue === "km") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "m" && resultTypeValue === "hm") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "m" && resultTypeValue === "dam") {
        result.value = Number(inpur.value)/10;
    } else if (inputTypeValue === "m" && resultTypeValue === "dm") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "m" && resultTypeValue === "cm") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "m" && resultTypeValue === "mm") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "m" && resultTypeValue === "m") {
        result.value = input.value;
    } 

    if (inputTypeValue === "dm" && resultTypeValue === "km") {
        result.value = Number(input.value)/10000;
    } else if (inputTypeValue === "dm" && resultTypeValue === "hm") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "dm" && resultTypeValue === "dam") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "dm" && resultTypeValue === "m") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "dm" && resultTypeValue === "cm") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "dm" && resultTypeValue === "mm") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "dm" && resultTypeValue === "dm") {
        result.value = input.value;
    }

    if (inputTypeValue === "cm" && resultTypeValue === "km") {
        result.value = Number(input.value)/100000;
    } else if (inputTypeValue === "cm" && resultTypeValue === "hm") {
        result.value = Number(input.value)/10000;
    } else if (inputTypeValue === "cm" && resultTypeValue === "dam") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "cm" && resultTypeValue === "m") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "cm" && resultTypeValue === "dm") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "cm" && resultTypeValue === "mm") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "cm" && resultTypeValue === "cm") {
        result.value = input.value;
    }

    if (inputTypeValue === "mm" && resultTypeValue === "km") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "mm" && resultTypeValue === "hm") {
        result.value = Number(input.value)/100000;
    } else if (inputTypeValue === "mm" && resultTypeValue === "dam") {
        result.value = Number(input.value)/10000;
    } else if (inputTypeValue === "mm" && resultTypeValue === "m") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "mm" && resultTypeValue === "dm") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "mm" && resultTypeValue === "cm") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "mm" && resultTypeValue === "mm") {
        result.value = input.value;
    }


}
function resetInput() {
document.getElementById("input").value = "";
document.getElementById("result").value = "";
}