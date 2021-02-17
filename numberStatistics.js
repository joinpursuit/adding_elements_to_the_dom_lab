function onSubmit() {
    //86 gets added to the ul:
        const num = Number(document.querySelector('#number-statistics-number-input').value)
        // create a new li and set its text content to the users input
        const li = document.createElement('li')
        li.textContent = num
        // get the ul from the DOM
        const list = document.querySelector('#numbers-statistics-numbers')
        // append users input to the ul
        list.appendChild(li)

    //update average
    //update min
    //update max
        console.log('I have been clicked')
}

//got user input from the DOM
//transformed that input (converted it to a number)
//created a new DOM element and set it's text content
//grabbed a parent element from the DOM
//we append our new DOM element to parent