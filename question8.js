document.addEventListener('DOMContentLoaded', ()=>{
    let button = document.querySelector('#magicButton')
    button.addEventListener('click', ()=>{
        document.body.removeChild(button)  
    })
})