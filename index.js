document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button")
    button.addEventListener("click", () => {
        let output = document.querySelector("#header")
        let userInput = document.querySelector("#text1")
        output.innerHTML = userInput.value 
    })
})

