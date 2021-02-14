const duplicator = () => {
    // let duplicate = 1;
    const stringInput = document.getElementById("text-duplicator-string-input").value;
    // const copy = stringInput.textContent.slice
    const numInput = Number(document.getElementById("text-duplicator-number-input").value);
    // const number = parseInt(numInput);
    const list = document.getElementById("text-duplicator-list");
    for (let i= 0; i < numInput; i++){
        let duplicate = document.createElement('li');
        duplicate.textContent = stringInput;
        list.appendChild(duplicate);
    }
   
}

