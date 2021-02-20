const textDuplicator = () => {
    let str = document.querySelector("#text-duplicator-string-input");
    let num = document.querySelector("#text-duplicator-number-input");
    let list = document.querySelector("#text-duplicator-list");
    let numVal = Number(num.value);
    for (let i = 0; i < numVal; i++) {
      let li = document.createElement("li");
      li.textContent = str.value;
      list.appendChild(li);
    }
}