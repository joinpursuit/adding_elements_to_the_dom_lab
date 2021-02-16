//Clicking on the button should add that many copies of the text in the text input to a list.
const duplicate = () => {
  const textInput = document.querySelector("#text-duplicator-string-input");
  const numInput = document.querySelector("#text-duplicator-number-input");
  let list = document.querySelector("#text-duplicator-list");
  let num2 = Number(numInput.value);
  debugger;
  for (let i = 0; i < num2; i++) {
    let li = document.createElement("li");
    li.textContent = textInput.value;
    list.appendChild(li);
  }

  //textInput.forEach((el) => {
  //const li = document.createElement("li");
  //li.textContent = numInput * textInput;
  //list.appendChild(li);
};
//};

//#text-duplicator-list li
//get("#text-duplicator-list li")
//  .should("have.length", i + 3)
