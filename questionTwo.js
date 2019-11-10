document.addEventListener("DOMContentLoaded", () =>{
    let results = [
        { "name" : "Anne" },
        { "name" : "Bri" },
        { "name" : "Chaz" },
        { "name" : "Darlene" }
      ];
      let ul = document.createElement("ul")
      results.forEach(el =>{
          let li = document.createElement("li")
          li.innerText = el.name
          ul.appendChild(li)
      })

      document.body.appendChild(ul)
})
console.log("hey boooo")