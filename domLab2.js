// document.addEventListener("DOMContentLoaded", () => {

// })

// const newHeader = () => {
//     let strElement = document.querySelector("#string")
//     let str = strElement.value
//     let header = document.querySelector("#header")
//     header.innerText = str
// }

// Question 2 

// document.addEventListener("DOMContentLoaded", () => {
//     let obj = {
//         "results" : [
//           { "name" : "Anne" },
//           { "name" : "Bri" },
//           { "name" : "Chaz" },
//           { "name" : "Darlene" }
//         ]
//       }
//     let results = obj["results"]
//     let newArr = results.map((name) => {
//         return name.name
//     })
//     let ul = document.createElement("ul")
//     newArr.forEach(name => {
//         let li = document.createElement("li")
//         li.innerText = name
//         ul.appendChild(li)
//     })
//     document.body.appendChild(ul)

// })

//Question 3

// document.addEventListener("DOMContentLoaded", () => {
//     let obj = {
//         "results": [
//           {
//             "gender": "female",
//             "name": {
//               "title": "mademoiselle",
//               "first": "ruth",
//               "last": "nicolas"
//             },
//             "nat": "CH"
//           },
//           {
//             "gender": "female",
//             "name": {
//               "title": "miss",
//               "first": "رها",
//               "last": "سلطانی نژاد"
//             },
//             "nat": "IR"
//           },
//           {
//             "gender": "female",
//             "name": {
//               "title": "mrs",
//               "first": "patricia",
//               "last": "hale"
//             },
//             "nat": "GB"
//           },
//           {
//             "gender": "male",
//             "name": {
//               "title": "mr",
//               "first": "fernando",
//               "last": "cooper"
//             },
//             "nat": "US"
//           },
//           {
//             "gender": "female",
//             "name": {
//               "title": "mrs",
//               "first": "یسنا",
//               "last": "صدر"
//             },
//             "nat": "IR"
//           },
//           {
//             "gender": "male",
//             "name": {
//               "title": "mr",
//               "first": "eino",
//               "last": "tuomala"
//             },
//             "nat": "FI"
//           },
//           {
//             "gender": "female",
//             "name": {
//               "title": "ms",
//               "first": "gonca",
//               "last": "özkara"
//             },
//             "nat": "TR"
//           },
//           {
//             "gender": "male",
//             "name": {
//               "title": "mr",
//               "first": "kyle",
//               "last": "castillo"
//             },
//             "nat": "US"
//           },
//           {
//             "gender": "female",
//             "name": {
//               "title": "miss",
//               "first": "olivia",
//               "last": "kumar"
//             },
//             "nat": "NZ"
//           },
//           {
//             "gender": "male",
//             "name": {
//               "title": "monsieur",
//               "first": "raymond",
//               "last": "durand"
//             },
//             "nat": "CH"
//           }
//         ],
//         "info": {
//           "seed": "2cb086ce097c87ee",
//           "results": 10,
//           "page": 1,
//           "version": "1.2"
//         }
//       }
//       let results = obj["results"]
//       let newArray = results.map(person => {
//           return [person.name.first, person.name.last, person.nat]
//       })
//       let ul = document.createElement("ul")
//       newArray.forEach(person =>{
//           let li = document.createElement("li")
//           li.innerText = `${person[0]} ${person[1]} is ${person[2]} `
//           ul.appendChild(li)
//       })
//       document.body.appendChild(ul)
// })

// Question 4 

// document.addEventListener("DOMContentLoaded", () => {
//     let obj = {
//         "results": [
//             {
//                 "name": "Alderaan",
//                 "rotation_period": "24",
//                 "orbital_period": "364",
//                 "diameter": "12500",
//                 "climate": "temperate",
//                 "gravity": "1 standard",
//                 "terrain": "grasslands, mountains",
//                 "surface_water": "40",
//                 "population": "2000000000",
//                 "residents": [
//                     "https://swapi.co/api/people/5/",
//                     "https://swapi.co/api/people/68/",
//                     "https://swapi.co/api/people/81/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/6/",
//                     "https://swapi.co/api/films/1/"
//                 ],
//                 "created": "2014-12-10T11:35:48.479000Z",
//                 "edited": "2014-12-20T20:58:18.420000Z",
//                 "url": "https://swapi.co/api/planets/2/"
//             },
//             {
//                 "name": "Yavin IV",
//                 "rotation_period": "24",
//                 "orbital_period": "4818",
//                 "diameter": "10200",
//                 "climate": "temperate, tropical",
//                 "gravity": "1 standard",
//                 "terrain": "jungle, rainforests",
//                 "surface_water": "8",
//                 "population": "1000",
//                 "residents": [],
//                 "films": [
//                     "https://swapi.co/api/films/1/"
//                 ],
//                 "created": "2014-12-10T11:37:19.144000Z",
//                 "edited": "2014-12-20T20:58:18.421000Z",
//                 "url": "https://swapi.co/api/planets/3/"
//             },
//             {
//                 "name": "Hoth",
//                 "rotation_period": "23",
//                 "orbital_period": "549",
//                 "diameter": "7200",
//                 "climate": "frozen",
//                 "gravity": "1.1 standard",
//                 "terrain": "tundra, ice caves, mountain ranges",
//                 "surface_water": "100",
//                 "population": "unknown",
//                 "residents": [],
//                 "films": [
//                     "https://swapi.co/api/films/2/"
//                 ],
//                 "created": "2014-12-10T11:39:13.934000Z",
//                 "edited": "2014-12-20T20:58:18.423000Z",
//                 "url": "https://swapi.co/api/planets/4/"
//             },
//             {
//                 "name": "Dagobah",
//                 "rotation_period": "23",
//                 "orbital_period": "341",
//                 "diameter": "8900",
//                 "climate": "murky",
//                 "gravity": "N/A",
//                 "terrain": "swamp, jungles",
//                 "surface_water": "8",
//                 "population": "unknown",
//                 "residents": [],
//                 "films": [
//                     "https://swapi.co/api/films/2/",
//                     "https://swapi.co/api/films/6/",
//                     "https://swapi.co/api/films/3/"
//                 ],
//                 "created": "2014-12-10T11:42:22.590000Z",
//                 "edited": "2014-12-20T20:58:18.425000Z",
//                 "url": "https://swapi.co/api/planets/5/"
//             },
//             {
//                 "name": "Bespin",
//                 "rotation_period": "12",
//                 "orbital_period": "5110",
//                 "diameter": "118000",
//                 "climate": "temperate",
//                 "gravity": "1.5 (surface), 1 standard (Cloud City)",
//                 "terrain": "gas giant",
//                 "surface_water": "0",
//                 "population": "6000000",
//                 "residents": [
//                     "https://swapi.co/api/people/26/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/2/"
//                 ],
//                 "created": "2014-12-10T11:43:55.240000Z",
//                 "edited": "2014-12-20T20:58:18.427000Z",
//                 "url": "https://swapi.co/api/planets/6/"
//             },
//             {
//                 "name": "Endor",
//                 "rotation_period": "18",
//                 "orbital_period": "402",
//                 "diameter": "4900",
//                 "climate": "temperate",
//                 "gravity": "0.85 standard",
//                 "terrain": "forests, mountains, lakes",
//                 "surface_water": "8",
//                 "population": "30000000",
//                 "residents": [
//                     "https://swapi.co/api/people/30/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/3/"
//                 ],
//                 "created": "2014-12-10T11:50:29.349000Z",
//                 "edited": "2014-12-20T20:58:18.429000Z",
//                 "url": "https://swapi.co/api/planets/7/"
//             },
//             {
//                 "name": "Naboo",
//                 "rotation_period": "26",
//                 "orbital_period": "312",
//                 "diameter": "12120",
//                 "climate": "temperate",
//                 "gravity": "1 standard",
//                 "terrain": "grassy hills, swamps, forests, mountains",
//                 "surface_water": "12",
//                 "population": "4500000000",
//                 "residents": [
//                     "https://swapi.co/api/people/3/",
//                     "https://swapi.co/api/people/21/",
//                     "https://swapi.co/api/people/36/",
//                     "https://swapi.co/api/people/37/",
//                     "https://swapi.co/api/people/38/",
//                     "https://swapi.co/api/people/39/",
//                     "https://swapi.co/api/people/42/",
//                     "https://swapi.co/api/people/60/",
//                     "https://swapi.co/api/people/61/",
//                     "https://swapi.co/api/people/66/",
//                     "https://swapi.co/api/people/35/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/5/",
//                     "https://swapi.co/api/films/4/",
//                     "https://swapi.co/api/films/6/",
//                     "https://swapi.co/api/films/3/"
//                 ],
//                 "created": "2014-12-10T11:52:31.066000Z",
//                 "edited": "2014-12-20T20:58:18.430000Z",
//                 "url": "https://swapi.co/api/planets/8/"
//             },
//             {
//                 "name": "Coruscant",
//                 "rotation_period": "24",
//                 "orbital_period": "368",
//                 "diameter": "12240",
//                 "climate": "temperate",
//                 "gravity": "1 standard",
//                 "terrain": "cityscape, mountains",
//                 "surface_water": "unknown",
//                 "population": "1000000000000",
//                 "residents": [
//                     "https://swapi.co/api/people/34/",
//                     "https://swapi.co/api/people/55/",
//                     "https://swapi.co/api/people/74/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/5/",
//                     "https://swapi.co/api/films/4/",
//                     "https://swapi.co/api/films/6/",
//                     "https://swapi.co/api/films/3/"
//                 ],
//                 "created": "2014-12-10T11:54:13.921000Z",
//                 "edited": "2014-12-20T20:58:18.432000Z",
//                 "url": "https://swapi.co/api/planets/9/"
//             },
//             {
//                 "name": "Kamino",
//                 "rotation_period": "27",
//                 "orbital_period": "463",
//                 "diameter": "19720",
//                 "climate": "temperate",
//                 "gravity": "1 standard",
//                 "terrain": "ocean",
//                 "surface_water": "100",
//                 "population": "1000000000",
//                 "residents": [
//                     "https://swapi.co/api/people/22/",
//                     "https://swapi.co/api/people/72/",
//                     "https://swapi.co/api/people/73/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/5/"
//                 ],
//                 "created": "2014-12-10T12:45:06.577000Z",
//                 "edited": "2014-12-20T20:58:18.434000Z",
//                 "url": "https://swapi.co/api/planets/10/"
//             },
//             {
//                 "name": "Geonosis",
//                 "rotation_period": "30",
//                 "orbital_period": "256",
//                 "diameter": "11370",
//                 "climate": "temperate, arid",
//                 "gravity": "0.9 standard",
//                 "terrain": "rock, desert, mountain, barren",
//                 "surface_water": "5",
//                 "population": "100000000000",
//                 "residents": [
//                     "https://swapi.co/api/people/63/"
//                 ],
//                 "films": [
//                     "https://swapi.co/api/films/5/"
//                 ],
//                 "created": "2014-12-10T12:47:22.350000Z",
//                 "edited": "2014-12-20T20:58:18.437000Z",
//                 "url": "https://swapi.co/api/planets/11/"
//             }
//         ]
//       }
//       let results = obj["results"]
//       let newArr = results.map(planet => {
//           return [planet.name, planet.population]
//       })
//       let ul = document.createElement("ul")
//       newArr.forEach(planet =>{
//           let li = document.createElement("li")
//           li.innerText = `${planet[0]} has ${planet[1]}`
//           ul.appendChild(li)
//       })
//      document.body.appendChild(ul)   
    
// })

//Question 5 

// const createList = () => {
//     let strElement = document.querySelector("#id")
//     let string = strElement.value
//     let ul = document.querySelector("#list1")
//     let li = document.createElement("li")
//     li.innerText = string
//     ul.appendChild(li)

// }

// document.addEventListener("DOMContentLoaded", ()=>{
    
// })

//Question 6 

// const makeCopies = () => {
//     let strElement = document.querySelector("#id")
//     let strElement2 = document.querySelector("#idNum")
//     let string = strElement.value
//     let num = Number(strElement2.value)
//     let ul = document.querySelector("#list")
//     for(let i = 0; i < num; i++){
//         let li = document.createElement("li")
//         li.innerText = string
//         ul.appendChild(li)
//     }
// }

//Question 7

// const createPara = () => {
//     let strElement = document.querySelector("#id")
//     let num = Number(strElement.value)

//     let ul = document.querySelector("#list")
//     let li = document.createElement("li")
//     li.innerText = num
//     ul.appendChild(li)

//     let liArr = document.querySelectorAll("li")
//     let liValues = []
//     liArr.forEach(li => {
//         liValues.push(Number(li.innerText))
//     })

//     let averageP = document.querySelector("#averageP")
//     averageP.innerText = average(liValues)

//     let maxP = document.querySelector("#maxP");
//     let minP = document.querySelector("#minP");

//     maxP.innerText = maxAndMin(liValues)[0];
//     minP.innerText = maxAndMin(liValues)[1];
// }

// const average = arr => {
//     let sum = 0 
//     arr.forEach(num => {
//         sum += num
//     })
//     return sum/arr.length
// }

// const maxAndMin = arr => {
//     let max = -Infinity
//     let min = Infinity

//     let maxP = document.querySelector("#maxP");
//     let minP = document.querySelector("#minP");

//     arr.forEach(num =>{
//         if(num > max) {
//             max = num;
//         }
        
//         if(num < min) {
//             min = num;
//         }
//     })
//     return [max, min];

// }

// QUESTION 8
// deleteButton = () => {
//     let button = document.querySelector("button");
//     document.body.removeChild(button);
// }

// QUESTION 9
deleteParagraphs = () => {
    let paragraphs = document.querySelectorAll("p");
    for(let i = 0; i < paragraphs.length; i++) {
        document.body.removeChild(paragraphs);
    }
}