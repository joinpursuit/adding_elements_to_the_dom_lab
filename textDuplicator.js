function duplicator() {
    const text = document.querySelector("#text-duplicator-string-input").value
    const num = document.querySelector("#text-duplicator-number-input").value
    const ul = document.querySelector("#text-duplicator-list")
    for(let i = 0; i < num; i++){
        const list = document.createElement("li")
        list.textContent = text
        ul.appendChild(list)
    }
}