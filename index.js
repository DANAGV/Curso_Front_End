//!1- tipos de variable
/*
    var nameCase
    let
    const MAYUSCULA;
*/
/*console.log("Hola mundo")
//alcance de las variables
var name = 'Dana'
var name2 = 'Edwin'

function sayHello(){
    var name2 = 'Nao'
    console.log(name2) //->Nao
}
*/

//!2-METODOS DE STRING


var phrase= ' Hola a todos'
console.log(phrase)

//.toUpperCase() ---convierte una cadena a mayusculas

let phraseUpper = phrase.toUpperCase()
console.log(phraseUpper)

 //.topLowerCase() --convierte la cadena a minusculas
 let phraseLower = phraseUpper.toLocaleLowerCase()
 console.log(phraseLower)

//letras que tiene
let characterNumber = phraseLower.length
console.log(characterNumber)

//concatenar una string (cadena) con una var (variable)
let stringConcat = phraseLower.concat(' tengo ', characterNumber, ' caracteres' )
console.log(stringConcat)
 
//Busqueda en un string
//* indexOf('',[#]) -> La posicion donde se encuentra la primera incidencia y si no encuentra regresa -1 //*retorna donde encuentra la primer incidencia 
    //conteo inicia desde 0 
    //[4] desde ese caracter buscará
    //no acepta expresiones regulares /__/
let findCharacter = phraseLower.indexOf('a',4)
console.log(findCharacter)

//*.search /-no acepta el segundo parametro
findCharacter = phrase.search(/todo/)
console.log(findCharacter)

findCharacter = phrase.lastIndexOf('o')
console.log(findCharacter)