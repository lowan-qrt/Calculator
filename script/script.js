// Result screen
const screen = document.getElementById('screen');


// Number buttons
const buttonZero = document.getElementById('zero');
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');
const buttonSix = document.getElementById('six');
const buttonSeven = document.getElementById('seven');
const buttonEight = document.getElementById('eight');
const buttonNine = document.getElementById('nine');


// Operator buttons
const allClear = document.getElementById('allClear');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const substraction = document.getElementById('substraction');
const comma = document.getElementById('comma');
const equals = document.getElementById('equals');
const addition = document.getElementById('addition');


// Others
let x = 0;  // result
let commaCondition = true;
let substractionCondition = true;


// Action events
buttonZero.addEventListener('click', function() {
    console.log('0');
    if (screen.textContent === '0') {
        screen.textContent = 0;
    } else {
        screen.textContent += '0';
    }
});

buttonOne.addEventListener('click', function() {
    console.log('1');
    if (screen.textContent === '0') {
        screen.textContent = '1';
    } else {
        screen.textContent += '1';
    }
});

buttonTwo.addEventListener('click', function() {
    console.log('2');
    if (screen.textContent === '0') {
        screen.textContent = '2';
    } else {
        screen.textContent += '2';
    }
});

buttonThree.addEventListener('click', function() {
    console.log('3');
    if (screen.textContent === '0') {
        screen.textContent = '3';
    } else {
        screen.textContent += '3';
    }
});

buttonFour.addEventListener('click', function() {
    console.log('4');
    if (screen.textContent === '0') {
        screen.textContent = '4';
    } else {
        screen.textContent += '4';
    }
});

buttonFive.addEventListener('click', function() {
    console.log('5');
    if (screen.textContent === '0') {
        screen.textContent = '5';
    } else {
        screen.textContent += '5';
    }
});

buttonSix.addEventListener('click', function() {
    console.log('6');
    if (screen.textContent === '0') {
        screen.textContent = '6';
    } else {
        screen.textContent += '6';
    }
});

buttonSeven.addEventListener('click', function() {
    console.log('7');
    if (screen.textContent === '0') {
        screen.textContent = '7';
    } else {
        screen.textContent += '7';
    }
});

buttonEight.addEventListener('click', function() {
    console.log('8');
    if (screen.textContent === '0') {
        screen.textContent = '8';
    } else {
        screen.textContent += '8';
    }
});

buttonNine.addEventListener('click', function() {
    console.log('9');
    if (screen.textContent === '0') {
        screen.textContent = '9';
    } else {
        screen.textContent += '9';
    }
});


// Operator function
comma.addEventListener('click', function() {
    console.log('Comma');
    if (commaCondition) {
        screen.textContent += ',';
        commaCondition = false;
    } else {
        console.log('Error: comma ever used.');
    }
});

division.addEventListener('click', function() {
    console.log('Division');
});

multiplication.addEventListener('click', function() {
    console.log('Multiplication');
});

substraction.addEventListener('click', function() {
    console.log('Substraction');
    if (substractionCondition) {
        screen.textContent += ' - ';
        substractionCondition = false;
    } else {
        console.log('Error: minus sign ever used.');
    }
});

addition.addEventListener('click', function() {
    console.log('Addition');
});

allClear.addEventListener('click', function() {
    console.log('All clear');
    x = 0;
    commaCondition = true;
    substractionCondition = true;
    screen.textContent = x;
});

equals.addEventListener('click', function() {
    console.log('EQUALS');
    screen.textContent = x;
    commaCondition = true;
    substractionCondition = true;
});