const duplicateText = () => {
    const stringInput = document.querySelector("#text-duplicator-string-input").value
    const numInput = Number(document.querySelector("#text-duplicator-number-input").value)
    for(let i = 0; i < numInput; i++) {
        let li = document.createElement("li");
        li.textContent = stringInput
        document.querySelector("#text-duplicator-list").appendChild(li);
    }
}







