const stringCopies = () => {
    const textInput = document.querySelector("#text-duplicator-string-input").value;
    const numberInput = Number(document.querySelector("#text-duplicator-number-input").value);
    let i = 0;
    while (i < numberInput) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(textInput));
        // li.textContent = textInput;
        document.querySelector("#text-duplicator-list").appendChild(li);
        i++
    }
    


}