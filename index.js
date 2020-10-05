//! Array METHODS
//acceder al valor de un array en el console indicando la posion que se requiere
//* Array conjunto de datos, si posicion empieza de 0 a n ,  si declaramos una array como const podemos modificar su elemento unicamente con su id o push, pero no reemplazarlo para eso tendria que ser var o let
    //dif entre let var const
        //let y var (sobreescribe) permite hacer cambio de tipo de dato
        //const no lo permite 
        let array0 = ['string',1,{}, [1,2,3]]
        array0[0]= "hola"
        console.log(array0[3])
        
        const array1 = ['string',1,{}, [1,2,3]]
        array1[0]= "hola"
        console.log(array1[0])
        
        //* concat  concatena el array al que le estamos aplicando con el nuevo array
            // no modifica el array
        let array = ["hola",24]
        let array2 = ["adios"]
        
        let newAr = array.concat(array2)
        console.log(array)
        console.log(newArray)
        
        //* every : verifica si todos los item pasan por una prueba (funcion) => true | false
            //cumplan con una misma condicion    sera true  sino sera false
            //ejecuta la funcion por cada item
            //funciones anonimas que no recibe ningun nombre
            //every es como un for
        let array3 = [17,24,15,30,18,20]
        
        let is = array.every((age)=>age >= 18)
        console.log(is)
        
        //* fill => llena los items especificados con un valor estatico MODIFICA el array
            //solo cambia el valor en la posicion que se da
            // primer parametro es valor
            // segundo parametro       donde va a empezar
            // tercerparametro      donde terminara
        array3.fill('hi',1,4)
        console.log(array3)
        
        //* find()
            //regresa el primero que coincide con esa prueba
        let numeroMayor =array3.find((age) => age >= 18)
        console.log(numeroMayor)
        
        //*findIndex()  devuelve el indide del primer elemento que coincida con esa prueba
            //si no encuentra ninguno da un -1
        let position = array3.findIndex((age)=> age >= 18)
        console.log(position)
        
        //*findOf() elemento especificado a buscar
        //si lo encuentra regresa la posicion, sino regresa -1
        let item = array3.indexOf(20,3)
        console.log(item)
        
        //*lastIdexOf()
        item = array3.lastIndexOf('hi')
        console.log(item)
        
        //* join() -> convierte un array en un string
        array = ['hola','soy','Dana']
        
        let arrayToString = array.join(' ')
        console.log(arrayToString)
        
        //*reverse
        //si modifica el array original
        let numbersArr = [1,2,3,4,5]
        console.log(numbersArr.reverse())
        
        //*push
        //agrega un nuveo elemento al final
        numbersArr.push(4)
        console.log(numbersArr)        