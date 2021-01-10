var fs = require('fs') 
const { callbackify } = require('util')
fs.appendFile('inicio.txt', 'hola', function (err) { 
    if (err) { 
    // append failed 
    } else { 
    // done 
    } 
})
/*//!crear un archivo
const fs = require('fs')

const create = (url,data) => {
    fs.writeFile(url,data, 'utf8', err => {if (err) return console.log ('no se creo el archivo')
console.log(' se creo el archivo')
})

//const read = (url) => */

//!leer archivo
var fs = require('fs');

fs.readFile('inicio.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

module.exports = {
    create,
    readFile
}

//*asincriono
//no espera a que los demas terminen
//*sincrono
//espera a que todos los procesos terminen
