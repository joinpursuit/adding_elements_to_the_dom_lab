const numberStatistics = () => {
  let userInput = document.querySelector("#number-statistics-number-input").value;
  let liTag = document.createElement("li");
  liTag.classList.add("numbers");
  liTag.textContent = Number(userInput);
  document.querySelector("#number-statistics-numbers").appendChild(liTag);

  const listItems = document.querySelectorAll(".numbers");  
  
  let count = 0;
  let sum = 0;
  for (const li of listItems) {
    if (li) {
      count++;
    }
  }

  for (const li of listItems) {
    if (li) {
      sum += Number(li.textContent);
    }
  }

  let avg = sum / count;
  document.querySelector("#number-statistics-average").textContent = `This is the avg ${avg}`;
  
  let min = Infinity;
  for (const li of listItems) {
    if (li.textContent < min) {
      min = Number(li.textContent);
      document.querySelector("#number-statistics-minimum").textContent = `This is the min number ${min}`;
    }
  }

  let max = -Infinity;
  for (const li of listItems) {
    if (li.textContent > max) {
      max = Number(li.textContent);
      document.querySelector("#number-statistics-maximum").textContent = `This is the max number ${max}`;
    }
  }
};
