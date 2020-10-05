
//*match contiene el resultado de una busqueda
//nos regresa un array[palabra, donde empieza, texto]
findCharacter = phrase.match(/Hola/)
console.log('match',findCharacter)

//*slice  extrae| corta una parte de la cadena y devuelve la parte extraida en unda nueva cadena
//recibe dos parametros 
    //posicion inicial y posicion final
    //regresa cadena con los caracteres cortados
                //(donde inicia a corta, hasta donde cotara)
                    //si se pone negativo empieza de derecha a izquierda
newPhrase = phrase.slice(7,12)
console.log(newPhrase)

//* substring   Regresa los caracteres que se encuentran en ese rango, regresa una nueva cadena
        //posiones y rango (posicion inicial)
        //no se pueden poner negativos, solo cuenta de izq a derecha
newPhrase = phrase.substring(0,4)
console.log(newPhrase)

//*substr  recibe posicion inicial y longitud
//
newPhrase = phrase.substr(0,6)
console.log(newPhrase)
console.log(newPhrase.length)

//* startsWith Nos dice si el texto empieza con este parametro. Retorna true|false
    //le importan las mayusculas o minisculas
let startWith = phrase.startsWith('h')
console.log(startWith)

//* replace Reemplazar el primer parametro por el segundo, SOLO reemplza la primer palabra que encuentra. Regresa una nueva cadena
    //Remplazar una palabra por otra, solo la primera que encuentra
        //i bandera si importar que no este en mayuscula o minuscula
        //g bandera global para reemplazar todo
        //se ocupa una expresion regular y no un string
newPhrase = phrase.replace(/hola/i, 'Hi')
console.log(newPhrase)
newPhrase = phrase.replace(/o/g, 'i')
console.log(newPhrase)

//*trim Quita los espacios en blanco al inicio y al final
console.log('con', phrase.length)
newPhrase = phrase.trim()
console.log(newPhrase)
console.log('trim', newPhrase.length)

//*charAt  Nos retorna el caracter que se encuentra en la posicion que le pasamos
    //si no encuentra nada, regresa una cadena vacia
let positionCharacter = phrase.charAt(6)
console.log(positionCharacter)

//*si se ocupa [], se pone el numero del caracter 
    //si no encuentra nada en la posicion regresa indefinido
positionCharacter = phrase[8]
console.log(positionCharacter)

//* charCodeAt devuelve el unicod (código ASCII) del caracter
positionCharacter = phrase.charCodeAt(6)
console.log(positionCharacter)

    //da la letra cuando se ingresa el codigo ASCII
let character = String.fromCharCode(97)
console.log(character)

//* split   Separa un string en un array,
    // () convierte todo el string que uno solo array
    //da los componentes de la oracion
    //el parametro que se da sera por como se va a separar
    //'' separa letra por letra
    //' ' los separa por espacios
let newArray = phrase.split('')
console.log(newArray)

//* includes   Busca si eciste una palabra, retorna true|false
    //solo acepta caracteres
    //segundo parametro indica desde donde empezara a contar
    //no acepta expresiones regulares /  /
let hasCharacter = phrase.includes('a')
console.log(hasCharacter)

//*Termina con un caracter o una cadena especifica y retorna true|false
hasCharacter = phrase.endsWith('todos')
console.log(hasCharacter)

//*repite la frase el numero de veces que se indique
console.log(phrase.repeat(20))

//* convertir un numero a una cadena
        //typeof   nos dice que tipo de variable es
        //toString    a lo que se va a convertir
        let numero = 2
        console.log(typeof(numero) , numero+2) //cuando es numero se realiza la operacion
        numero = numero.toString() 
        
        console.log(typeof(numero) , numero+2)  //cuando es string se agrega el numero a un lado
        
        
        //*concatenar (une dos o mas string)
            //las comillas da igual   puede ser ' ' o " "
        let phrase1= "hola"
        let name = "Dana"
        let age = 24
        
        let greetPerson = phrase1+' '+name
        console.log(phrase1 + ' soy ' + ' y tengo '+ age+ ' años')
        
        //* template literal    interpolacion
            //lo que mas se ocupa
            //evita poner comillas y espacios
        console.log(`${phrase1} soy ${name} y tengo ${age} años`)