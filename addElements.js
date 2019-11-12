
console.log("hello");


//Question 1
// const changeHead = () => {
    //     // debugger;
    //     let output = document.querySelector("#top")
    //     let userInput = document.querySelector("#heading")
    //     output.innerText = userInput.value
    // }    
    
    //Question 2
    
document.addEventListener("DOMContentLoaded", () =>{
    let h1 = document.createElement("h1")
    let ol = document.createElement("ol")
     ol = {results = [
        { name : "Anne" },
          { name : "Bri" },
          { name : "Chaz" },
          { name : "Darlene"}
        ]
    }

    for(let name of results) {
        let li = document.createElement("li")
        li.innerText = name
        ol.appendChild(li)
    }
    document.body.appendChild(ol)





})