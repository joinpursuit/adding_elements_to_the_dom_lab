// made into functions with Sparky's guidance
const numberStatistics = () => {

liNewTag()

  const listItems = [...document.querySelectorAll(".numbers")];
  console.log(listItems)
  debugger

  let sum = sumNum(listItems);
  let avg = sum / listItems.length;
  document.querySelector("#number-statistics-average").textContent = `This is the avg ${avg}`;

  let min = minimum(listItems);
  document.querySelector("#number-statistics-minimum").textContent = `This is the min number ${min}`;

  let max = maximum(listItems);
  document.querySelector("#number-statistics-maximum").textContent = `This is the max number ${max}`;
};

const maximum = (listItems) => {
  let max = -Infinity;
  listItems.forEach(li => {
    if (li.textContent > max) {
      max = Number(li.textContent);
    }
  }) 
  return max;
};

const sumNum = (listItems) => {
  let sum = 0;
  listItems.forEach(li => {
    sum += Number(li.textContent);
  }) 
  return sum;
  }


const minimum = (listItems) => {
  let min = Infinity;
  listItems.forEach (li => {
    if (li.textContent < min) {
      min = Number(li.textContent);
    }
  }) 
  return min;
}

   
const liNewTag = () => {
    let userInput = Number(document.querySelector("#number-statistics-number-input").value);
    let liTag = document.createElement("li");
    liTag.classList.add("numbers");
    liTag.textContent = userInput;
    document.querySelector("#number-statistics-numbers").appendChild(liTag); // use proper css selector "#number-statistics-numbers li"
}

