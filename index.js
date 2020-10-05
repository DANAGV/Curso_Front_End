//!FUNCIONES
//**como se declaran las funciones */
/*function("hola")
function nameFuncion(atributos){
    //*codigo de la funcion
}

//*arrow funtions
    //menos codigo
    //la referencia THIS
const nameFuncion = () =>{
    //*todo el codigo de esta funcion
}
*/

//*FUNCION COOLBACK
function sayHello(greet = () =>{
    console.log('Hello')
}){
    let hello = true
    hello ? greet() : null
}
sayHello() //llamar la funcion para que se muestre

//operaciones
function suma(num,num2){
    return num + num2
}
console.log(suma(2,2))

//*arrow funtions
//cuando no se pone parentesis no se ejecuta la funcion sino hace referencia a ella
//sin parentesis muestra toda la funcion
//con parentesis muestra el resultadp de la operacion
const sum1 = (num,num2) => num + num2
console.log(sum1(3,3))

const printValue = value => console.log(value)
printValue('Hola a todos')

//si es mas de una instruccion son necesario las llaves
const printValue2 = value => {
    value = value.toUpperCase()
    console.log(value)
}
printValue2('Hola a Todos')