const statistics = () => {
    const numberInput = Number(document.querySelector('#number-statistics-number-input').value);
    const li = document.createElement('li');
    li.classList.add('number');
    li.textContent = numberInput;
    document.querySelector('#number-statistics-numbers').appendChild(li);

const listNumber = document.querySelectorAll('.number');
pAve = document.querySelector('#number-statistics-average');
pMax = document.querySelector('#number-statistics-maximum');
pMin = document.querySelector('#number-statistics-minimum');
let sum = 0;
let average = 0;
let max = 0;
let min = 0;
let numArray = [];
for(let i = 0; i < listNumber.length; i++){
    number = Number(listNumber[i].textContent);
    numArray.push(number);
    sum += number;
}
console.log(numArray)
max = Math.max(...numArray);
min = Math.min(...numArray);
average = sum/listNumber.length;

pAve.textContent = average;
pMax.textContent = max;
pMin.textContent = min;
}
