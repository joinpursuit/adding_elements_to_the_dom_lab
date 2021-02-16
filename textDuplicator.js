const textDuplicator = () => {
  const inputStr = document.querySelector("#text-duplicator-string-input").value;
  const ul = document.querySelector("#text-duplicator-list");
  let inputNum = Number(
    document.querySelector("#text-duplicator-number-input").value
  );
  let str = "";
  for (let i = 1; i <= inputNum; i += 1) {
    let dup = document.createElement("li");
      str += inputStr;
      dup.textContent = str;
    
    ul.appendChild(dup);
  }
};
