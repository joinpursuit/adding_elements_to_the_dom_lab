document.addEventListener('DOMContentLoaded', ()=>{
  
    let button = document.querySelector('#button')
    button.addEventListener('click', ()=>{
        let listItems = document.querySelector('#number')
        let firstInput = document.createElement('P')
        firstInput.innerText = listItems.value
        let secondInput = document.createElement('P')
        secondInput.innerText = listItems.value
        let thirdInput = document.createElement('P')
        thirdInput.innerText = listItems.value

    })
})