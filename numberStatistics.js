//Make a website (`numberStatistics.html`) with a number input, a button, and 3 paragraphs.  Clicking on the button should add the number to a list.  The first paragraph should show the average of all the numbers, the second paragraph should show the maximum value, and the third paragraph should show the minimum value.

// //1. add a number to a list
// 2.how to get the numbers in the list? loop?
// 3. get numbers in list and find avergae
// 4. get numbers in list and get max
// 5. get numbers in list and get the min value

// const duplicate = () => {
//     const textInput = document.querySelector("#text-duplicator-string-input");
//     const numInput = document.querySelector("#text-duplicator-number-input");
//     let list = document.querySelector("#text-duplicator-list");
//     let num2 = Number(numInput.value);
//     debugger;
//     for (let i = 0; i < num2; i++) {
//       let li = document.createElement("li");
//       li.textContent = textInput.value;
//       list.appendChild(li);
//     }

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
