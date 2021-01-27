const numberInput = document.getElementById("text-duplicator-number-input");
const stringInput = document.getElementById("text-duplicator-string-input");
const submit = document.querySelector("#text-duplicator-form button");
const list = document.getElementById("text-duplicator-list");

submit.addEventListener("click", event => {
    event.preventDefault();

    const times = Number(numberInput.value);
    const text = stringInput.value;

    for (let i = 0; i < times; i += 1) {
        const item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
    }
})
