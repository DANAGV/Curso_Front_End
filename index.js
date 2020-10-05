//* sintaxis : array.forEach(callback(nameItem,index)){}
let numbersArray = [1,2,3,4,5]
numbersArray.forEach((number,index)=> {
    console.log(`${number * number} y mi index es ${index}`)
})

let numbersArrayMap = numbersArray.map((number)
=> number * number)
console.log(numbersArray)

let numbersArrayFilter = numbersArrayMap.filter((number)=>number>=10)
console.log(numbersArrayFilter)

//reduce recibe funcion callback y valor inicial
let numbersArrayReduce = numbersArray.reduce((acum,number,index)=> {
    acum = acum + number
    return acum} , 0)
    console.log(numbersArrayReduce)

    //funcion simplificada
    let numbersArrayReduce = numbersArray.reduce((acum,number) => acum +=number,0)
    console.log(numbersArrayReduce)

//+++++++++++++++++++++++++++++++++++++++
//OBTENER EL PROMEDIO PROMEDIO
let promedio = numbersArrayMap.reduce((acum,number,index,arr)
=> acum+=number/arr.length,0)
console.log(promedio)
//segunda opcion
let numbersArrayReduce =( numbersArrayMap.reduce((acum, number) => acum += number ,0))/ numbersArrayMap.length