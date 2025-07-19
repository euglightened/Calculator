function plus(a, b) {
        return a + b
    }

function minus(a, b) {
        return a - b
    }

function multiply(a, b) {
        return a * b
    }

function divide(a, b) {
    if (a == 0 || b == 0) {
        return "Opss"
    } else {
        return a / b
    }
}

function calculate(input) {

    let parts = input.trim().split(" ");

    let [a, operator, b] = parts

    if (parts.length !== 3) {
        return "Write an equation (example: 2 + 3):"
    }

    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        return "You must write numbers"
    }

    switch (operator) {
        case "+":
            return plus(a, b)
        case "-":
            return minus(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
            default:
                return "Unknown operator"
    }
}

let userInput = prompt("Write an equation (example: 2 + 3):");
let result = calculate(userInput);
const final = document.createElement("p")
final.innerText = result
final.style.fontSize = "50px"
let answer = document.getElementById("ContainerWithAnswer")
answer.appendChild(final)
console.log(result)