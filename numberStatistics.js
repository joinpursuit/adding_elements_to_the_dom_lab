let arrOfNums = [];
const numStatistics = () => {
  let numInput = Number(
    document.querySelector("#number-statistics-number-input").value);
  let listUl = document.querySelector("#number-statistics-numbers");
  let listLi = document.createElement("li");
  let avgNumList = document.querySelector("#number-statistics-average");
  let maxNumList = document.querySelector("#number-statistics-maximum");
  let minNumList = document.querySelector("#number-statistics-minimum");

  listLi.innerText = numInput;
  listUl.appendChild(listLi);

  arrOfNums.push(numInput);

  const averageOfNums = (inputArr) => {
    let avgOfNums = 0;
    let sumOfNums = 0;
    for (let i = 0; i < inputArr.length; i++) {
      sumOfNums += inputArr[i];
      avgOfNums = sumOfNums / inputArr.length;
    }
    return sumOfNums / inputArr.length;
  };

  averageOfNums(arrOfNums);
  console.log(averageOfNums(arrOfNums));

  const maxStat = (inputArr) => {
    let maxInput = inputArr[0];

    for (let i = 1; i < inputArr.length; i++) {
      let currentValue = inputArr[i];
      maxInput = currentValue > maxInput ? currentValue : maxInput;
    }
    return maxInput;
  };

  maxStat(arrOfNums);

  const minStat = (inputArr) => {
    let minInput = inputArr[0];

    for (let i = 1; i < inputArr.length; i++) {
      let currentValue = inputArr[i];
      minInput = currentValue < minInput ? currentValue : minInput;
    }
    return minInput;
  };

  minStat(arrOfNums);

  avgNumList.textContent = `The average of all numbers is: ${averageOfNums(arrOfNums)}`;
  minNumList.textContent = `The maximum value of all numbers is: ${minStat(arrOfNums)}`;
  maxNumList.textContent = `The minimum value of all numbers is: ${maxStat(arrOfNums)}`;
};