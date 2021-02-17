function duplicator() {
    //create variables for input
    const stringInput = document.getElementById('text-duplicator-string-input').value
    const numInput = Number(document.getElementById('text-duplicator-number-input').value)
    //create variable for list
    const listElement = document.getElementById('text-duplicator-list')
    //now put them together and list!

    for (let i = numInput; i > 0; i--) {
    const output = document.createElement("li")
    output.textContent = stringInput.repeat(numInput)
    listElement.appendChild(output)
    }
}