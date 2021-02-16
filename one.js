const duplicate = () => {
  let inputText = document.getElementById("text-duplicator-string-input");
  let inputTextValue = inputText.value;
  let inputNumber = document.getElementById("text-duplicator-number-input");
  let inputNumValue = inputNumber.value;
  let listElement = document.getElementById("text-duplicator-list");
  for (let i = 0; i < inputNumValue; i++) {
    let newList = document.createElement("li");
    newList.textContent = inputTextValue;
    listElement.appendChild(newList);
  }
};
