const textDup = () => {
    const text = document.querySelector("#text-duplicator-string-input")
    const number = Number(document.querySelector("#text-duplicator-number-input").value)
    for (let i = 0; i < number; i++) {
        let li = document.createElement("li")
        li.textContent = text.value 
        document.querySelector("#text-duplicator-list").appendChild(li)
    }
}