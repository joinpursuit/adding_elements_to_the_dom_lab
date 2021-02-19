
const duplicatorFunction = () => {
    const str = document.querySelector("#text-duplicator-string-input").value;
    const num = Number(document.querySelector("#text-duplicator-number-input").value);
    const ul = document.querySelector("#text-duplicator-list");

    for (let i=0 ; i < num ; i++) {
        let li = document.createElement("li");
        li.textContent = str;
        ul.appendChild(li);
    }
}
