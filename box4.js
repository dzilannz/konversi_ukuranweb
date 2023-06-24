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

    
    if (inputTypeValue === "kg" && resultTypeValue === "hg") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "kg" && resultTypeValue === "dag") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "kg" && resultTypeValue === "g") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue ==="kg" && resultTypeValue === "dg") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "kg" && resultTypeValue === "cg") {
        result.value = Number(input.value)*100000;
    } else if (inputTypeValue === "kg" && resultTypeValue === "mmg") {
        result.value = Number(input.value)*1000000;
    } else if (inputTypeValue === "kg" && resultTypeValue === "kg") {
        result.value = input.value;
    } 

    if (inputTypeValue === "hg" && resultTypeValue === "kg") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "hg" && resultTypeValue === "dag") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "hg" && resultTypeValue === "g") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "hg" && resultTypeValue === "g") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "hg" && resultTypeValue === "cg") {
        result.value = Number(input.value)*10000;
    } else if (inputTypeValue === "hg" && resultTypeValue === "mmg") {
        result.value = Number(input.value)*100000;
    } else if (inputTypeValue === "hg" && resultTypeValue === "hg") {
        result.value = input.value;
    }

    if (inputTypeValue === "dag" && resultTypeValue === "kg") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "dag" && resultTypeValue === "hg") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "dag" && resultTypeValue === "g") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "dag" && resultTypeValue === "dg") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "dag" && resultTypeValue === "cg") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "dag" && resultTypeValue === "mmg") {
        result.value = Number(input.value)*10000;
    } else if (inputTypeValue === "dag" && resultTypeValue === "dag") {
        result.value = input.value;
    }

    if (inputTypeValue === "g" && resultTypeValue === "kg") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "g" && resultTypeValue === "hg") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "g" && resultTypeValue === "dag") {
        result.value = Number(inpur.value)/10;
    } else if (inputTypeValue === "g" && resultTypeValue === "dg") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "g" && resultTypeValue === "cg") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "g" && resultTypeValue === "mmg") {
        result.value = Number(input.value)*1000;
    } else if (inputTypeValue === "g" && resultTypeValue === "g") {
        result.value = input.value;
    } 

    if (inputTypeValue === "dg" && resultTypeValue === "kg") {
        result.value = Number(input.value)/10000;
    } else if (inputTypeValue === "dg" && resultTypeValue === "hg") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "dg" && resultTypeValue === "dag") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "dg" && resultTypeValue === "g") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "dg" && resultTypeValue === "cg") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "dg" && resultTypeValue === "mmg") {
        result.value = Number(input.value)*100;
    } else if (inputTypeValue === "dg" && resultTypeValue === "dg") {
        result.value = input.value;
    }

    if (inputTypeValue === "cg" && resultTypeValue === "kg") {
        result.value = Number(input.value)/100000;
    } else if (inputTypeValue === "cg" && resultTypeValue === "hg") {
        result.value = Number(input.value)/10000;
    } else if (inputTypeValue === "cg" && resultTypeValue === "dag") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "cg" && resultTypeValue === "g") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "cg" && resultTypeValue === "dg") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "cg" && resultTypeValue === "mmg") {
        result.value = Number(input.value)*10;
    } else if (inputTypeValue === "cg" && resultTypeValue === "cg") {
        result.value = input.value;
    }

    if (inputTypeValue === "mmg" && resultTypeValue === "kg") {
        result.value = Number(input.value)/1000000;
    } else if (inputTypeValue === "mmg" && resultTypeValue === "hg") {
        result.value = Number(input.value)/100000;
    } else if (inputTypeValue === "mmg" && resultTypeValue === "dag") {
        result.value = Number(input.value)/10000;
    } else if (inputTypeValue === "mmg" && resultTypeValue === "g") {
        result.value = Number(input.value)/1000;
    } else if (inputTypeValue === "mmg" && resultTypeValue === "dg") {
        result.value = Number(input.value)/100;
    } else if (inputTypeValue === "mmg" && resultTypeValue === "cg") {
        result.value = Number(input.value)/10;
    } else if (inputTypeValue === "mmg" && resultTypeValue === "mmg") {
        result.value = input.value;
    }

}

function resetInput() {
document.getElementById("input").value = "";
document.getElementById("result").value = "";
}