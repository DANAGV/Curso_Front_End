'use strict'

/*
    AJAX 
    Hacer peticiones
    Nos permite enviar y recibir datos a un servidor
    Objeto incorpado en el navegador XML

    1.- Crear un objeto de XMLHttpRequest
    2.- Checar o verificar el state o status (STATE -> 0 1 2 3 4-Esta lista ========== STATUS -> 200-Esta bien, 400-Error del lado del servidor)
    3.- Configurar la peticion
    4.- Enviar la peticion
*/

//creacion del dom
const printData = response =>{
    const wrapper = document.createElement('article')
    const name = document.createElement('h1')
    const image = document.createElement('img')
    const id = document.createElement('p')

    name.innerHTML = response.name //iner agragar contenido a la etiqueta
    id.innerHTML = response.id
    image.setAttribute('src',response.image) //( atributo,  nombre)
    
    wrapper.appendChild(name) //wrapper->guarda el article
    wrapper.appendChild(id)
    wrapper.appendChild(image) //append->agrega el hijo
    const container = document.getElementById('container') //accede al container
    container.appendChild(wrapper)
}

function loadDoc (){
    //*Crear un objeto de XMLHttpRequest
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function (){
        //*2 verificar state y status
        if (this.readyState === 4 && this.status === 200){
            //console.log(this.responseText) //regresa un string
            const response = JSON.parse(this.responseText).results
            console.log(response)
            //*Las funciones que queremos que se ejecuten
            // ToDo: printData()
            response.forEach(element => {
                printData(element)
            })
        }
    }
    //* 3 configurar la peticion
    //1-metodo (verbo), 2-url, 3-asincrono
    xhttp.open('GET','https://rickandmortyapi.com/api/character/',true)
    //*4
    xhttp.send()
}

loadDoc()