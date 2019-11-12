document.addEventListener("DOMContentLoaded", () => {

    const repeat = () => {
        let input = document.querySelector("#text").value
        let number = document.querySelector("#number").value
        for(let i = 0; i < Number(number); i++){
            let result = document.createElement("li")
            result.innerText = input
            document.body.appendChild(result)
        }

    }

    let button = document.querySelector("#button")
    button.addEventListener("click", repeat)
})