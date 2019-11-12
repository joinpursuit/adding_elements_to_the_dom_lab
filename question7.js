document.addEventListener('DOMContentLoaded', ()=>{
  
    let button = document.querySelector('#button')
    button.addEventListener('click', ()=>{
        let listItems = document.createElement('ul')
        listItems.innerText = 'list numbers'
        const inputNumbers = ()=>{
            document.body.appendChild(listItems)
            let number = parseInt(document.querySelector('#number').value)
            if(!isNaN(number)){
                let newItem = document.createElement('li')
                newItem.innerText = number
                listItems.appendChild(newItem)
            }
            let everyNumber = document.querySelectorAll('li')
                if(everyNumber.length>0){
                    let average = 0
                    let max = -Infinity
                    let min = Infinity
                }
        }

        let firstInput = document.createElement('p1')
        firstInput.innerText = listItems.value
        let secondInput = document.createElement('p2')
        secondInput.innerText = listItems.value
        let thirdInput = document.createElement('p3')
        thirdInput.innerText = listItems.value
        let averageInput = document.createElement('p')
        let maxInput = document.createElement('p')
        let minInput = document.createElement('p')
    })
})
