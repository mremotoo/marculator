//add, subtract, multiply, divide functions
const addNum = (num1, num2) => {console.log( num1 + num2)}
const subtractNum = (num1, num2) => {console.log( num1 - num2)}
const multiplyNum = (num1, num2) => {console.log( num1 * num2)}
const divideNum = (num1, num2) => {console.log( num1 / num2)}

//operator function takes an operator and 2 numbers then calls one of the above functions on the numbers
const operate = (num1, num2, operator) => {
    console.log(num1, num2, operator)
    if (operator == "+") {
        addNum(num1, num2)
    }else if (operator == "-") {
        subtractNum(num1, num2)
    }else if (operator == "x" || operator == "*") {
        multiplyNum(num1, num2)
    }else if(operator == "/") {
        divideNum(num1, num2)
    }
}

const btnDiv = document.querySelector(".calcContainer")

//display
const display = document.createElement("div")
display.textContent = 0
btnDiv.appendChild(display)

//keys
const btnText = ["7", "8", "9", "x",
                 "4", "5", "6", "-", 
                 "1", "2", "3", "+",
                 "C", "0", ".", "/"]

for (let i = 0; i < 16; i++) {
    const keys = document.createElement("button")
    keys.textContent = btnText[i]
    btnDiv.appendChild(keys)
}
    