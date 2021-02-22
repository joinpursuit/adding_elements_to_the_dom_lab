function onSubmit() {
    //get user input from DOM
    const num1 = Number(document.querySelector('#number-statistics').value)

    const li = document.createElement('li')
    
    li.textContent = num1
    
    const list = document.querySelector('#numbers')
    
    list.appendChild(li)    
    
    //const num1 = Number(value) : these are the same
    //const num2 = parseInt(value) 
    //convert input to a number
    //create a new li and make its text content equal to users input
    //get the ul from the DOM
    //append users input to the ul
}


function onSubmit() {
    const num1 = Number(document.querySelector('#number-statistics').value)
    const li = document.createElement('li')
    const ul = document.getElementById('numbers')
    li.textContent = num1
    ul.appendChild(li)
    console.log(ul.children)

    let allNum = document.querySelectorAll('##number-statistics li')
    for(let i = 0; i < allNum.length; i++) {
        
    }

}