const numberInput = document.getElementById("number-statistics-number-input");
const submit = document.querySelector("#number-statistics-form button");
const listOutput = document.getElementById("number-statistics-numbers");
const averageOutput = document.getElementById("number-statistics-average");
const maximumOutput = document.getElementById("number-statistics-maximum");
const minimumOutput = document.getElementById("number-statistics-minimum");
const numbers = [];

submit.addEventListener("click", (event) => {
  event.preventDefault();
  numbers.push(Number(numberInput.value));

  let sum = numbers[0];
  let maximum = numbers[0];
  let minimum = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    sum += numbers[i];
    maximum = Math.max(maximum, numbers[i]);
    minimum = Math.min(minimum, numbers[i]);
  }

  averageOutput.textContent = sum / numbers.length;
  maximumOutput.textContent = maximum;
  minimumOutput.textContent = minimum;

  const item = document.createElement('li')
  item.textContent = numberInput.value;
  listOutput.appendChild(item);
});
