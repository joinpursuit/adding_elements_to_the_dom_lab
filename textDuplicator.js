function textDuplicator() {
    
    let input = document.getElementById("text-duplicator-string-input").value
    let number = document.getElementById("text-duplicator-number-input").value

    let ul = document.querySelector("#text-duplicator-list")

    
for (let i = 0; i < number; i++) {
    let li = document.createElement('li')
    li.textContent = input
    ul.appendChild(li)
}

}
