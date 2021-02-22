function textDuplicator() {
  const stringInput = document.getElementById("text-duplicator-string-input")
    .value;
  const numberInput = document.getElementById("text-duplicator-number-input")
    .value;
  const dupList = document.querySelector("#text-duplicator-list");

  for (let i = 0; i < numberInput; i++) {
    const addStringLi = document.createElement("li");
    addStringLi.textContent = stringInput;

    dupList.appendChild(addStringLi);
  }
}
