function operate(){
    const mainBody = document.querySelector("body");

    let number1 = "";
    let number2 = "";
    let operator = "";

    const oneButton = document.createElement("button");
    mainBody.appendChild(oneButton);

    oneButton.textContent = "1";

    const twoButton = document.createElement("button");
    mainBody.appendChild(twoButton);

    twoButton.textContent = "2";

    const threeButton = document.createElement("button");
    mainBody.appendChild(threeButton);

    threeButton.textContent = "3";

    const fourButton = document.createElement("button");
    mainBody.appendChild(fourButton);

    fourButton.textContent = "4";

    const fiveButton = document.createElement("button");
    mainBody.appendChild(fiveButton);

    fiveButton.textContent = "5";

    const sixButton = document.createElement("button");
    mainBody.appendChild(sixButton);

    sixButton.textContent = "6";

    const sevenButton = document.createElement("button");
    mainBody.appendChild(sevenButton);

    sevenButton.textContent = "7";

    const eightButton = document.createElement("button");
    mainBody.appendChild(eightButton);

    eightButton.textContent = "8";

    const nineButton = document.createElement("button");
    mainBody.appendChild(nineButton);

    nineButton.textContent = "9";

    const zeroButton = document.createElement("button");
    mainBody.appendChild(zeroButton);

    zeroButton.textContent = "0";

    const addButton = document.createElement("button");
    mainBody.appendChild(addButton);

    addButton.textContent = "+";

    const subtractButton = document.createElement("button");
    mainBody.appendChild(subtractButton);

    subtractButton.textContent = "-";

    const multiplyButton = document.createElement("button");
    mainBody.appendChild(multiplyButton);

    multiplyButton.textContent = "*";

    const divideButton = document.createElement("button");
    mainBody.appendChild(divideButton);

    divideButton.textContent = "/";

    const equalsButton = document.createElement("button");
    mainBody.appendChild(equalsButton);

    equalsButton.textContent = "=";

    const clearButton = document.createElement("button");
    mainBody.appendChild(clearButton);

    clearButton.textContent = "Clear";

    const firstNumberDiv = document.createElement("div");
    mainBody.appendChild(firstNumberDiv);
    firstNumberDiv.style.border = "1px solid black";
    firstNumberDiv.style.backgroundColor = "lightgrey";

    const firstNumberText = document.createElement("p");
    firstNumberText.textContent = number1;
    firstNumberDiv.appendChild(firstNumberText);

    const operatorDiv = document.createElement("div");
    mainBody.appendChild(operatorDiv);
    operatorDiv.style.border = "1px solid black";
    operatorDiv.style.backgroundColor = "lightgrey";

    const operatorText = document.createElement("p");
    operatorText.textContent = operator;
    operatorDiv.appendChild(operatorText);

    const secondNumberDiv = document.createElement("div");
    mainBody.appendChild(secondNumberDiv);
    secondNumberDiv.style.border = "1px solid black";
    secondNumberDiv.style.backgroundColor = "lightgrey";

    const secondNumberText = document.createElement("p");
    secondNumberText.textContent = number2;
    secondNumberDiv.appendChild(secondNumberText);

    const resultDiv = document.createElement("div");
    mainBody.appendChild(resultDiv);
    resultDiv.style.border = "1px solid black";
    resultDiv.style.backgroundColor = "lightgrey";

    const resultText = document.createElement("p");
    resultDiv.appendChild(resultText);

    let calcChoice = "";

    addButton.addEventListener("click", function(){
        calcChoice = "add";
        operator = "+";
        operatorText.textContent = operator;
    });

    subtractButton.addEventListener("click", function(){
        calcChoice = "subtract";
        operator = "-";
        operatorText.textContent = operator
    });

    multiplyButton.addEventListener("click", function(){
        calcChoice = "mutliply";
        operator = "*";
        operatorText.textContent = operator;
    });

    divideButton.addEventListener("click", function(){
        calcChoice = "divide";
        operator = "/";
        operatorText.textContent = operator;
    });

    equalsButton.addEventListener("click", function(){
        let number1 = parseFloat(number1);
        let number2 = parseFloat(number2);
        let result = 0;
        if(calcChoice === "add"){
            result = addNumbers(number1, number2);
        } else if(calcChoice === "subtract"){
            result = subtractNumbers(number1, number2);
        } else if(calcChoice === "multiply"){
            result = multiplyNumbers(number1, number2);
        } else if(calcChoice === "divide"){
            result = divideNumbers(number1, number2);
        }
        resultText.textContent = result;
    });

    clearButton.addEventListener("click", function(){
        number1 = "0";
        number2 = "0";
        operator = "100";
        console.log(operator);
        firstNumberText.textContent = number1;
        secondNumberText.textContent = number2;
        operatorText.textContent = operator;
        resultText.textContent = "";
    });
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

operate();