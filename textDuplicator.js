const duplicate = () => {
    const stringInput = document.getElementById("text-duplicator-string-input");
    const numberInput = document.getElementById("text-duplicator-number-input");
    const string = stringInput.value;
    const number = numberInput.value;
    const output = document.getElementById("text-duplicator-list")

    for(let i = 0; i < number; i++){
        const listItem = document.createElement("li");
        listItem.textContent += string;
        output.appendChild(listItem);
    }
}