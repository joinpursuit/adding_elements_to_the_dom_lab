const duplicator =() =>{
    const userInputString = document.querySelector("#text-duplicator-string-input").value
    const userInputNumber = Number(document.querySelector("#text-duplicator-number-input").value)
    
    for(let i = 0; i < userInputNumber; i++){
        const li = document.createElement("li")
        li.textContent = userInputString
        document.querySelector("#text-duplicator-list").appendChild(li)
    }
    
}