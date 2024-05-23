AOS.init();

let input = document.querySelector('.input')
let button= document.querySelector('.button')
let error = document.querySelector('.error')

button.addEventListener('click' , ()=>{
    if(input.value == ''){
        alert('Please write your email')
    }
})