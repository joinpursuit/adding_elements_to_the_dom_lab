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
//const array = [] is a global array that can be added
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

//Sparky Example
// steps 1.grab user Input
// 2. creat an li and give it the user input value
// 3. add input to the list of numbers the unordered list
// 4. then grab all li elements
// 5. iterate through the li elements and calculate avg
// 6. calculate max
// 7 calculate min
// 8 add these numbers (max,min,avg) to the p tags

// const calulate = () => {
//   const input = document.querySelector("#number-statistics-number-input")
//     .valueAsNumber; //valueAsNumber changes the value to a number it replaces Number
//   const li = document.createElement("li");
//   li.textContent = input;
//   document.querySelector("#number-statistics-numbers").appendChild("li");

//   const listItems = document.querySelectorAll("#number-statistics-number li"); //this says select li can also use > decendants selectors
//   let max = -Infinity;
//   let min = Infinity;
//   let sum = 0;

//   for (let el of listItems) {
//     sum += Number(el.textContent);
//   }
//   for (let el of listItems) {
//     let num = Number(el.textContent);
//     if (max < num) {
//       max = num;
//     }
//   }
//   for (let el of listItems) {
//     let num = Number(el.textContent);
//     if (min < num) {
//       min = num;
//     }
//   }
//   const avg = sum / listItems.length;
//   const average = (document.querySelector("#number-statistics-average")
//     //const average is a variable
//   average.textContent = `This is the average ${avg}`; //created a new key of textContent and gave it = avg, this line we are reassigning the p tag to average

//   const maximum = document.querySelector("#number-statistics-maximum")
//   maximum.textContent = `This is the maximum ${max}`

//   const minimum = document.querySelector("#number-statistics-minimum")
//   minimum.textContent = `This is the minimum ${min}`
// };
