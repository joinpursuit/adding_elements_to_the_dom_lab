const textDuplicator = () =>{
    const str = String(document.querySelector("#text-duplicator-string-input").value)
    const num = Number(document.querySelector('#text-duplicator-number-input').value)

    let uList = document.createElement('ul')
    uList.setAttribute("id", "text-duplicator-list")
    document.body.appendChild(uList)

    for (let i = 1; i<= num; i++){
        let listItem = document.createElement('li')
        listItem.textContent = str 

        uList.appendChild(listItem)
    }

}
// take value from string text-box and store it in a variable  
// take value from number text-box and store it in a variable 
//String() and Number() are constructors 

// create an unordered list 
// set attribute to id='text-duplicator-list'
// create as many li's as the number provided in the text box 
// append the ul with its li's to the body document 





//Myra time //
function duplicate (){

}

//get the string input from the text input tag 

//get the number value from the number input tag -- call it n

//get the ul from the DOM (we'll use it when we iterate)

//iterate n times
    //make a new list item 
    // add the string to the items textContent
    //append the list item to the ul 