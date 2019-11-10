function textEditor() {
let userInput = document.querySelector("#string")
let result = userInput.value
document.querySelector("#header").innerHTML = result
}

document.addEventListener("DOMContentLoaded", () => {
    let results= [{ "name" : "Anne" },
    { "name" : "Bri" },
    { "name" : "Chaz" },
    { "name" : "Darlene" }]
    let ul = document.createElement("ul")
    results.forEach(name => {
        let li = document.createElement("li")
        li.innerText = name.name
        ul.appendChild(li)
    })
    document.body.appendChild(ul)
})