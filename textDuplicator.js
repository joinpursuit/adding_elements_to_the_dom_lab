function duplicateIt() {
  const text = document.getElementById("text-duplicator-string-input").value;
  const number = Number(
    document.getElementById("text-duplicator-number-input").value
  );

  const output = document.getElementById("text-duplicator-list");

  for (let i = 0; i < number; i++) {
    const newLi = document.createElement("li");
    newLi.textContent += text;
    output.appendChild(newLi);
  }
}
