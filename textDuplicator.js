const copyText = () => {
  let userString = document.querySelector("#text-duplicator-string-input")
    .value;
  let userNum = Number(document.querySelector("#text-duplicator-number-input").value);

  //    let numberOfCopies = Number(object.values(userNum))

  for (let i = 0; i < userNum; i++) {
    let duplicateString = document.createElement("li");
    let unorderedList = document.getElementById("text-duplicator-list");

    duplicateString.textContent = userString;
    unorderedList.appendChild(duplicateString);
  }
};
