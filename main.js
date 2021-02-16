const textDuplicator = () => {
    const input = document.getElementById('text-duplicator-string-input')
    const inputVal = input.value 
    const inputNum = document.getElementById('text-duplicator-number-input')
    const inputNumVal = Number(inputNum.value)
    for(let i = 0 ; i < inputNumVal; i++){
        let newLi = document.createElement("li")
        newLi.textContent = inputVal
        let listEl = document.getElementById('text-duplicator-list')
        listEl.appendChild(newLi)
    }
}
// let lesterListItem = document.createElement("li");
// lesterListItem.textContent = "Jon Lester (L) P";
// let listElement = document.getElementById("lineupList");
// listElement.appendChild(lesterListItem);

// Clicking the submit button will add that many copies of the string as
// list items to an unordered list with id='text-duplicator-list'