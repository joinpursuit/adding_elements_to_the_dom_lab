document.addEventListener("DOMContentLoaded", () => {
 
        let input = document.createElement("input")
        let regenerate = document.createElement("button")
  
    
    regenerate.addEventListener("click",() => {
        let print = document.createElement("li")
        print.innerText = document.querySelector("input").value
        document.body.appendChild(print)
        
    })
    
    document.body.appendChild(input)
    document.body.appendChild(regenerate) 
    

})