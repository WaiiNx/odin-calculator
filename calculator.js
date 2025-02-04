function operate(){
    const mainBody = document.querySelector("body");

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("calculator");
    mainBody.appendChild(mainDiv);

    const displayDiv = document.createElement("div");
    displayDiv.classList.add("display");
    mainDiv.appendChild(displayDiv);

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input");
    mainDiv.appendChild(inputDiv);

    const operatorDiv = document.createElement("div");
    operatorDiv.classList.add("operators");
    inputDiv.appendChild(operatorDiv);

    const digitDiv = document.createElement("div");
    digitDiv.classList.add("digits");
    inputDiv.appendChild(digitDiv);

    const specialDiv = document.createElement("div");
    specialDiv.classList.add("specials");
    inputDiv.appendChild(specialDiv);

    //Array of digit texts
    const digitTexts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const digitButtons = [];

    let number1 = "";
    let number2 = "";
    let currentNumber = "";
    let operator = "";

    //Create Display
    const resultText = document.createElement("p");
    displayDiv.appendChild(resultText);

    //Create special buttons
    const decimalButton = document.createElement("button");
    specialDiv.appendChild(decimalButton);

    decimalButton.textContent = ".";

    const backspaceButton = document.createElement("button");
    specialDiv.appendChild(backspaceButton);

    backspaceButton.textContent = "<-";

    const negativeButton = document.createElement("button");
    specialDiv.appendChild(negativeButton);

    negativeButton.textContent = "(-)";

    const equalsButton = document.createElement("button");
    specialDiv.appendChild(equalsButton);

    equalsButton.textContent = "=";

    const clearButton = document.createElement("button");
    specialDiv.appendChild(clearButton);

    clearButton.textContent = "Clear";

    //Create buttons for digits

    for (let i = 0; i < digitTexts.length; i++){
        const digitButton = document.createElement("button");
        digitDiv.appendChild(digitButton);
        digitButton.textContent = digitTexts[i];
        digitButtons.push(digitButton);
        // Add event listener to each digit button
        digitButton.addEventListener("click", function(){
            currentNumber += digitTexts[i];
            resultText.textContent = currentNumber;
        });
    }

    //Create operator buttons
    const addButton = document.createElement("button");
    operatorDiv.appendChild(addButton);

    addButton.textContent = "+";

    const subtractButton = document.createElement("button");
    operatorDiv.appendChild(subtractButton);

    subtractButton.textContent = "-";

    const multiplyButton = document.createElement("button");
    operatorDiv.appendChild(multiplyButton);

    multiplyButton.textContent = "*";

    const divideButton = document.createElement("button");
    operatorDiv.appendChild(divideButton);

    divideButton.textContent = "/";

    //Event Listener for keyboard support

    document.addEventListener("keydown", function(event){
        if (event.key >= "0" && event.key <= "9") {  
            let index = parseInt(event.key) - 1;
            if (index === -1) index = 9;
            digitButtons[index].click();
        } else if (event.key === "Enter") {
            equalsButton.click();
        } else if (event.key === "+") {
            addButton.click();
        } else if (event.key === "-") {
            subtractButton.click();
        } else if (event.key === "*") {
            multiplyButton.click();
        } else if (event.key === "/") {
            divideButton.click();
        } else if (event.key === "Backspace") {
            backspaceButton.click();
        } else if (event.key === "Escape") {
            clearButton.click();
        } else if (event.key === ".") {
            decimalButton.click();
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