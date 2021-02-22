function duplicate() {
    let inputText = document.querySelector("#text-duplicator-string-input")
    let inputTextValue = inputText.value
    let inputNumber = document.querySelector("#text-duplicator-number-input")
    let inputNumberValue = Number(inputNumber.value)
    let outputValue = document.querySelector("#text-duplicator-list")
    for (let i = 0; i < inputNumberValue; i++) {
        let newList = document.createElement("li");
        newList.textContent = inputTextValue.repeat(inputNumberValue);
        outputValue.appendChild(newList)
    }
}