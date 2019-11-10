document.addEventListener("DOMContentLoaded", () => {

    let results = [{
            "name": "Anne"
        },
        {
            "name": "Bri"
        },
        {
            "name": "Chaz"
        },
        {
            "name": "Darlene"
        }
    ]

    let objList = document.createElement("ol");
    results.forEach(el => {
        let newLi = document.createElement("li");
        newLi.innerText = el["name"]
        objList.appendChild(newLi);

    })
    let body = document.querySelector("body");
    document.body.appendChild(objList)


    debugger

})