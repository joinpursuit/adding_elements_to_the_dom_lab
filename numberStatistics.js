const getAverage = () => {
    let num = Number(document.querySelector("#number-statistics-number-input").value);

    let uList = document.querySelector("#number-statistics-numbers");

    let listItem = document.createElement("li");
    listItem.textContent = num;
    uList.appendChild(listItem);

    let listLength = uList.children.length;

    let sum = 0;
    for(let i=0; i<listLength; i++){
        sum += parseInt(uList.children[i].innerHTML)
    }
    
    document
    .querySelector("#number-statistics-average")
    .textContent = sum/listLength;

    let numArray = [];
    for(let i=0; i<listLength; i++){
        numArray[i] = parseInt(uList.children[i].textContent)
    }

    let minimum = numArray[0];
    numArray.forEach(num => {
        num <= minimum ? minimum = num : minimum;
    });

    document
    .querySelector("#number-statistics-minimum")
    .textContent = minimum;

    let maximum = numArray[0];
    numArray.forEach(num => {
        num >= maximum ? maximum = num : maximum;
    });

    document
    .querySelector("#number-statistics-maximum")
    .textContent = maximum;

    


}