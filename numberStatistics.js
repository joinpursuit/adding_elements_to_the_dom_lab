let sum = 0
let max = -Infinity
let min = Infinity

function onSubmit(){
    //First, retrieve the inputted number
    let input = document.getElementById('number-statistics-number-input')
    let value = Number(input.value)

    //Make a list to display all inputted numbers
    let list = document.createElement('li')
    list.textContent = value
    
    //Display the list in an unordered fashion
    const ul = document.querySelector('#number-statistics-numbers')
    ul.appendChild(list)

    //Grab all the values from the current run-through of the list, put them into an array to track
    //how many values have been inputted
    let array = document.querySelectorAll('#number-statistics-numbers li')
    let i = 0
    sum = sum + value
    while(i < array.length){
        i++
    }

    //(i) tracks all the numbers, so divide the sum of all numbers by how many numbers exist
    let average = document.getElementById('number-statistics-average')
    average.textContent = "average: " + (sum/i)

    //max is sent to -Infinity, which changes if the inputted value is larger than it
    let maximum = document.getElementById('number-statistics-maximum')
    if(value > max){
        max = value
    }
    maximum.textContent = "maximum: " + max

    //min is sent to Infinity, which changes if the inputted value is smaller than it
    let minimum = document.getElementById('number-statistics-minimum')
    if(value < min){
        min = value
    }
    minimum.textContent = "minimum: " + min
    console.log(array)

    //average, maximum, and minimum will all display the same number on the first input.
    //That will change with multiple numbers being inputted.
}