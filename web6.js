document.addEventListener("DOMContentLoaded", () => {
    let wordInput = document.createElement("input")
    let numInput = document.createElement("input")
    let submit = document.createElement("button")
  
    
    regenerate.addEventListener("click",() => {
        let print = document.createElement("li")
        print.innerText = document.querySelector("input").value
        
        
        document.body.appendChild(print)
})



const multipleText = () => {
    let output = " "
    for(let i = 0; i < numInput; i++) {
        output += wordInput.value + " "
    }
}
