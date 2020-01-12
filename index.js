document.addEventListener("DOMContentLoaded", () => {
    btn = document.querySelector("#submit");
    btn = document.addEventListener("click", () => {
        let input = document.querySelector("input")
        let head = document.querySelector("#h2")
        head.innerText = input.value

        })
            let results =[
                { "name" : "Anne" },
                { "name" : "Bri" },
                { "name" : "Chaz" },
                { "name" : "Darlene" }
              ]
              for(let key in results) {
                  let li = document.createElement("li");
                  li.innerText = results[key].name
                  ul = document.querySelector("ul")
                  ul.appendChild(li)
              }
            //   Make a website that displays a list containing all of the nationality,
            //   first name and last name of all of the users below:

              let results2 = [
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
              results2.forEach(el => {
                  let li = document.createElement("li");
                  li.innerText = el.name.first + " " + el.name.last + " " + el.nat
                  let ul = document.querySelector('#problem2')
                  ul.appendChild(li)
              })

            //   Make a website that displays a list of all 
            //   of the names and populations of the following Star Wars planets

              let result3 = [
                {
                    "name": "Alderaan",
                    "rotation_period": "24",
                    "orbital_period": "364",
                    "diameter": "12500",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "grasslands, mountains",
                    "surface_water": "40",
                    "population": "2000000000",
                    "residents": [
                        "https://swapi.co/api/people/5/",
                        "https://swapi.co/api/people/68/",
                        "https://swapi.co/api/people/81/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/6/",
                        "https://swapi.co/api/films/1/"
                    ],
                    "created": "2014-12-10T11:35:48.479000Z",
                    "edited": "2014-12-20T20:58:18.420000Z",
                    "url": "https://swapi.co/api/planets/2/"
                },
                {
                    "name": "Yavin IV",
                    "rotation_period": "24",
                    "orbital_period": "4818",
                    "diameter": "10200",
                    "climate": "temperate, tropical",
                    "gravity": "1 standard",
                    "terrain": "jungle, rainforests",
                    "surface_water": "8",
                    "population": "1000",
                    "residents": [],
                    "films": [
                        "https://swapi.co/api/films/1/"
                    ],
                    "created": "2014-12-10T11:37:19.144000Z",
                    "edited": "2014-12-20T20:58:18.421000Z",
                    "url": "https://swapi.co/api/planets/3/"
                },
                {
                    "name": "Hoth",
                    "rotation_period": "23",
                    "orbital_period": "549",
                    "diameter": "7200",
                    "climate": "frozen",
                    "gravity": "1.1 standard",
                    "terrain": "tundra, ice caves, mountain ranges",
                    "surface_water": "100",
                    "population": "unknown",
                    "residents": [],
                    "films": [
                        "https://swapi.co/api/films/2/"
                    ],
                    "created": "2014-12-10T11:39:13.934000Z",
                    "edited": "2014-12-20T20:58:18.423000Z",
                    "url": "https://swapi.co/api/planets/4/"
                },
                {
                    "name": "Dagobah",
                    "rotation_period": "23",
                    "orbital_period": "341",
                    "diameter": "8900",
                    "climate": "murky",
                    "gravity": "N/A",
                    "terrain": "swamp, jungles",
                    "surface_water": "8",
                    "population": "unknown",
                    "residents": [],
                    "films": [
                        "https://swapi.co/api/films/2/",
                        "https://swapi.co/api/films/6/",
                        "https://swapi.co/api/films/3/"
                    ],
                    "created": "2014-12-10T11:42:22.590000Z",
                    "edited": "2014-12-20T20:58:18.425000Z",
                    "url": "https://swapi.co/api/planets/5/"
                },
                {
                    "name": "Bespin",
                    "rotation_period": "12",
                    "orbital_period": "5110",
                    "diameter": "118000",
                    "climate": "temperate",
                    "gravity": "1.5 (surface), 1 standard (Cloud City)",
                    "terrain": "gas giant",
                    "surface_water": "0",
                    "population": "6000000",
                    "residents": [
                        "https://swapi.co/api/people/26/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/2/"
                    ],
                    "created": "2014-12-10T11:43:55.240000Z",
                    "edited": "2014-12-20T20:58:18.427000Z",
                    "url": "https://swapi.co/api/planets/6/"
                },
                {
                    "name": "Endor",
                    "rotation_period": "18",
                    "orbital_period": "402",
                    "diameter": "4900",
                    "climate": "temperate",
                    "gravity": "0.85 standard",
                    "terrain": "forests, mountains, lakes",
                    "surface_water": "8",
                    "population": "30000000",
                    "residents": [
                        "https://swapi.co/api/people/30/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/3/"
                    ],
                    "created": "2014-12-10T11:50:29.349000Z",
                    "edited": "2014-12-20T20:58:18.429000Z",
                    "url": "https://swapi.co/api/planets/7/"
                },
                {
                    "name": "Naboo",
                    "rotation_period": "26",
                    "orbital_period": "312",
                    "diameter": "12120",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "grassy hills, swamps, forests, mountains",
                    "surface_water": "12",
                    "population": "4500000000",
                    "residents": [
                        "https://swapi.co/api/people/3/",
                        "https://swapi.co/api/people/21/",
                        "https://swapi.co/api/people/36/",
                        "https://swapi.co/api/people/37/",
                        "https://swapi.co/api/people/38/",
                        "https://swapi.co/api/people/39/",
                        "https://swapi.co/api/people/42/",
                        "https://swapi.co/api/people/60/",
                        "https://swapi.co/api/people/61/",
                        "https://swapi.co/api/people/66/",
                        "https://swapi.co/api/people/35/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/5/",
                        "https://swapi.co/api/films/4/",
                        "https://swapi.co/api/films/6/",
                        "https://swapi.co/api/films/3/"
                    ],
                    "created": "2014-12-10T11:52:31.066000Z",
                    "edited": "2014-12-20T20:58:18.430000Z",
                    "url": "https://swapi.co/api/planets/8/"
                },
                {
                    "name": "Coruscant",
                    "rotation_period": "24",
                    "orbital_period": "368",
                    "diameter": "12240",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "cityscape, mountains",
                    "surface_water": "unknown",
                    "population": "1000000000000",
                    "residents": [
                        "https://swapi.co/api/people/34/",
                        "https://swapi.co/api/people/55/",
                        "https://swapi.co/api/people/74/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/5/",
                        "https://swapi.co/api/films/4/",
                        "https://swapi.co/api/films/6/",
                        "https://swapi.co/api/films/3/"
                    ],
                    "created": "2014-12-10T11:54:13.921000Z",
                    "edited": "2014-12-20T20:58:18.432000Z",
                    "url": "https://swapi.co/api/planets/9/"
                },
                {
                    "name": "Kamino",
                    "rotation_period": "27",
                    "orbital_period": "463",
                    "diameter": "19720",
                    "climate": "temperate",
                    "gravity": "1 standard",
                    "terrain": "ocean",
                    "surface_water": "100",
                    "population": "1000000000",
                    "residents": [
                        "https://swapi.co/api/people/22/",
                        "https://swapi.co/api/people/72/",
                        "https://swapi.co/api/people/73/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/5/"
                    ],
                    "created": "2014-12-10T12:45:06.577000Z",
                    "edited": "2014-12-20T20:58:18.434000Z",
                    "url": "https://swapi.co/api/planets/10/"
                },
                {
                    "name": "Geonosis",
                    "rotation_period": "30",
                    "orbital_period": "256",
                    "diameter": "11370",
                    "climate": "temperate, arid",
                    "gravity": "0.9 standard",
                    "terrain": "rock, desert, mountain, barren",
                    "surface_water": "5",
                    "population": "100000000000",
                    "residents": [
                        "https://swapi.co/api/people/63/"
                    ],
                    "films": [
                        "https://swapi.co/api/films/5/"
                    ],
                    "created": "2014-12-10T12:47:22.350000Z",
                    "edited": "2014-12-20T20:58:18.437000Z",
                    "url": "https://swapi.co/api/planets/11/"
                }
            ]
            for(let key in result3) {
                let li = document.createElement("li");
                li.innerText = result3[key].name + " " + result3[key].population
                let ul = document.querySelector("#problem4");
                ul.appendChild(li)
            }
            // Make a website with a text input and a button.  
            // Clicking on the button should create a new list 
            // item with its text the same as the text in the input.
            btn2 = document.querySelector("#add");
            btn2.addEventListener("click", () => {
                let input2 = document.querySelector("#input2");
                input2.innerText = input2.value;
                let li = document.createElement("li");
                li.innerText = input2.value
                let ul = document.querySelector("#problem5");
                ul.appendChild(li)
                document.querySelector("#input2").value = ""

            })

            // Make a website with a text input, a number input and a button.  
            // Clicking on the button should add that 
            // many copies of the text in the text input to a list.

            btnRepeat = document.querySelector("#repeat");
            btnRepeat.addEventListener("click", () => {
            let input3 = document.querySelector("#text3");
             let inputNumber = document.querySelector("#number");
            let ul6 = document.createElement("ul")
            for( i = 0; i < inputNumber.value; i++) {
                let li6 = document.createElement("li");
                li6.innerText = input3.value
                debugger
                ul6.appendChild(li6)

         }

     })

    //  Make a website with a number input, a button, and 3 paragraphs.  
    //  Clicking on the button should add the number to a list.  
    //  The first paragraph should show the average of all the numbers, 
    //  the second paragraph should show the maximum value,
    //   and the third paragraph should show the minimum value.

     



  })
    