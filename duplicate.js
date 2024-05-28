


addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const form = document.querySelector("form");
    const number = document.getElementById("number");
    const text = document.getElementById("text");

    form.addEventListener("submit", (event) => {
        debugger
        event.preventDefault();
        const userNumber = number.value
        const userText = text.value

        for(let i = 0; i < userNumber; i ++) {
            const newText = document.createElement("div");
            newText.innerHTML = `<p>${userText}</p>`
            body.appendChild(newText)
        }
    })
})