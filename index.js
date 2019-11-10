document.addEventListener("DOMContentLoaded",() =>{

//Problem 1
submit = document.querySelector("#submitBtn")
submit.addEventListener("click",()=>{

    let input = document.querySelector("#input")
    let heading = document.querySelector("#header")
    heading.innerText = input.value

})

//Problem 2
let results =  [
    { "name" : "Anne" },
    { "name" : "Bri" },
    { "name" : "Chaz" },
    { "name" : "Darlene" }
  ]
let ul = document.createElement("ul")

results.forEach(element => {
    let li = document.createElement("li")
    li.innerText = element.name
    ul.appendChild(li)   
    
});
    
document.querySelector("#ProblemTwo").appendChild(ul)

//Problem 3






})
   
