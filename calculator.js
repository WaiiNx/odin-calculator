/* TODO:
- Finish Extra Credit Part of The Odin Project
- Break operate() into smaller functions
- Add keyboard support  ***DONE***
- Add divs instead of putting everything in body
- CSS Styling
*/ 

function operate(){
    const mainBody = document.querySelector("body");
    //Array of digit texts
    const digitTexts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const digitButtons = [];

    let number1 = "";
    let number2 = "";
    let currentNumber = "";
    let operator = "";

    //Create buttons for digits

    for (let i = 0; i < digitTexts.length; i++){
        const digitButton = document.createElement("button");
        mainBody.appendChild(digitButton);
        digitButton.textContent = digitTexts[i];
        digitButtons.push(digitButton);
        // Add event listener to each digit button
        digitButton.addEventListener("click", function(){
            currentNumber += digitTexts[i];
            resultText.textContent = currentNumber;
        });
    }

    const decimalButton = document.createElement("button");
    mainBody.appendChild(decimalButton);

    decimalButton.textContent = ".";

    const backspaceButton = document.createElement("button");
    mainBody.appendChild(backspaceButton);

    backspaceButton.textContent = "<-";

    const negativeButton = document.createElement("button");
    mainBody.appendChild(negativeButton);

    negativeButton.textContent = "(-)";

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

    //Event Listener for keyboard support

    document.addEventListener("keydown", function(event){
        if (!isNaN(event.key)){
            let index = parseInt(event.key);
            digitButtons[index].click();
        }else if (event.key === "Enter"){
            equalsButton.click();
        }else if (event.key === "+"){
            addButton.click();
        }else if (event.key === "-"){
            subtractButton.click();
        }else if (event.key === "*"){
            multiplyButton.click();
        }else if (event.key === "/"){
            divideButton.click();
        }else if (event.key === "Backspace"){
            backspaceButton.click();
        }else if (event.key === "Escape"){
            clearButton.click();
        }else if (event.key === "."){
            decimalButton.click();
        }else if (event.key === "0"){
            digitButton[9].click();
        }else if (event.key === "1"){
            digitButton[0].click();
        }else if (event.key === "2"){
            digitButton[1].click();
        }else if (event.key === "3"){
            digitButton[2].click();
        }else if (event.key === "4"){
            digitButton[3].click();
        }else if (event.key === "5"){
            digitButton[4].click();
        }else if (event.key === "6"){
            digitButton[5].click();
        }else if (event.key === "7"){
            digitButton[6].click();
        }else if (event.key === "8"){
            digitButton[7].click();
        }else if (event.key === "9"){
            digitButton[8].click();
        }
    });

    //Add event listeners to buttons

    decimalButton.addEventListener("click", function(){ addDecimal() });
    negativeButton.addEventListener("click", function(){ makeNumberNegative() });
    addButton.addEventListener("click", function(){ operatorPressed("+") });
    subtractButton.addEventListener("click", function(){ operatorPressed("-") });
    multiplyButton.addEventListener("click", function(){ operatorPressed("*") });
    divideButton.addEventListener("click", function(){ operatorPressed("/") });
    backspaceButton.addEventListener("click", function(){ backspace() });

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

        if (operator !== ""){
            result = calculate(number1, number2, operator);
        }
            else if (operator === "/"){
                if (number2 === 0){
                    // dont let user divide by 0
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
            } else if (operator === ""){
                result = number1;
            }
        // reset, but set result to currentNumber to continue calculating
        resultText.textContent = result;
        number1 = "";
        number2 = "";
        currentNumber = result.toString();
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

    function operatorPressed(symbol){
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

    function makeNumberNegative(){
        if (currentNumber === ""){
            alert("You have nothing to make negative!");
            return;
        }
        currentNumber = currentNumber * -1;
        resultText.textContent = currentNumber;
    }

    function backspace(){
        if (currentNumber === ""){
            alert("You have nothing to backspace!");
            return;
        }
        currentNumber = currentNumber.slice(0, -1);
        resultText.textContent = currentNumber;
    }

    function addDecimal(){
        if (currentNumber.includes(".")){
            alert("You already have a decimal point!");
            return;
        }
        currentNumber += ".";
        resultText.textContent = currentNumber;
    }
}

function calculate(number1, number2, operator){
    let result = 0
    switch (operator){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    result = Math.round(result * 100) / 100;
    return result;
}

operate();