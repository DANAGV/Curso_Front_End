/* SELECCIONAR FORMA SENCILLA
    documents.querySelector("#id")
    documents.querySelector(".class")
    documents.querySelector("tag")
*/

/* 
    1.- escuchar el evento click
    2.- concatenar
    3.- convertir a entero cuando se presione una operacion
    4.- escuchar boton C
*/

var result = document.querySelector('#result')
var currentNumber = ''
var previousNumber = ''
var operationResult = undefined

/*funcionalidad*/

const updateDisplay = () => {
    result.value = currentNumber
}

const addNumber = (number) =>{
    currentNumber = currentNumber.toString() + number.toString()
    // toDo : mandar a llamar funcion que actualiza el display
    number.toString()
    updateDisplay()
}

const Delete = () => {
    currentNumber = ''
    previousNumber = ''
    operationResult = undefined
}

const doOperation = () =>{
    var calcResult
    const previous = parseFloat(previousNumber)
    const current = parseFloat(currentNumber)
    if (isNaN(previous) || isNaN(current)) return
    switch(operar) {
        case '+':
            calcResult = previous + current
            break
        case '-':
            calcResult = previous - current
            break;
        case 'x':
            calcResult = previous * current
            break;
        case '/':
            calcResult = previous / current
            break;
        default : return
    }
        currentNumber= calcResult  
        operationResult = undefined
        previousNumber = ''  
}

const addOperation = (operator) =>{
    if (currentNumber === '') return
    doOperation()
    operationResult = operator
    previousNumber = currentNumber
    currentNumber = ''
}

//se accede al evento
const buttonNumber = document.getElementsByName('number')
const buttonOperator = document.getElementsByName('operator')
const buttonEqual = document.getElementsByName('equal')[0]
const buttonDelete = document.getElementsByName('delete')[0]

/*Agregando eventos a elementos del DOM */

buttonNumber.forEach(button => {
    button.addEventListener('click', () =>{
        addNumber(button.value)
    })
})


buttonOperator.forEach(button =>{
    button.addEventListener('click', () => {
        addOperation(button.value)
    })
})

buttonEqual.addEventListener('click', () =>{
    doOperation() 
    updateDisplay()
    Delete()
})

buttonDelete.addEventListener('click', () =>{
    Delete()
    updateDisplay()
})