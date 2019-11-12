document.addEventListener("DOMContentLoaded", () => {
   const printText = () =>{
       let li = document.createElement("li")
       document.body.appendChild(li)
       li.innerText=text.value
       ul.appendChild(li)
        
   }
    let footer = document.createElement("footer");
    let print = document.createElement("button")
    let text = document.createElement("input")
    let ul = document.createElement("ul")
    print.innerText = "Print Text"
    footer.appendChild(print)
    print.addEventListener("click", printText)

    document.body.appendChild(text)
    document.body.appendChild(footer)
    document.body.appendChild(ul)
    ul.appendChild(text.value)
    print.addEventListener("click",printText)
})
