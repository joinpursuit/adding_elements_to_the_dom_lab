document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#submit")
    button.addEventListener("click", () => {
        let heading = document.querySelector("#text")
        let input = document.createElement("h1")
        input.innerText = heading.value
        document.body.appendChild(input)
    })
})

function copyList () {
    let inputStr= document.getElementById('text_list').value
    let inputNum = document.getElementById("num_list").value
    let newList = document.getElementById("new_list")
    for (let i = 1; i <= Number(inputNum); i++) {
      newItem = document.createElement('li')
      newItem.innerText = inputStr
      newList.appendChild(newItem)