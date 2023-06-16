//important global variables etc.
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const keys = document.querySelectorAll(".keys");
let primary = null;
let secondary = null;
let operator = null;

function clear(){
    primary = null;
    secondary = null;
    operator = null;
    display.innerText = "";
}

keys.forEach((key) => key.addEventListener('click', function(e){
    let button = e.target.dataset.key;
    if (button<=9){ //all number buttons
        if(primary===null){
            primary = button.toString();
            display.innerText += button.toString(); 
        }
        else{ //primary is populated
            if (operator===null){
                primary += button.toString();
                display.innerText += button.toString(); 
            }
            else{ // primary and operator are now populated
                if(secondary===null){ //secondary is not yet populated 
                    secondary = button.toString();
                    display.innerText = button.toString(); 
                }
                else{
                    secondary += button.toString();
                    display.innerText += button.toString(); 
                }
            }
        }
    }
    else{
        switch(button){
            case "10": //divide
                if (operator===null){
                    operator = 'divide';
                }
                else{
                    operate(primary, operator, secondary);
                    operator = 'divide';
                }
                break;
            case "11": //multiply
                if (operator===null){
                    operator = 'multiply';
                }
                else{
                    operate(primary, operator, secondary);
                    operator = 'multiply';
                }
                break;
            case "12": //subtract
                if (operator===null){
                    operator = 'subtract';
                }
                else{
                    operate(primary, operator, secondary);
                    operator = 'subtract';
                }
                break;
            case "13": //clear
                clear();
                break;
            case "14": //equals
                if(primary!==null && secondary!==null && operator !==null){
                    operate(primary, operator, secondary);
                }
                break;
            case "15": //add
                if (operator===null){
                    operator = 'add';
                }
                else{
                    operate(primary, operator, secondary);
                    operator = 'add';
                }
                break;
        }
    }
}));

function update(answer){ //helper function to update display and primary at the same time after calling an operate
    clear();
    display.innerText = answer.toString();
    primary = answer.toString();
}

function operate(primary, operator, secondary){ //primary and secondary are numbers in string form
    const numberA = parseInt(primary);
    const numberB = parseInt(secondary);
    let answer;
    switch(operator){
        case 'divide':
            answer = numberA/numberB;
            update(answer);
            break;
        case 'multiply':
            answer = numberA*numberB; 
            update(answer);
            break;
        case 'subtract':
            answer = numberA-numberB;
            update(answer);
            break;
        case 'add':
            answer = numberA+numberB;
            update(answer);
            break;
    }
}