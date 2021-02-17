function duplicator() {
    const text = document.querySelector("#text-duplicator-string-input").value
    const num = document.querySelector("#text-duplicator-number-input").value
    const ul = document.querySelector("#text-duplicator-list")
    for(let i = num; i > 0; i--){
        const li = document.createElement("li")
        li.textContent = text
        ul.appendChild(li)
    }
}