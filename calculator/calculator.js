const calculator = {
    displayNumber : 0,
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}

function updateDisplay(){
    document.querySelector('#displayNumber').innerText= calculator.displayNumber;
}

function clearDisplay(){
    calculator.displayNumber = 0,
    calculator.operator = null,
    calculator.firstNumber = null,
    calculator.waitingForSecondNumber = false ;
}

function inputDigit(digit){
    if(calculator.displayNumber == '0'){
        calculator.displayNumber = digit
    } else{
        calculator.displayNumber += digit
    }
}

function reverseNumber(){
    if(calculator.displayNumber== '0'){
        return
    } calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.firstNumber = calculator.displayNumber;
        calculator.waitingForSecondNumber = true;
        calculator.displayNumber = 0

        console.log(calculator)
        return
    } else {
        alert('operator sudah ditetapkan!')
    }
}

function performCalculation(){
    if(calculator.operator == null || calculator.firstNumber ==  null){
        alert('anda belum mentapkan opereator')
    }
    let result = 0;
    if(calculator.operator == '+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
    calculator.displayNumber = result;
}

const buttons = document.querySelectorAll('.button')
for(let button of buttons){
    button.addEventListener('click', function (event){
        const target = event.target;
        if(target.classList.contains('clear')){
            clearDisplay();
            updateDisplay();
            return;
        }
        if(target.classList.contains('negative')){
            reverseNumber();
            updateDisplay();
            return
        }
        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return
        }
        if(target.classList.contains('operator')){
            handleOperator(target.innerText)
            return
        }

        inputDigit(target.innerText);
        updateDisplay();
    })
}

// let firstName = prompt('Nama depanmu?');
// const lastName = prompt('Nama belakangmu?');
// const language = prompt('Bisa berbahasa apa?');

// const user = {
//     first: firstName,
//     last: lastName
// }

// if(language == 'inggris'){
//     alert('Good Morning ' + user.first + ' ' + user.last)
// } else if(language == 'japan'){
//     alert('ohayo gozimas ' + user.first + ' ' + user.last)
// } else{
//     alert('selamat datang ' + user.first + ' ' + user.last)
// }