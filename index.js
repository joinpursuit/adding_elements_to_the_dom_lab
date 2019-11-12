const changeHeading = () => {
  let heading = document.querySelector("#inpuHeading")
  let newHeading = heading.value
  if(newHeading){
    document.querySelector("#heading1").innerHTML = newHeading
  }
}
const addingList = () =>{
  let input = document.querySelector("#inputList")
  let inputV = input.value
  if(inputV){
    // let addUl = document.createElement("ul")
    let addLi = document.createElement("li")
    addLi.innerText = inputV
    document.querySelector("body > ul").appendChild(addLi)
    document.body.appendChild(addUl)
  }
}

const copyNumber = () =>{
  let input = document.querySelector("#inputNum")
  let inputWord = document.querySelector("#inputText").value
  let inputV = input.value
  for(let i=0;i<inputV;i++){
    let addNumLi = document.createElement("li")
    addNumLi.innerText = inputWord
    document.querySelector("body > ul:nth-child(18)").appendChild(addNumLi)
  }
}


let newArr = []

  const avg = ()=>{
    let sum = 0
    for (el of newArr){
      sum+=Number(el)
    }
    return (sum/newArr.length)
  }
  
  const largest = () =>{
    let largest = Number(newArr[0]);
    console.log(largest)
    for(el of newArr){
      if (largest<Number(el)){
        largest=Number(el)
      }
    }
    return largest 
  }

  const min = () =>{
      let min = Number(newArr[0]);
      for(el of newArr){
          if(min>Number(el)){
              min=Number(el)
            }
          }
          return min
          }

const addN = () =>{
  let input= document.querySelector("#inputNum2")
  let inputV = input.value
  if(inputV){
    let addLi = document.createElement("li")
    newArr.push(inputV)
    addLi.innerText=newArr

          document.querySelector("#ulNum").appendChild(addLi)
          document.querySelector("#p1").innerText=avg()
          document.querySelector("#p2").innerText=largest()
          document.querySelector("#p3").innerText=min()
        }            
          }
 
          
          document.addEventListener("DOMContentLoaded", ()=> {
            let button = document.createElement("button")
            button.innerText="press to Remove"
            document.querySelector("body").appendChild(button)
            button.addEventListener("click",()=>{
              document.querySelector("body").removeChild(button)  
            })

            let h9 = document.createElement("h1")
            h9.innerText = "Question Nine"
            document.querySelector("body").appendChild(h9)
            
            const mkPara = () =>{
              for(let i=0; i<5; i++){
                let newP = document.createElement("p")
                newP.id = "p9"
                newP.innerText=`it new paragraph${i}`
                document.querySelector("body").appendChild(newP)
              }
            }
            mkPara();

            let button2 = document.createElement("button")
            button2.innerText="press to Remove paragraph"
            document.querySelector("body").appendChild(button2)
            button2.addEventListener("click",()=>{
              document.querySelector("body").removeChild(document.querySelector("#p9"))
            })  

              let hNum ="h1"
            let h10 = document.createElement(hNum)
            h10.innerText = "Question Ten"
            h10.id = "h10"
            document.querySelector("body").appendChild(h10)
            let textbox10 = document.createElement("input")
            textbox10.setAttribute("type", "number");
            document.querySelector("body").appendChild(textbox10)

            let button3 = document.createElement("button")
            button3.innerText="press to Change Heading style"
            document.querySelector("body").appendChild(button3)
            button3.addEventListener("click",()=>{
              let num = textbox10.value //saving the value of the number entered in textbox
              console.log(num)
              hNum = "h"+num //addin the number to hNum with h in front - ex. "h" + 1 = "h1"
              
            })  



            
            let obj = {
              "results" : [
                { "name" : "Anne" },
                { "name" : "Bri" },
                { "name" : "Chaz" },
                { "name" : "Darlene" }
              ]
            }
            
            // let ul = document.createElement("ul")
            
      let newArr =obj.results
      newArr.forEach((el) =>{
        let li = document.createElement("li")
        console.log(li)
        li.innerText = el.name
        console.log(el)
        document.querySelector("body > ul:nth-child(11)").appendChild(li)
        // debugger

    })


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
    document.querySelector("body > ul:nth-child(11)").appendChild(li2)
    // debugger

}
)

let obj3 = {
  "results": [
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
}

let newArr3 = obj3.results
newArr3.forEach((el) =>{
  let li3 = document.createElement("li")
  console.log(li3)
  li3.innerText = (`${el.name}, ${el.population}`)  
  console.log(el)
  document.querySelector("body > ul:nth-child(11)").appendChild(li3)
  // debugger

})
// document.body.appendChild(ul)
let hr3 = document.createElement("hr")
document.body.appendChild(hr3)


})




    
      