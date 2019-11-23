//Problem 1
// document.addEventListener("DOMContentLoaded",() =>{
//     let submit = document.querySelector("#button")
//     submit.addEventListener("click",() => {
//         document.querySelector("#result").innerText = document.querySelector("#string").value
//     })

// })

//Problem 2
// let result = [{ "name" : "Anne" }, { "name" : "Bri" },{ "name" : "Chaz" },{ "name" : "Darlene" }]
// let names = document.createElement("ul")
// result.forEach((el) =>{
//     let li = document.createElement("li")
//     li.innerText = el.name
//     names.appendChild(li)
// })
// document.body.appendChild(names)

//Problem 3
// let list = [{
//     "gender": "female",
//     "name": {
//       "title": "mademoiselle",
//       "first": "ruth",
//       "last": "nicolas"
//     },
//     "nat": "CH"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "miss",
//       "first": "رها",
//       "last": "سلطانی نژاد"
//     },
//     "nat": "IR"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "mrs",
//       "first": "patricia",
//       "last": "hale"
//     },
//     "nat": "GB"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "fernando",
//       "last": "cooper"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "mrs",
//       "first": "یسنا",
//       "last": "صدر"
//     },
//     "nat": "IR"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "eino",
//       "last": "tuomala"
//     },
//     "nat": "FI"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "ms",
//       "first": "gonca",
//       "last": "özkara"
//     },
//     "nat": "TR"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "mr",
//       "first": "kyle",
//       "last": "castillo"
//     },
//     "nat": "US"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "miss",
//       "first": "olivia",
//       "last": "kumar"
//     },
//     "nat": "NZ"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "monsieur",
//       "first": "raymond",
//       "last": "durand"
//     },
//     "nat": "CH"
//   }
// ]
// let bio = document.createElement("ul")
// list.forEach((el) =>{
//     let li = document.createElement("li")
//     li.innerText = el.name["first"]+ " " +el.name["last"]+" "+el.nat
//     bio.appendChild(li)
// })
// document.body.appendChild(bio)

//Problem 4
// let starwars = [
//     {
//         "name": "Alderaan",
//         "rotation_period": "24",
//         "orbital_period": "364",
//         "diameter": "12500",
//         "climate": "temperate",
//         "gravity": "1 standard",
//         "terrain": "grasslands, mountains",
//         "surface_water": "40",
//         "population": "2000000000",
//         "residents": [
//             "https://swapi.co/api/people/5/",
//             "https://swapi.co/api/people/68/",
//             "https://swapi.co/api/people/81/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/6/",
//             "https://swapi.co/api/films/1/"
//         ],
//         "created": "2014-12-10T11:35:48.479000Z",
//         "edited": "2014-12-20T20:58:18.420000Z",
//         "url": "https://swapi.co/api/planets/2/"
//     },
//     {
//         "name": "Yavin IV",
//         "rotation_period": "24",
//         "orbital_period": "4818",
//         "diameter": "10200",
//         "climate": "temperate, tropical",
//         "gravity": "1 standard",
//         "terrain": "jungle, rainforests",
//         "surface_water": "8",
//         "population": "1000",
//         "residents": [],
//         "films": [
//             "https://swapi.co/api/films/1/"
//         ],
//         "created": "2014-12-10T11:37:19.144000Z",
//         "edited": "2014-12-20T20:58:18.421000Z",
//         "url": "https://swapi.co/api/planets/3/"
//     },
//     {
//         "name": "Hoth",
//         "rotation_period": "23",
//         "orbital_period": "549",
//         "diameter": "7200",
//         "climate": "frozen",
//         "gravity": "1.1 standard",
//         "terrain": "tundra, ice caves, mountain ranges",
//         "surface_water": "100",
//         "population": "unknown",
//         "residents": [],
//         "films": [
//             "https://swapi.co/api/films/2/"
//         ],
//         "created": "2014-12-10T11:39:13.934000Z",
//         "edited": "2014-12-20T20:58:18.423000Z",
//         "url": "https://swapi.co/api/planets/4/"
//     },
//     {
//         "name": "Dagobah",
//         "rotation_period": "23",
//         "orbital_period": "341",
//         "diameter": "8900",
//         "climate": "murky",
//         "gravity": "N/A",
//         "terrain": "swamp, jungles",
//         "surface_water": "8",
//         "population": "unknown",
//         "residents": [],
//         "films": [
//             "https://swapi.co/api/films/2/",
//             "https://swapi.co/api/films/6/",
//             "https://swapi.co/api/films/3/"
//         ],
//         "created": "2014-12-10T11:42:22.590000Z",
//         "edited": "2014-12-20T20:58:18.425000Z",
//         "url": "https://swapi.co/api/planets/5/"
//     },
//     {
//         "name": "Bespin",
//         "rotation_period": "12",
//         "orbital_period": "5110",
//         "diameter": "118000",
//         "climate": "temperate",
//         "gravity": "1.5 (surface), 1 standard (Cloud City)",
//         "terrain": "gas giant",
//         "surface_water": "0",
//         "population": "6000000",
//         "residents": [
//             "https://swapi.co/api/people/26/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/2/"
//         ],
//         "created": "2014-12-10T11:43:55.240000Z",
//         "edited": "2014-12-20T20:58:18.427000Z",
//         "url": "https://swapi.co/api/planets/6/"
//     },
//     {
//         "name": "Endor",
//         "rotation_period": "18",
//         "orbital_period": "402",
//         "diameter": "4900",
//         "climate": "temperate",
//         "gravity": "0.85 standard",
//         "terrain": "forests, mountains, lakes",
//         "surface_water": "8",
//         "population": "30000000",
//         "residents": [
//             "https://swapi.co/api/people/30/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/3/"
//         ],
//         "created": "2014-12-10T11:50:29.349000Z",
//         "edited": "2014-12-20T20:58:18.429000Z",
//         "url": "https://swapi.co/api/planets/7/"
//     },
//     {
//         "name": "Naboo",
//         "rotation_period": "26",
//         "orbital_period": "312",
//         "diameter": "12120",
//         "climate": "temperate",
//         "gravity": "1 standard",
//         "terrain": "grassy hills, swamps, forests, mountains",
//         "surface_water": "12",
//         "population": "4500000000",
//         "residents": [
//             "https://swapi.co/api/people/3/",
//             "https://swapi.co/api/people/21/",
//             "https://swapi.co/api/people/36/",
//             "https://swapi.co/api/people/37/",
//             "https://swapi.co/api/people/38/",
//             "https://swapi.co/api/people/39/",
//             "https://swapi.co/api/people/42/",
//             "https://swapi.co/api/people/60/",
//             "https://swapi.co/api/people/61/",
//             "https://swapi.co/api/people/66/",
//             "https://swapi.co/api/people/35/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/5/",
//             "https://swapi.co/api/films/4/",
//             "https://swapi.co/api/films/6/",
//             "https://swapi.co/api/films/3/"
//         ],
//         "created": "2014-12-10T11:52:31.066000Z",
//         "edited": "2014-12-20T20:58:18.430000Z",
//         "url": "https://swapi.co/api/planets/8/"
//     },
//     {
//         "name": "Coruscant",
//         "rotation_period": "24",
//         "orbital_period": "368",
//         "diameter": "12240",
//         "climate": "temperate",
//         "gravity": "1 standard",
//         "terrain": "cityscape, mountains",
//         "surface_water": "unknown",
//         "population": "1000000000000",
//         "residents": [
//             "https://swapi.co/api/people/34/",
//             "https://swapi.co/api/people/55/",
//             "https://swapi.co/api/people/74/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/5/",
//             "https://swapi.co/api/films/4/",
//             "https://swapi.co/api/films/6/",
//             "https://swapi.co/api/films/3/"
//         ],
//         "created": "2014-12-10T11:54:13.921000Z",
//         "edited": "2014-12-20T20:58:18.432000Z",
//         "url": "https://swapi.co/api/planets/9/"
//     },
//     {
//         "name": "Kamino",
//         "rotation_period": "27",
//         "orbital_period": "463",
//         "diameter": "19720",
//         "climate": "temperate",
//         "gravity": "1 standard",
//         "terrain": "ocean",
//         "surface_water": "100",
//         "population": "1000000000",
//         "residents": [
//             "https://swapi.co/api/people/22/",
//             "https://swapi.co/api/people/72/",
//             "https://swapi.co/api/people/73/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/5/"
//         ],
//         "created": "2014-12-10T12:45:06.577000Z",
//         "edited": "2014-12-20T20:58:18.434000Z",
//         "url": "https://swapi.co/api/planets/10/"
//     },
//     {
//         "name": "Geonosis",
//         "rotation_period": "30",
//         "orbital_period": "256",
//         "diameter": "11370",
//         "climate": "temperate, arid",
//         "gravity": "0.9 standard",
//         "terrain": "rock, desert, mountain, barren",
//         "surface_water": "5",
//         "population": "100000000000",
//         "residents": [
//             "https://swapi.co/api/people/63/"
//         ],
//         "films": [
//             "https://swapi.co/api/films/5/"
//         ],
//         "created": "2014-12-10T12:47:22.350000Z",
//         "edited": "2014-12-20T20:58:18.437000Z",
//         "url": "https://swapi.co/api/planets/11/"
//     }
// ]
// let info = document.createElement("ul")
// starwars.forEach((el) =>{
//     let li = document.createElement("li")
//     li.innerText = el.name+ " " +el.population
//     info.appendChild(li)
// })
// document.body.appendChild(info)

// Problem 5
// document.addEventListener("DOMContentLoaded",() =>{
//     let submit = document.querySelector("#button")
//     let list = document.createElement("ul")
//     submit.addEventListener("click",() => {
//         let li = document.createElement("li")
//         li.innerText = document.querySelector("#string").value
//         list.appendChild(li)
//     })
//     document.body.appendChild(list)
// })

//Problem 6
// document.addEventListener("DOMContentLoaded",() => {
//     let submit = document.querySelector("#button")
//     let list = document.createElement("ul")
//     submit.addEventListener("click", () => {
//         let num = document.querySelector("#number").value
//         for (let i=0; i < num; i++){
//         let li = document.createElement("li")
//         li.innerText = document.querySelector("#string").value
//         list.appendChild(li)
//         } 
//     })
//     document.body.appendChild(list)
// })

// Problem 7 (How do we get the ul to print before the p's?????)
// document.addEventListener("DOMContentLoaded",() =>{
//     let submit = document.querySelector("#button")
//     let list = document.createElement("ul")
//     list.innerText = "This is the List"
//     list.id = "list"

//     document.body.appendChild(list)

//     submit.addEventListener("click",() => {
//         let ul = document.getElementById("list");
//         let items = ul.getElementsByTagName("li");

//         const avgNum = () => {
//             let sum = 0
//             for (let li of items) {
//                 sum += Number(li.innerText)
//             }
//             let avg = sum/items.length
//             return avg
//         }

//         const max = () => {
//             let max = -Infinity
//             for (let li of items) {
//                 if (li.innerText > max){
//                     max = Number(li.innerText)
//                 }
//             }
//             return max
//         }

//         const min = () => {
//             let min = Infinity
//             for (let li of items) {
//                 if (li.innerText < min){
//                     min = Number(li.innerText)
//                 }
//             }
//             return min
//         }


//         let li = document.createElement("li")
//         li.innerText = Number(document.querySelector("#number").value)
//         list.appendChild(li)

//         p1 = document.querySelector("#p1")
//         p1.innerText = avgNum(list)
//         p2 = document.querySelector("#p2")
//         p2.innerText = max(list)
//         p3 = document.querySelector("#p3")
//         p3.innerText = min(list)

//     })
// })

//Problem 8
//  document.addEventListener("DOMContentLoaded",() =>{
//     let submit = document.querySelector("#button")        
//     submit.addEventListener("click",() => {
//         document.body.removeChild(submit)
//     })
// })

//Problem 9
document.addEventListener("DOMContentLoaded",() =>{
    let submit = document.querySelector("#submit")
    let pgraph = document.main.childNodes
    console.log(pgraph)
    debugger

    submit.addEventListener("click",() => {
        for (let node of pgraph){
            let childnode = node
            document.main.removeChild(childnode)
        }
    })
})