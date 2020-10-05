//*ejercicio
/*Dada una matriz de números enteros, encuentre el par de elementos adyacentes que tenga el producto más grande y devuelva ese producto.
Ejemplo
Para inputArray = [3, 6, -2, -5, 7, 3], la salida debe ser
adyacenteElementosProducto (inputArray) = 21.
7 y 3 producen el producto más grande.*/

let array5 = [9, 5, 10, 2, 24, -1, -48]
let resul = array5.map((number,index)=> {
    //condicion?  lo que hara SI se cumple  :lo que se hara si NO se cumple (operador ternario)
    return (array5[index+1]!=undefined)? number * array5[index + 1] :0  
    })
resul.sort((a,b)=>b-a)
console.log(resul[0])