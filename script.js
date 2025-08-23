let firstOperand = "";
let secondOperand = "";
let operator = "";
let zoneOfCounting = document.getElementById("zoneOfCounting");

function addDigit(digit) {
    if (operator === "") {
        firstOperand += digit;
        zoneOfCounting.innerText = firstOperand;
    } else {
        secondOperand += digit;
        zoneOfCounting.innerText = firstOperand + " " + operator + " " + secondOperand;
    }
}

function addDot() {
    if (operator === "") {
        if (firstOperand.includes(".")) return;
        firstOperand = firstOperand === "" ? "0." : firstOperand + ".";
        zoneOfCounting.innerText = firstOperand;
    } else {
        if (secondOperand.includes(".")) return;
        secondOperand = secondOperand === "" ? "0." : secondOperand + ".";
        zoneOfCounting.innerText = firstOperand + " " + operator + " " + secondOperand;
    }
}

function setOperator(op) {
    if (firstOperand === "") return;
    if (operator !== "" && secondOperand !== "") {
        calculate();
    }
    operator = op;
    zoneOfCounting.innerText = firstOperand + " " + operator;
}

function applyPercent() {
    if (firstOperand === "" || operator === "") return;
    if (secondOperand === "") return;

    let base = Number(firstOperand);
    let percent = Number(secondOperand);

    if (operator === "+" || operator === "-") {
        secondOperand = (base * percent / 100).toString();
    } else if (operator === "*") {
        secondOperand = (percent / 100).toString();
    } else if (operator === "/") {
        secondOperand = (percent / 100).toString();
    }

    zoneOfCounting.innerText = firstOperand + " " + operator + " " + secondOperand;
}

function calculate() {
    if (firstOperand === "" || operator === "" || secondOperand === "") return;

    let a = Number(firstOperand);
    let b = Number(secondOperand);
    let result;

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/":
            if (b === 0) {
                zoneOfCounting.innerText = "Can`t be divided by zero";
                return;
            }
            result = a / b; 
            break;
    }

    result = Number(result.toFixed(10));
    zoneOfCounting.innerText = result;
    firstOperand = result.toString();
    secondOperand = "";
    operator = "";
}

function clearAll() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    zoneOfCounting.innerText = "";
}

function backspace() {
    if (operator === "") {
        firstOperand = firstOperand.slice(0, -1);
        zoneOfCounting.innerText = firstOperand;
    } else if (secondOperand !== "") {
        secondOperand = secondOperand.slice(0, -1);
        zoneOfCounting.innerText = firstOperand + " " + operator + " " + secondOperand;
    } else {
        operator = "";
        zoneOfCounting.innerText = firstOperand;
    }
}

document.getElementById("zero").onclick = () => addDigit("0");
document.getElementById("one").onclick = () => addDigit("1");
document.getElementById("two").onclick = () => addDigit("2");
document.getElementById("three").onclick = () => addDigit("3");
document.getElementById("four").onclick = () => addDigit("4");
document.getElementById("five").onclick = () => addDigit("5");
document.getElementById("six").onclick = () => addDigit("6");
document.getElementById("seven").onclick = () => addDigit("7");
document.getElementById("eight").onclick = () => addDigit("8");
document.getElementById("nine").onclick = () => addDigit("9");

document.getElementById("dot").onclick = addDot;
document.getElementById("plus").onclick = () => setOperator("+");
document.getElementById("minus").onclick = () => setOperator("-");
document.getElementById("multiply").onclick = () => setOperator("*");
document.getElementById("divide").onclick = () => setOperator("/");
document.getElementById("persent").onclick = applyPercent;
document.getElementById("equal").onclick = calculate;
document.getElementById("c").onclick = clearAll;
document.getElementById("oneBack").onclick = backspace;