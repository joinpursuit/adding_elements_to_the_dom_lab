//2
document.addEventListener("DOMContentLoaded", () => {
    let namesObj = {
        "results" : [
          { "name" : "Anne" },
          { "name" : "Bri" },
          { "name" : "Chaz" },
          { "name" : "Darlene" }
        ]
      }
      let namesList = document.createElement("ul")
      namesObj.results.forEach((name) => {
          let li = document.createElement("li")
          li.innerText = name["name"]
          namesList.appendChild(li)
      })
      document.body.appendChild(namesList)
})