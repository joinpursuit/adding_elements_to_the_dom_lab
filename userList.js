document.addEventListener('DOMContentLoaded', () => {
  const obj = {  
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
  const input = obj.results
  
  let idArr = []

  for (let i = 0; i < input.length; i++) {
    let names = Object.values(input[i].name).slice(1).join(' ')
    let nation = Object.values(input[i].nat).join('')
    let id = names.concat(` (${nation})`)
    idArr.push(id)  
  } 
   
  const output = document.querySelector('#user-list')
  for (let i = 0; i < idArr.length; i++) {
    const li = document.createElement('li')
    li.textContent = idArr[i]    
    output.appendChild(li)
  }
})  


