function numberStatistics() {
// The html page contains a number input, a submit button, an empty list, and 3 paragraphs.
// The number will be added to the list
    // to do this, we first need to get the number from the text input field.
    // we do this with getElementById, and save it into a variable 'input'
    // we then append the number to the list with appendChild for everytime they click the button
// We now have to add statistics of all numbers entered and post into <p> fields
    // we first have to get each <p> field and store it into a variable with getElementById
    // we can now access the <p> fields
    // The two easiest things now are adding the minumum and maximum values
    // we can TRY to do this with if statements
    // we can compare the textContent in order to get 



    let input = Number(document.getElementById("number-statistics-number-input").value)    // the difference between Number() constructor and parseInt() is that Number() converts to floating numbers(decimals) and parseInt removes everything past the decimal (it always rounds the number down)
    let ul = document.getElementById("number-statistics-numbers")   //got access to an element in DOM

    let li = document.createElement('li')   //created a node in DOM
    li.textContent = input
    ul.appendChild(li)

    
    let average = document.getElementById("number-statistics-average")
    let max = document.getElementById("number-statistics-maximum")
    let min = document.getElementById("number-statistics-minimum")
    
    let allInputs = document.querySelectorAll("#number-statistics-numbers li")


    let maxNum = -Infinity
    let minNum = Infinity
    let sum = 0
    for (let i = 0; i < allInputs.length; i++) {
        let currentNum = Number(allInputs[i].textContent)
        if (maxNum < currentNum) {
            maxNum = currentNum
        }
        if (minNum > currentNum) {
            minNum = currentNum
        }
        sum = sum + currentNum
    }
    average.textContent = "Average value: " + (sum/Number(allInputs.length))
    max.textContent = `Maximum value: ${maxNum}`
    min.textContent = `Minimum value: ${minNum}`

}

// you can make a global array to store all items
// you can also make an array containing all of the children of ul
// you can also make a nodeList (array-like object) by using querySelectorAll and storing it into a variable

// there are no numbers in HTML, there is only strings. When you get an item from HTML that looks like a number, you have to
// convert it into a number in order to use it as a number. Otherwise you can't perform mathematical operations on it.

