const numberStats = () => {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    let count = 0;
    let tempMax = -Infinity;
    let tempMin = Infinity;
    let inputNumber = document.querySelector("#number-statistics-input").value;
    let listElement = document.querySelector("#number-statistics-numbers");
    let newList = document.createElement("li");
    let avgPara = document.getElementById("number-statistics-average");
    let maxPara = document.getElementById("number-statistics-maximum");
    let minPara = document.getElementById("number-statistics-minimum");
    listElement.appendChild(newList);
    newList.textContent = inputNumber;
    count++
    sum+=Number(inputNumber);
    avgPara.innerText = sum/count;
    tempMax = Number(inputNumber);
    tempMin = Number(inputNumber);
    if (tempMax > max) {
        max = tempMax;
    }
    if (tempMin < min) {
        min = tempMin;
    }
    maxPara.innerText = max;
    minPara.innerText = min;
};