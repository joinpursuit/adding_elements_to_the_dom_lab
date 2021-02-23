// by Jordan and Adam
const nums = [];

const numberStatistics = () => {
  const userInput = Number(document.querySelector("#number-statistics-number-input").value);
  const avg = document.querySelector("#number-statistics-average");
  const max = document.querySelector("#number-statistics-maximum");
  const min = document.querySelector("#number-statistics-minimum");
  let sum = 0;
  
  nums.push(userInput);
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
    if (nums.length === 1) {
      avg.textContent = userInput;
      max.textContent = userInput;
      min.textContent = userInput;
    } else {
        avg.textContent = Math.round(sum / nums.length);
        max.textContent = Math.max(...nums);
        min.textContent = Math.min(...nums);
    }
  }
};
