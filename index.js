// QUESTION: 1
const addStr = () =>{
  let userInput = document.querySelector("#str").value
  document.querySelector("#newStr").innerText = userInput
}
// QUESTION: 2
document.addEventListener("DOMContentLoaded",() =>{
let obj = {
    "results" : [
    { "name" : "Anne" },
    { "name" : "Bri" },
    { "name" : "Chaz" },
    { "name" : "Darlene" }
  ]
}
let ul = document.createElement("ul");

obj.results.forEach(names  => {
  let li = document.createElement("li")
  li.innerText = names["name"]
  ul.appendChild(li)


})
document.body.appendChild(ul)
})

// QUESTION: 3
document.addEventListener("DOMContentLoaded",() => {
  let obj2 = {
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "mademoiselle",
          "first": "ruth",
          "last": "nicolas"
        },
        "nat": "CH"
      },
      {
        "gender": "female",
        "name": {
          "title": "miss",
          "first": "رها",
          "last": "سلطانی نژاد"
        },
        "nat": "IR"
      },
      {
        "gender": "female",
        "name": {
          "title": "mrs",
          "first": "patricia",
          "last": "hale"
        },
        "nat": "GB"
      }
    ]
  }
  let ul = document.createElement("ul");

  obj2.results.forEach(el  => {
    let li = document.createElement("li")
    li.innerText = el["name","nat"]
    ul.appendChild(li)

})
