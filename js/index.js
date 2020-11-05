/*
 
 */

console.log(document.title) //accedeer al DOM con document
document.title='DOM'//cambiar el nombre del DOM, no se modifica el html

/*Metodos DOM 
    --acceder a los elementos (tag)
        1.- By ID
        2.- by class
        3.- By tagName
*/

var h1ByTagName = document.getElementsByTagName('h1')  //regresa una coleccion de H1
console.log(h1ByTagName)

h1ByTagName[0].innerHTML = 'Notas de Danahe Garcia'

var sectionById = document.getElementById('notes')
console.log(sectionById)

var h1ByClass = document.getElementsByClassName('h1')
console.log(h1ByClass)
/*
var button = document.getElementsByClassName('button')
button[0].addEventListener('click',()=>{
    console.log('hola')
})*/
var button = document.getElementsByClassName('button')
var isClick = false
const clickMe = () => {
    isClick = !isClick
    button[0].innerHTML = isClick ? 'Presioname' : 'Me presionaste'
}
button[0].addEventListener('click',clickMe)

