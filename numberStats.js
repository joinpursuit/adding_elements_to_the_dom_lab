
const arrOfNum = []

const numStats = () => {
    const number = Number(document.querySelector("#number-statistics-number-input").value);
    let maxNum = document.querySelector("#number-statistics-maximum");
    let minNum = document.querySelector("#number-statistics-minimum");
    let aveOfNums = document.querySelector("#number-statistics-average");
    let total = 0;
        arrOfNum.push(number);
    for (let j = 0; j < arrOfNum.length; j++) {
        total += arrOfNum[j];
        if (arrOfNum.length === 1) {
            maxNum.textContent = arrOfNum[j]; 
            minNum.textContent = arrOfNum[j]; 
            aveOfNums.textContent = arrOfNum[j]; 
        } else {
            maxNum.textContent = Math.max(...arrOfNum);
            minNum.textContent = Math.min(...arrOfNum);
            aveOfNums.textContent = total / arrOfNum.length;
        }
    }
}