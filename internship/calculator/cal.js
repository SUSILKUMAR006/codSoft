const displayoutput = document.getElementById("displayoutput");
function append(input) {
    displayoutput.value += input;
}

function clearDisplay() {
    displayoutput.value = "";
}

function calculate() {
    try {
        displayoutput.value = eval(displayoutput.value);
    }
    catch(Error)
    {
        displayoutput.value = "Error";
    }
}