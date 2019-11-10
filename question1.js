document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#submit")
    button.addEventListener("click", () => {
        let heading = document.querySelector("#text")
        let input = document.createElement("h1")
        input.innerText = heading.value
        document.body.appendChild(input)
    })
})