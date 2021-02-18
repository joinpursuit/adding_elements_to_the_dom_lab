//collect number inputs and store into variable 
        //array
let sum = 0
let min = Infinity
let max = -Infinity
let counter = 0
function onSubmit (){
    counter++
    // 84 gets added to the ul" 
        // get users input from the DOM
        const input = document.querySelector("#number-statistics-number-input")
        const value = input.value
        //convert users input to a number
        const num = Number(value) 
        //create a new li and set its te4xt content to the users input 
        const li = document.createElement('li')
        li.textContent = num
        // het the ul from the DOM
        const list = document.querySelector('#number-statistics-numbers')
        //append our new li to the ul 
        list.appendChild(li)
        let avg = 0 
        sum += num 
        avg = Math.floor(sum/counter)

        if(num < min){
            min = num 
        }

        if(num > max){
            max = num
        }

        const pAvg = document.querySelector("#number-statistics-average")
        pAvg.textContent = `Average of all numbers is: ${avg}`
        const pMax = document.querySelector("#number-statistics-maximum")
        pMax.textContent = `Maximum number is ${max}`
        const pMin = document.querySelector("#number-statistics-minimum")
        pMin.textContent = `Minimum number is ${min}`
        
}