

let peopleCountries = {
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

// peopleCountries is the name of the variable containing object
// there are two keys within this object, "results"(array) and "info"(object)
// we don't need to access info since it looks like metadata, and the exercise doesn't call for that
// all of the relevant info is inside of "results". There are 10 objects inside of "results"
// the "results": [array] contains 10 objects. Each of these objects holds one person's data
// Each of these objects contains 3 keys: ['gender'], ['name'], and ['nat']
  // The exercise doesn't call for gender, so we don't need that key.
  // "name" contains 3 keys: ['title'], ['first'], ['last']
  //-- What we ultimately need to access are the names(values) inside the keys "first" and "last"
    // peopleCountries.results[arrayIndex].name['first'] / ['last']
// The only other thing we need besides these two names is the third value inside of the people objects inside "results"
  //-- This data is the nationality(value) of the "nat" key.
    // peopleCountries.results[arrayIndex].nat

// LOOP FOR TESTING
// for (let i = 0; i < peopleCountries.results.length; i++) {
//   console.log(peopleCountries.results[i].name['first'])

// }

let ul = document.getElementById("user-list")


for (let i = 0; i < peopleCountries.results.length; i++) {
  let li = document.createElement("li")                       
  let firstName = peopleCountries.results[i].name['first']
  let lastName = peopleCountries.results[i].name['last']
  let nationality = peopleCountries.results[i]['nat']
  ul.appendChild(li)
  li.textContent = `${firstName.toLowerCase()} ${lastName.toLowerCase()} (${nationality})`  

}

