fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(response => {
        console.log(response) //obtiene toda la respuesta y parciarla
        return response.json()//para solicitar mas cosas se debe retornar
        
    })
    .then(data => console.log(data))//se obtiene los datos porque se anidad con la primera
    .catch (err => console.log(err))
    
/*fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(response => response.json()
    .then(data => console.log(data));*/

/*
//*asyng await
//async antes de la palabra reservada function   
async function getCharacters () {
    const response = await (await fetch('https://rickandmortyapi.com/api/character/?page=19')).json()
    //const data = await response.json()   lo correcto seria separarlo
    console.log(response)
}*/

//!arrow funtion 
//guarda una funcion anonima async es por funcion anoma que se iguala en una constante

const getCharacters = async () => {
    try{//lo que quiero que la promesa se cumple
        const response = await (await fetch('https://rickandmortyapi.com/api/character/?page=19')).json()
        console.log(response)
    }catch(error){//el error si no se cumple try
        console.log(err)
    }
}

getCharacters()