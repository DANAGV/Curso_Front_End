'use strict'

const form = document.querySelector('#form')
const boxDashed = document.querySelector('#use-container')

boxDashed.style.display = 'none'
form.addEventListener('submit', (event)=>{
    //const name = document.querySelector('#name')
    event.preventDefault()
    const name = document.querySelector('#name').value
    const lastName = document.querySelector('#lastName').value
    const age = document.querySelector('#age').value
    //console.log(name, lastName, age)

    boxDashed.style.display = 'block'
    const paragraphName = document.querySelector('pName spam')
    const paragraphLastName = document.querySelector('pLastName spam')
    const paragraphAge = document.querySelector('pAge spam')

    paragraphName.innerHTML = name
    paragraphLastName.innerHTML = lastName
    paragraphAge.innerHTML = age

})