let sum = 0
let min = Infinity
let max = -Infinity

const getAverage = () =>{
    // Myra's Notes:
    
    // We've talked about two main ways to search for an HTML element in the DOM:
    //     1. document.getElementById("number-statistics-number-input")
    //     2. document.querySelector('#some-id')

    // How to create a new DOM element:
    //     document.createElement('div')
    //     This function creates a new DOM node, BUT!!!!!
    //     it's floating all alone in the ether

    // YOUR BROWSER ONLY RENDERS THINGS THAT ARE CONNECTION TO THE DOCUMENT OBJECT
    // To connect a floating DOM node to an existing DOM node, use:
    //     existingDOMNode.appendChild(floatingDOMNode)
    //     e.g. numList.appendChild(listItem)

    // psuedo-code:

    // user inputs number, store user input in a variable
    let userNum = document.getElementById("number-statistics-number-input")
    let numValue = Number(userNum.value)
    
   //unordered list with each number input

   let numList = document.createElement("li")

   numList.textContent = numValue

   const ul = document.querySelector('#number-statistics-numbers')
    ul.appendChild(numList)

    // Grab the ul from the DOM (so that we can add a new list item to it)

    let numArr = document.querySelectorAll('#number-statistics-numbers li')

    let i = 0

    sum = sum + numValue

    while(i < numArr.length){
        i++
    }

    let average = document.getElementById("number-statistics-average")
    average.textContent = "Average of all the numbers: " + (sum/i)


    let maxNum = document.getElementById("number-statistics-maximum")

    let minNum = document.getElementById("number-statistics-minimum")

    if(numValue > max){
        max = numValue
    }
    maxNum.textContent = "Maximum number: " + max

    if(numValue < min ){
        min = numValue
    }
    minNum.textContent = "Minimum number: " + min

    console.log(numArr)

}

