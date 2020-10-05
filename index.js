//* some()  verifica si los item pasa por una prueba
//regresa true cuando lo uno lo cumple
//sino false
array = [12,2,52,1,2]
position=array.some((age)=>age >= 18)

//* shift()   elimina el primer elemento, pero cambia el array original y devuelve el elemento eliminado
let deleteItem= array.shift()
console.log(`Eliminando el primer elemento que es ${deleteItem} y ahora queda ${array}`)

//*unshith  agrega elemento al inicio y devuelve una longitud
let putItem= array.unshift(33)
console.log(`agregando el primer elemento y ahora mi tamaño es ${putItem} y ahora queda ${array}`)

//*pop elimina elemento
deleteItem = array.pop()
console.log(deleteItem)

//*push agrega elemento
array.push(4)
console.log(array)

//*slice()
//parametros de donde empieza a donde termina
newArray = array.slice(1,4)
console.log(newArray)

//*splice()
//elimana o agrega elementos de un array
    //para elimanar parametro =! de 0
    //para agregar se pone un tercer elemento
//parametos (posicion a borrar,item a eliminar)

array.splice(2,1)
console.log(array)

//elimina posicion 2 y agrega hola
array.splice(2,1,'hola')
console.log(array)

//*icludes()
//si existe en el array true ,si no existe false
let hasHola = array.includes('Dana')
console.log(hasHola)

//*sort() ordena los items
//ordena el array alfabeticamente
let alphabetArr = ['a','h','b','f','c']
alphabetArr.sort()
console.log(alphabetArr)

//para hacerlo numericamente se agrega una funcion
let array4=[20,3,24,7,14,1,5]
array4.sort((a,b)=>a-b)
console.log(array4)