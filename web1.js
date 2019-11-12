document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#button")
    button.addEventListener("click", () => {
        let text = document.querySelector("#heading")
        let inputText = document.querySelector("#input-text")
            text.innerHTML = inputText.value
    })
})