document.addEventListener("DOMContentLoaded", () => {

   let obj = {
        "results" : [
          { "name" : "Anne" },
          { "name" : "Bri" },
          { "name" : "Chaz" },
          { "name" : "Darlene" }
        ]
       }
    let results = obj.results
    console.log(results)
    for(let key of results){
        let name = document.createElement("li")
        name.innerText = key.name
        document.body.appendChild(name)
    }
})