function getChoice(){
    let humanChoice = prompt("Type in \"add\", \"subtract\", \"multiply\" or \"divide\"").toLowerCase();
    let number1 = parseFloat(prompt("Type in your first number"));
    let number2 = parseFloat(prompt("Type in your second number"));
    let result = 0;
    if (humanChoice == "add")
        {
            result = addNumbers(number1, number2);
        }
    else if (humanChoice == "subtract")
        {
            result = subtractNumbers(number1, number2);
        }
    else if (humanChoice == "multiply")
        {
            result = multiplyNumbers(number1, number2);
        }
    else if (humanChoice == "divide")
        {
            result = divideNumbers(number1, number2);
        }
    console.log(result);
}

function addNumbers(number1, number2){
    let result = 0;
    result = number1 + number2;
    return result;
}

function subtractNumbers(){
    let result = 0;
    result = number1 - number2;
    return result;
}

function multiplyNumbers(){
    let result = 0;
    result = number1 * number2;
    return result;
}

function divideNumbers(){
    let result = 0;
    result = number1 / number2;
    return result;
}

getChoice();