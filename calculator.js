/* TODO:
- Finish Extra Credit Part of The Odin Project
*/ 

function operate(){
    const mainBody = document.querySelector("body");

    let number1 = "";
    let number2 = "";
    let currentNumber = "";
    let operator = "";

    //Create digits 0-9 buttons

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

    //Create operator buttons

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

    //Create clear button

    const clearButton = document.createElement("button");
    mainBody.appendChild(clearButton);

    clearButton.textContent = "Clear";

    //Create divs for user input and result

    const resultDiv = document.createElement("div");
    mainBody.appendChild(resultDiv);
    resultDiv.style.border = "1px solid black";
    resultDiv.style.backgroundColor = "lightgrey";

    const resultText = document.createElement("p");
    resultDiv.appendChild(resultText);

    let calcChoice = "";

    //Add event listeners to buttons

    oneButton.addEventListener("click", function(){
        currentNumber += "1";
        resultText.textContent = currentNumber;
    });

    twoButton.addEventListener("click", function(){
        currentNumber += "2";
        resultText.textContent = currentNumber;
    });

    threeButton.addEventListener("click", function(){
        currentNumber += "3";
        resultText.textContent = currentNumber;
    });

    fourButton.addEventListener("click", function(){
        currentNumber += "4";
        resultText.textContent = currentNumber;
    });

    fiveButton.addEventListener("click", function(){
        currentNumber += "5";
        resultText.textContent = currentNumber;
    });

    sixButton.addEventListener("click", function(){
        currentNumber += "6";
        resultText.textContent = currentNumber;
    });

    sevenButton.addEventListener("click", function(){
        currentNumber += "7";
        resultText.textContent = currentNumber;
    });

    eightButton.addEventListener("click", function(){
        currentNumber += "8";
        resultText.textContent = currentNumber;
    });

    nineButton.addEventListener("click", function(){
        currentNumber += "9";
        resultText.textContent = currentNumber;
    });

    zeroButton.addEventListener("click", function(){
        currentNumber += "0";
        resultText.textContent = currentNumber;
    });

    addButton.addEventListener("click", function(){
        calcChoice = "add";
        operator = "+";
        // if current number is empty, set it to number1 to prevent multiple clicking of operator
        if (currentNumber === ""){
            currentNumber = number1;
        }
        // save current number to number1 to work with second number next
        number1 = currentNumber;
        // if number is empty, set it to 0
        if (number1 === ""){
            number1 = "0";
        }
        // empty current number to start with new number
        currentNumber = "";
        resultText.textContent = operator;
    });

    subtractButton.addEventListener("click", function(){
        calcChoice = "subtract";
        operator = "-";
        if (currentNumber === ""){
            currentNumber = number1;
        }
        number1 = currentNumber;
        // if number is empty, set it to 0
        if (number1 === ""){
            number1 = "0";
        }
        currentNumber = "";
        resultText.textContent = operator
    });

    multiplyButton.addEventListener("click", function(){
        calcChoice = "multiply";
        operator = "*";
        if (currentNumber === ""){
            currentNumber = number1;
        }
        number1 = currentNumber;
        currentNumber = "";
        // if number is empty, set it to 0
        if (number1 === ""){
            number1 = "0";
        }
        resultText.textContent = operator;
    });

    divideButton.addEventListener("click", function(){
        calcChoice = "divide";
        operator = "/";
        if (currentNumber === ""){
            currentNumber = number1;
        }
        number1 = currentNumber;
        currentNumber = "";
        // if number is empty, set it to 0
        if (number1 === ""){
            number1 = "0";
        }
        resultText.textContent = operator;
    });

    equalsButton.addEventListener("click", function(){
        let result = 0;
        // if number1 and currentNumber are empty, reset everything and alert user
        if (number1 === "" && currentNumber === ""){
            alert("Yes, great idea to calculate nothing!");
            number1 = "";
            number2 = "";
            currentNumber = "";
            operator = "";
            resultText.textContent = "";
            return;
        // if number1 is empty and currentNumber is not, set result to currentNumber
        }else if (number1 === "" && currentNumber !== ""){
            result = currentNumber;
            resultText.textContent = result;
            return;
        // if no operator is chosen, alert user
        }else if (number1 !== "" && currentNumber === ""){
            alert("What the hell am i supposed to do with this?");
            return;
        }

        // set number2 to currentNumber
        number2 = currentNumber;
        // parse numbers to float
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);

        if(calcChoice === "add"){
            result = addNumbers(number1, number2);
        } else if(calcChoice === "subtract"){
            result = subtractNumbers(number1, number2);
        } else if(calcChoice === "multiply"){
            result = multiplyNumbers(number1, number2);
        } else if(calcChoice === "divide"){
            // dont let user divide by 0
            if (number2 === 0){
                alert("Dont fckn try to divide by 0!");
                number1 = "";
                number2 = "";
                currentNumber = "";
                operator = "";
                resultText.textContent = "";
                return;
            }else{
            result = divideNumbers(number1, number2);
            }
        } else if (calcChoice === ""){
            result = number1;
        }
        // reset, but set result to currentNumber to continue calculating
        resultText.textContent = result;
        number1 = "";
        number2 = "";
        currentNumber = result;
        operator = "";
    });

    // reset everything
    clearButton.addEventListener("click", function(){
        number1 = "";
        number2 = "";
        operator = "";
        currentNumber = "";
        resultText.textContent = "";
    });
}

function addNumbers(number1, number2){
    let result = 0;
    result = number1 + number2;
    result = Math.round(result * 100) / 100;
    return result;
}

function subtractNumbers(number1, number2){
    let result = 0;
    result = number1 - number2;
    result = Math.round(result * 100) / 100;
    return result;
}

function multiplyNumbers(number1, number2){
    let result = 0;
    result = number1 * number2;
    result = Math.round(result * 100) / 100;
    return result;
}

function divideNumbers(number1, number2){
    let result = 0;
    result = number1 / number2;
    result = Math.round(result * 100) / 100;
    return result;
}

operate();