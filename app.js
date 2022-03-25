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