document.addEventListener("DOMContentLoaded", ()=>{
    submit = document.querySelector("#submitButton")
    list = document.querySelector("ol")
    submit.addEventListener("click", () =>{
        text = document.querySelector("#textEnter")
        textEntered = text.value
        li = document.createElement("li")
        li.innerText = textEntered
        list.appendChild(li)
        debugger
    })
})