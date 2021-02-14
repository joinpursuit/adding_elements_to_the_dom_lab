const textDuplicate = () => {

    const textInput = document.querySelector("#text-duplicator-string-input").value;
    const number = Number(document.querySelector("#text-duplicator-number-input").value);
    const ul = document.querySelector("#text-duplicator-list");

    for (let i = 0; i < number; i++) {
        let li = document.createElement("li")
        li.textContent = textInput
        ul.appendChild(li);
    }

}