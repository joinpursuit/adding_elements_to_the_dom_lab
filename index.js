document.addEventListener("DOMContentLoaded", () => {


    // Question 1
    const changeHead = () => {
        let str = document.querySelector("#string").value;
        document.querySelector("#head1").innerText = str;
    }

    let submit = document.querySelector("#changeHeadingBtn");
    submit.addEventListener("click", ()=> {
        changeHead();
    })



    // Question 2
    let obj = {
        "results" : [
          { "name" : "Anne" },
          { "name" : "Bri" },
          { "name" : "Chaz" },
          { "name" : "Darlene" }
        ]
    }
    let ul2 = document.querySelector("#ul2")
    obj.results.forEach((el) => {
        let li = document.createElement("li")
        li.innerText = el["name"];
        ul2.appendChild(li);
    })



    // Question 3 
    let userObj = {
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
    let ul3 = document.querySelector("#ul3")
    userObj.results.forEach((el) => {
        let li = document.createElement("li")
        li.innerText = "First Name: " + el["name"]["first"] + ", " + "Last Name: " + el["name"]["last"] + ", " + "Nationality: " + el["nat"];
        ul3.appendChild(li);
    })



    // Question 4
    let starWarsObj = {
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
      let ul4 = document.createElement("ul");
      starWarsObj.results.forEach((el) => {
          let li = document.createElement("li")
          li.innerText =  `Name: ${el["name"]}, Population: ${el["population"]}`;
          ul4.appendChild(li);
      })
      document.querySelector("#question4").appendChild(ul4);



    // Question 5
    let ul5 = document.createElement("ul");

    const addList = () => {
      let li = document.createElement("li");
      li.innerText = document.querySelector("#str5").value
      ul5.appendChild(li);
    }

    let addToListBtn = document.querySelector("#addListBtn")
    addToListBtn.addEventListener("click", () => addList())
    document.querySelector("#question5").appendChild(ul5);



    // Question 6
    let ul6 = document.createElement("ul");
    const addCopies = () => {
      if(typeof document.querySelector("#str6").innerText !== "string" || !Number(document.querySelector("#num6").value)){
        alert("Please enter valid string or number of copies");
      } else {
        for(let i = 0; i < document.querySelector("#num6").value; i++){
          let li = document.createElement("li");
          li.innerText = document.querySelector("#str6").value
          ul6.appendChild(li);
        }
      }
    }

    let addCopiesBtn = document.querySelector("#addCopiesBtn")
    addCopiesBtn.addEventListener("click", addCopies);
    document.querySelector("#question6").appendChild(ul6);


    // Question 7
    
    let ul7 = document.createElement("ul");
    const addNumList = () => {
      let li = document.createElement("li");
      if(!Number(document.querySelector("#num7").value)){
        alert("Please enter a valid number")
      } else {
        li.innerText = document.querySelector("#num7").value
        ul7.appendChild(li).id = 'item';
      }
      document.querySelector("#avgNums").innerText = average() 
      document.querySelector("#maxVal").innerText = maxVal();
      document.querySelector("#minVal").innerText = minVal();
    }
    let addNumBtn = document.querySelector("#addNumBtn");
    addNumBtn.addEventListener("click", addNumList)
    document.querySelector("#question7").appendChild(ul7);

    const average = () => {
        let sum = 0;
        let ulArr = document.querySelectorAll("#item");
        ulArr.forEach((el) => {
            sum += Number(el.innerText);
        })
        return sum / ulArr.length;
    }
    
    const maxVal = () => {
        let ulArr = document.querySelectorAll("#item");
        let largest = -Infinity;
        ulArr.forEach((el) => {
            if(Number(el.innerText) > largest){
                largest = Number(el.innerText);
            }
        })
        return largest;
    }
    
    const minVal = () => {
        let ulArr = document.querySelectorAll("#item");
        let smallest = Infinity;
        ulArr.forEach((el) => {
            if(Number(el.innerText) < smallest){
                smallest = Number(el.innerText);
            }
        })
        return smallest;
    }

})

// Question 8
const removeBtn = () => {
    let button = document.querySelector("#removeBtn");
    button.parentNode.removeChild(button);
}


//Question 9
const removePar = () => {
  let section = document.querySelectorAll("#div9");
  section.forEach((el) => {
      el.parentNode.removeChild(el);
  })
}

// const addPar = () => {
//   let section = document.querySelector("#div9");
//   let para = document.createElement("p");
//   para.innerText = "Make this new paragraph disappear!"
//   section.appendChild(para);
// }

document.addEventListener("DOMContentLoaded", () => {

    // Question 10 

    const changeSize = () => {

      let h10 = document.getElementById("head10");
      let headerText = document.querySelector("#head10").innerText
      let newSize = document.querySelector("#num10").value;

      if(newSize < 1 || newSize > 6){
        alert("Please use heading levels 1-6")
      } else {
        let newTag = document.createElement("h"+newSize);
        newTag.innerText = headerText;

        // copies attributes over to newTag : source reference --> stackoverflow
        for(let i = h10.attributes.length - 1; i >= 0; --i){
          newTag.attributes.setNamedItem(h10.attributes[i].cloneNode());
        }

        h10.parentNode.replaceChild(newTag, h10);
      }
    }

    let changeSizeBtn = document.querySelector("#changeSizeBtn");
    changeSizeBtn.addEventListener("click", () => changeSize());

})




