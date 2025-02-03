/* TODO:
- Finish Extra Credit Part of The Odin Project
- Break operate() into smaller functions
- Add keyboard support
- Add decimal point
- Add backspace
- Add divs instead of putting everything in body
- Add negative numbers
- Create one calculate() function instead of add subtract multiply divide functions
- CSS Styling
*/ 

function operate(){
    const mainBody = document.querySelector("body");
    //Array of digit texts
    const digitTexts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    let number1 = "";
    let number2 = "";
    let currentNumber = "";
    let operator = "";

    //Create buttons for digits

    for (let i = 0; i < digitTexts.length; i++){
        const digitButton = document.createElement("button");
        mainBody.appendChild(digitButton);
        digitButton.textContent = digitTexts[i];
        // Add event listener to each digit button
        digitButton.addEventListener("click", function(){
            currentNumber += digitTexts[i];
            resultText.textContent = currentNumber;
        });
    }

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

    addButton.addEventListener("click", function(){ operatorPressed("add", "+") });
    subtractButton.addEventListener("click", function(){ operatorPressed("subtract", "-") });
    multiplyButton.addEventListener("click", function(){ operatorPressed("multiply", "*") });
    divideButton.addEventListener("click", function(){ operatorPressed("divide", "/") });

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

    function operatorPressed(choice, symbol){
        calcChoice = choice;
        operator = symbol;
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
    }    
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