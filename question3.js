document.addEventListener("DOMContentLoaded", ()=>{
let results2 = 
[
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Alie",
        "last": "Van der Meeren"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Rose",
        "last": "White"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Lærke",
        "last": "Skjelstad"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Marie",
        "last": "Poulsen"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Cariana",
        "last": "da Conceição"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Adem",
        "last": "Balcı"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Milja",
        "last": "Hakala"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Margie",
        "last": "Hawkins"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mademoiselle",
        "first": "Noemi",
        "last": "Rousseau"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Allison",
        "last": "Fowler"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "bf68d45937d972fb",
    "results": 10,
    "page": 1,
    "version": "1.3"
  }
}
results2.forEach(el=>{
    let li = document.createElement("li")
    li.innerText= el.title
    ul.appendChild(li)
})
    document.body.appendChild(ul)
})