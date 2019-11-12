
console.log("hello");
document.addEventListener("DOMContentLoaded", () =>{

    
    
    // changeHead();
    
    // let footer = document.createElement("footer");
    
    // let input = document.createElement("INPUT")
    // input.setAttribute("type", "text");
    
    // let changeHeading = document.createElement("button");
    // changeHeading.innerText = "Change"
    // changeHeading.addEventListener("click", changeHead);
    
    // footer.appendChild(input)
    // footer.appendChild(changeHeading)
    
    
    
    
})

const changeHead = () => {
    // debugger;
    let output = document.querySelector("#top")
    let userInput = document.querySelector("#heading")
    output.innerText = userInput.value
}    

    // changeHead();