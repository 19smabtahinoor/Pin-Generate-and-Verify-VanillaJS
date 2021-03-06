//generate pin
function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin
}

//set keypad value
document.getElementById('key-pad').addEventListener('click',(event) => {
    const number = event.target.innerText
    const calc = document.getElementById('typed-numbers')

    if(isNaN(number)){
        if (number === 'C') {
            calc.value =' '
        }
    }
    else{
        const previoudCalc = calc.value
        const newCalc = previoudCalc + number
        calc.value = newCalc  
    }
})

//submit button and checking pin 
function verifyPin(){
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value

    //fail notify 
    const failError = document.getElementById('notify-fail')
    const successNotify = document.getElementById('notify-success')
    if (pin == typedNumbers) {
        successNotify.style.display = 'block'
        failError.style.display = 'none'
        
    } else {
        failError.style.display = 'block'
        successNotify.style.display = 'none'
    } 
    typedNumbers.value = ' '
}