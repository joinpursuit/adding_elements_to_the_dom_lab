const textDuplicator = () => {
    //take value from string text-box and store it in a variable 
    //take value from number text-box and store it in a variable
    const str = String(document.querySelector('#text-duplicator-string-input').value)
    const num = Number(document.querySelector('#text-duplicator-number-input').value)
    //Create an unordered list and give it an id attribute 
    let uList = document.createElement('ul')
    uList.setAttribute('id','text-duplicator-list')
    document.body.appendChild(uList)
    //Create as many list items as number provided in the text box
    for(let i = 1; i<=num; i++) {
        let listItem = document.createElement('li')
        listItem.textContent = str
        
        //append li and ul to body of document 
        uList.appendChild(listItem)
    }
}


