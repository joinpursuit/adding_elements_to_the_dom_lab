// QUESTION: 1
const addStr = () =>{
  let userInput = document.querySelector("#str").value
  document.querySelector("#newStr").innerText = userInput
}
// QUESTION: 2
document.addEventListener("DOMContentLoaded",() =>{
let results =
 [
    { "name" : "Anne" },
    { "name" : "Bri" },
    { "name" : "Chaz" },
    { "name" : "Darlene" }
  ]
let ul = document.createElement("ul");

results.forEach(names  => {
  let li = document.createElement("li")
  li.innerText = names["name"]
  ul.appendChild(li)


})
document.body.appendChild(ul)
})

// QUESTION: 3
document.addEventListener("DOMContentLoaded",() => {
  let results2 =
  [
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
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "fernando",
        "last": "cooper"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "یسنا",
        "last": "صدر"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "eino",
        "last": "tuomala"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "gonca",
        "last": "özkara"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "kyle",
        "last": "castillo"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "olivia",
        "last": "kumar"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "raymond",
        "last": "durand"
      },
      "nat": "CH"
    }
  ]

  let ul = document.createElement("ul");

  results2.forEach(el  => {
    let li = document.createElement("li")
    li.innerText = `${el["nat"]} ${el["name"]["first"]} ${el["name"]["last"]}`
    ul.appendChild(li)

  })
document.body.appendChild(ul)
})

//question 4
