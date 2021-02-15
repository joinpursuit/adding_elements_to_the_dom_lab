//WORKING FOR INPUT
const duplicateText = () => {
    const stringInput = document.querySelector("#text-duplicator-string-input").value
    const numInput = Number(document.querySelector("#text-duplicator-number-input").value)
    // const li = document.createElement("li")
    // document.querySelector("#text-duplicator-list").appendChild(li)
    // li.textContent = stringInput
    for(let i = 0; i < numInput; i++) {
        let li = document.createElement("li");
        li.textContent = stringInput
        // li.appendChild(document.createTextNode(stringInput));
        document.querySelector("#text-duplicator-list").appendChild(li);
    }
}

// const duplicateText = () => {
//     const stringInput = document.querySelector("#text-duplicator-string-input").value
//     const numInput = document.querySelector("#text-duplicator-number-input").value
//     const ul = document.querySelector("#text-duplicator-list").value
    // for(let i = 0; i < stringInput.length; i++) {
    //     const string = stringInput[i]
    //     const li = document.createElement("li")
    //     li.appendChild(document.createTextNode(string))
    //     ul.appendChild(li)*numInput
//     }
// }





