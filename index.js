//!OBJETOS
//DEFINICION: tipo de dato y es para almacenar informacion
    //cada propiedad debe tener su valor
    //tambien es un json 
//no se puede aplicar map(), reduce()
//*SINTAXIS
/*
let | var | const = {
    key: value -> cualquier tipo de dato
}
*/

let person = {
    nombre: 'Dana',
    apellido: 'GarVi',
    edad: 24,
    genero: 'femenino',
    hobbies: ['perritos', 'conciertos', 'futbol', 'música']
}
person.nombre = 'Itzel'
//cambiar el nombre
console.log(`Mi nombre es ${person.nombre} y me gustan los ${person.hobbies[1]}`)

//* Spread Operator -> ...
    //agregar mas elementos, copiando lo que ya se tenia
person = {... person, email: 'garvi.dana@gmail.com'}
console.log(person)

//!EJERCICIO
    //*Representar un objeto

let vaso = {
    color: 'morado',
    tapa: 'gris',
    correa: 'negra',
    tamaño: '15 cm',
    empresa: 'IBM',
    tipo:'plastico'
}
console.log(vaso)

//!EJERCICIO 
const students = [
    {
      fistName: 'Naomi',
      lastName: 'López',
      age: 24,
      gender: 'female',
      grades: [9, 8, 7, 9, 10]
    }, {
      fistName: 'Dana',
      lastName: 'Garcia',
      age: 24,
      gender: 'female',
      grades: [10, 8, 7, 9, 8]
    }, {
      fistName: 'Hill',
      lastName: 'Gil',
      age: 23,
      gender: 'female',
      grades: [9, 9, 8, 7, 6]
    },
    {
      fistName: 'Edwin',
      lastName: 'Díaz',
      age: 24,
      gender: 'male',
      grades: [8, 10, 9, 8, 6]
    }
  ]
console.log(students)
const getAverage = (grades) => grades.reduce((acum, number, index, arr) => acum += number / arr.length, 0)
​
const getFullName = 
  students.forEach(function(fistName,lastName,array) {console.log(fistName,lastName,`tiene un promedio de ${getAverage(student.grades)}`);
})


/*frutas.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})
*/    

//*RECORRER OBJETOS
//for..in
    //(como se llamaran los elementos, objeto que se va a recorrer)