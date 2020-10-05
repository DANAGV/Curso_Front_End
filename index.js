/*EJERCICIO
input: aabbbc
output: c

input: aabbbbccc
output: _

input: a b cc a d
output: b
*/
var cadena = 'aabbbc'
console.log(cadena)
for(let i = 0; i<cadena.length; i++){
    if(cadena.indexOf(cadena[i])==cadena.lastIndexOf(cadena[i])){
        console.log(cadena[i])
        break
    }
}