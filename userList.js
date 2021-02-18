let list = {
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Gabriel",
          "last": "Flores"
        },
        "nat": "GB"
      },
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Julia",
          "last": "Kotila"
        },
        "nat": "FI"
      },
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Carla",
          "last": "Moreno"
        },
        "nat": "ES"
      },
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Isra",
          "last": "Knudsen"
        },
        "nat": "NO"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Aaron",
          "last": "Robinson"
        },
        "nat": "NZ"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Logan",
          "last": "Nguyen"
        },
        "nat": "FR"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "دانیال",
          "last": "کوتی"
        },
        "nat": "IR"
      },
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Alice",
          "last": "Walker"
        },
        "nat": "US"
      },
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Helmi",
          "last": "Arola"
        },
        "nat": "FI"
      },
      {
        "gender": "female",
        "name": {
          "title": "Mrs",
          "first": "Gládis",
          "last": "Moura"
        },
        "nat": "BR"
      }
    ],
    "info": {
      "seed": "4115b3f2685f858f",
      "results": 10,
      "page": 1,
      "version": "1.3"
    }
}

function ol () {
    let output = document.querySelector('#user-list')
    for (let i = 0; i < list.results.length; i += 1) {
        let li = document.createElement('li')
        let elem = list.results[i]
        li.textContent = `${elem.name.first} ${elem.name.last} (${elem.nat})`
        output.appendChild(li)
    }
}
ol()