const changeText = () => {
    let userInput = document.querySelector("#userinput").value
    let header = document.getElementById("top")
    header.innerText = userInput;
}


document.addEventListener("DOMContentLoaded", () => {
    let ul = document.createElement("ul")
    let people = {
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
        ],
        "info": {
          "seed": "2cb086ce097c87ee",
          "results": 10,
          "page": 1,
          "version": "1.2"
        }
      }
    people.results.forEach(person => {
        let li = document.createElement("li")
        li.innerText = "Name: " + person.name.first + " " + person.name.last + ", Nationality: " + person.nat
        ul.appendChild(li)
    })
    document.body.appendChild(ul)
})



//question 5 Make a website with a text input and a button.  
 //Clicking on the button should create a new list item with
 // its text the same as the text in the input

//  document.addEventListener("DOMContentLoaded", () => {
// })
const createList = () => {
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    let userInput = document.querySelector("#userinput").value
    console.log(userInput)
    li.innerText = userInput;
    ul.appendChild(li)
    document.body.appendChild(ul)
}
