const helpers = require('./operations')
const operations = require('./operations')
console.log ('Hola mundo')

/*function sum (a, b){
    return a + b     SE PASA A HELPERS
}*/

const totalSum = operations.sum(2, 2)
const totalRes = operations.resta(4,2)

console.log('TOTAL SUM: ', totalSum)
console.log('TOTAL RES: ', totalRes)
