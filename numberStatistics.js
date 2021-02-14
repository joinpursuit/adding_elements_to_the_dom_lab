const numberStats = () => {
  let inputValues = Number(
    document.querySelector("#number-statistics-number-input").value
  );
  const ulStats = document.querySelector("#number-statistics-numbers");
  const p1 = document.querySelector("#number-statistics-average");
  const p2 = document.querySelector("#number-statistics-maximum");
  const p3 = document.querySelector("#number-statistics-minimum");

  let stats = document.createElement("li");
  stats.textContent = inputValues;
  ulStats.appendChild(stats);
  let li = document.querySelectorAll("#number-statistics-numbers li");
  // get the right li list; selector
  // for each
  //   debugger;
  let arr = [];
  li.forEach((stats) => {
    console.log(stats.textContent);
    arr.push(Number(stats.textContent));
  });
  let sum = 0;
  for (let num of arr) {
      sum+=num
  }
  let avg = sum / arr.length
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);

  p1.innerText = `The average of ${avg}`;
  p2.innerText = `The maximum of ${maxNum}`;
  p3.innerText = `The minimum of ${minNum}`;
};
