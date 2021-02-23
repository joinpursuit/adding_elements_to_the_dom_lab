const obj = {    //obj.results[0].name.title === madmoiselle
    "results": [
    {
      "gender": "female",
      "name": { "title": "mademoiselle", "first": "ruth", "last": "nicolas" },
      "nat": "CH"
    },
        
      { "gender": "female",
          "name": {
            "title": "miss",
            "first": "رها",
            "last": "سلطانی نژاد"
          },
        "nat": "IR" },
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
console.log(obj)

// const kawolski = () => {
//   //const li = document.createElement('li')
//   let input = obj.results[0].name
//   console.log(input)
//   //const output = document.querySelector('#user-list')
//   //output.appendChild(li)
//   let vals = Object.values(input)
//   console.log(vals)
// }
// kawolski()
console.log(obj.results[0].name.title)
const input = obj.results
console.log(obj.results)
for (let i = 0; i < input.length; i++) {
  let nameInput = input[i].name
  let nameArr = Object.values(nameInput)
  console.log(nameArr.length)
  console.log(input.length)

 
}




