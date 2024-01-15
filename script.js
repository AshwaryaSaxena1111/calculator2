const input = document.getElementById('inputtext') ;
const buttons = document.querySelectorAll('button');

function calculate(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}


function operation(buttonValue) {
    if (buttonValue === 'Clear All') {
        input.value = '';
    }  else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
//  input.value =  input.value + buttonValue
 
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});

