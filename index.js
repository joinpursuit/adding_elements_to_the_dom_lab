// const changeHeading = () => {
//     let heading = document.querySelector("#inpuHeading")
//     let newHeading = heading.value
//     if(newHeading){
//         document.querySelector("#heading1").innerHTML = newHeading
//     }
// }
document.addEventListener("DOMContentLoaded", ()=> {
    let obj = {
        "results" : [
          { "name" : "Anne" },
          { "name" : "Bri" },
          { "name" : "Chaz" },
          { "name" : "Darlene" }
        ]
      }

      let ul = document.createElement("ul")
   
      let newArr =obj.results
      newArr.forEach((el) =>{
        let li = document.createElement("li")
        console.log(li)
        li.innerText = el.name
        console.log(el)
        ul.appendChild(li)
        // debugger

    })

    document.body.appendChild(ul)
    let hr = document.createElement("hr")
    document.body.appendChild(hr)

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

  let newArr2 = obj2.results
  newArr2.forEach((el) =>{
    let li2 = document.createElement("li")
    console.log(li2)
    li2.innerText = (`${el.nat}, ${el.name.first} ${el.name.last}`)  
    console.log(el)
    ul.appendChild(li2)
    // debugger

})
document.body.appendChild(ul)
let hr2 = document.createElement("hr")
document.body.appendChild(hr2)

})




    
      