



const expectStatistics = () => {
  const number = Number(
    document.getElementById("number-statistics-number-input").value
  );
  const p1 = document.querySelector("#number-statistics-average");
  const p2 = document.querySelector("#number-statistics-maximum");
  const p3 = document.querySelector("#number-statistics-minimum");
  //let list = document.querySelectorAll("#number-list li"); //grabbing anything li in the ul , ul being the ID of number-list
  let li = document.createElement("li");
  li.textContent = number;
  document.querySelector("#number-list").appendChild(li);
  let list = document.querySelectorAll("#number-list li");
  p1.textContent = average(list);
  p2.textContent = maximum(list);
  p3.textContent = minimum(list)
  //for (let value of number) {
  //let li = document.createElement("li");
};
//};

const average = (list) => {
  let sum = 0;
  let avg = "";
  for (let item of list) {
    sum += Number(item.textContent); //sum of values in the list
  }
  avg += sum / list.length;
  return avg;
};

const maximum = (list) => {
  let maxNum = 0;
  for (let value of list) {
    if (Number(value.textContent) > maxNum) {
      console.log(value);
      maxNum = Number(value.textContent);
    }
  }
  return maxNum;
};

const minimum = (list) => {
  let minNum = Infinity;
  for (let value of list) {
    if (Number(value.textContent) < minNum) {
      console.log(value);
      minNum = Number(value.textContent);
    }
  }
  return minNum;
};


