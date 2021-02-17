const getAverage = () => {
    const num = Number(document.querySelector('#number-statistics-number-input').value)
    
    let uList = document.querySelector("#number-statistics-numbers")
    
    let listItem = document.createElement('li')
    listItem.textContent = num
    uList.appendChild(listItem)

    let listLength = uList.children.length

    let sum = 0
    for(let i=0; i<listLength; i++){
        sum += Number(uList.children[i].innerHTML)
    }
    
    document.querySelector('#number-statistics-average').textContent = sum/listLength

    let numArray = []
    for(let i=0; i<listLength; i++){
        numArray[i] = parseInt(uList.children[i].textContent)
    }

    let minimum = numArray[0]
    numArray.forEach(num => {
        num <=minimum ? minimum = num: minimum;
    });

    document.querySelector("#number-statistics-minimum").textContent = minimum;

    let maximum = numArray[0]
    numArray.forEach(num => {
        num >= maximum ? maximum = num : maximum
    })

    document.querySelector("#number-statistics-maximum").textContent = maximum;
}


// const getAverage = () => {
//     //get users input from the DOM
//     const input = document.querySelector('#number-statistics-number-input')
//     const value = input.value
//     // const value = Number(document.querySelector('#number-statistics-number-input').value)

//     //convert users input to a number
//     const num = Number(value)
//     // const num2 = parseInt(value)
//     // console.log(`num1: ${num2} is a ${typeof num2}`)
    
//     //create a new li and set its text content to the users input 
//     const li = document.createElement('li')
//     li.textContent = num

//     //get the ul from the DOM
//     const list = document.querySelector('#numbers')
//     console.log(list)

//     //append our new li to the ul
//     list.appendChild(li)

//     //update average
//     //update min
//     //update max 
// }




//get users input from the DOM
    // const input = document.querySelector('#number-statistics-number-input')
    // const value = input.value
    // const num1 = Number(value)
//one line code
    // const num = Number(document.querySelector('#number-statistics-number-input').value)




//Get user input from the DOM
    //use document.querySelector or document.getelementbyID
//Transformed that input (converted it to a number)
    //this step depends on what problem your're trying to solve
//Created a new DOM element and set its textContent to our transformed input 
    //(Our new li element)
//Grabbed a parent element from the DOM
    //grab the ul from the DOM
//We append our new DOM element to the parent 
    //call ul.appendChild 