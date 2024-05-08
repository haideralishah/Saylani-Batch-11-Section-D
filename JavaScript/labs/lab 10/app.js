let countEl = document.querySelectorAll('.count-form');
let countH1El = document.querySelectorAll('.count');
let errorMsg = document.querySelectorAll('.error-msg');

function addCount() {
    let countElVal = countEl[0].value;
    printMsg(countElVal, "+");
}


function minusCount() {
    let countElVal = countEl[0].value;
    printMsg(countElVal, "-");
}

function printMsg(formVal, operator) {
    if (isNaN(formVal)) {
        errorMsg[0].innerHTML = 'Count value must be a number.';
    }
    else if (operator === "+") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) + Number(formVal);
        errorMsg[0].innerHTML = "";
    }
    else if (operator === "-") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) - Number(formVal);
        errorMsg[0].innerHTML = "";
    }
}