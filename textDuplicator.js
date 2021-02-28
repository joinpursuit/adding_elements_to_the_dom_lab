const textDuplicator = () =>{
    const str = String(document.querySelector("#text-duplicator-string-input").value)
    const num = Number(document.querySelector("#text-duplicator-number-input").value)

    let uList = document.createElement("ul")
    uList.setAttribute("id", "text-duplicator-list")

    document.body.appendChild(uList)

    for(let i=1; i<=num; i++){
        let listItem= document.createElement("li")
        listItem.textContent = str
    
        uList.appendChild(listItem)
    }
}



//take value from string text box and store it in a variable
//take value from number text box and store it in a variable
//create an unordered list (ul) and give it an id attribute
//create list items 