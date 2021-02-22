function textDuplicator(){
    const input = document.getElementById("text-duplicator-string-input")
    const value = input.value

    const number = document.getElementById("text-duplicator-number-input")
    const numValue = number.value

    const ul = document.createElement("ul")
    ul.id = "text-duplicator-list"
    document.body.appendChild(ul)

    for(let i=1; i<= numValue; i++){
        const duplicated = document.createElement('li')
        duplicated.textContent = value
        ul.appendChild(duplicated)
    }

}