document.addEventListener("DOMContentLoaded", () => {

    let button = document.querySelector("#button")

    button.addEventListener("click", () => {

        let input = document.querySelector("#text")
        let newInput = document.createElement("li")

        newInput.innerText = input.value
        document.body.appendChild(newInput)
    })

})