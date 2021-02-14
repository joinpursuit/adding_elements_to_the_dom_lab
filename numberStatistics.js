const numStats = () => {
  let average = document.getElementById("number-statistics-average");
  let maximum = document.getElementById("number-statistics-maximum");
  let minimum = document.getElementById("number-statistics-minimum");
  const input = Number(
    document.getElementById("number-statistics-number-input").value
  );
  const ul = document.getElementById("number-statistics-numbers");
  let li = document.createElement("li");
  li.classList.add("number");
  li.textContent = input;
  ul.appendChild(li);
  const list = document.getElementsByClassName("number");
  let avg = 0;
  let min = Infinity;
  let max = -Infinity;
  let total = 0;
  for (let el of list) {
    let num = Number(el.textContent);
    total += num;
    console.log(el);
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }

  avg = total / list.length;
  average.textContent = avg;
  minimum.textContent = min;
  maximum.textContent = max;
};

//     let averageInput = Number(document.getElementById("number-statistics-average").value);
//     let maxInput = Number(document.getElementById("number-statistics-maximum").value);
//     let minInput = Number(document.getElementById("number-statistics-minimum").value);
//     let numInput = Number(document.getElementById("number-statistics-number-input").value);
//     let li = document.createElement("li")
//     li.textContent = numInput
//     list.appendChild(li)
//     let list = document.getElementById("number-statistics-numbers");
//     let min = Infinity
//     for (let i = 0; i < numInput; i++) {
//         if (numInput < min) {
//             min = numInput[i]
//         }
//         minInput.textContent = min
//     }
// }
