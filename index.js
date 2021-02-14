const textDup = () => {
  const numInput = document.getElementById("text-duplicator-number-input")
    .value;
  const textInput = document.getElementById("text-duplicator-string-input");

  for (let i = 0; i < numInput; i++) {
    let li = document.createElement("li");
    console.log(textInput.value);
    li.textContent = textInput.value;
    document.getElementById("text-duplicator-list").appendChild(li);
  }
};

const numStat = () => {
  let minMaxArray = [];
  let input = document.getElementById("number-statistics-number-input").value;
  let list = document.getElementById("number-statistics-numbers");
  const newLi = document.createElement("li");
  newLi.textContent = input;
  newLi.id = "numLi";
  list.appendChild(newLi);
  let allNum = document.querySelectorAll("#numLi");
  let sum = 0;
  allNum.forEach((el) => {
    minMaxArray.push(Number(el.textContent));
    sum += Number(el.textContent);
  });
  document.getElementById(
    "number-statistics-average"
  ).innerText = `The average is: ${sum / allNum.length}`;
  document.getElementById(
    "number-statistics-maximum"
  ).innerText = `The max is: ${Math.max(...minMaxArray)}`;
  document.getElementById(
    "number-statistics-minimum"
  ).innerText = `The min is:${Math.min(...minMaxArray)}`;
};

let objectUserList = {
  results: [
    {
      gender: "female",
      name: {
        title: "mademoiselle",
        first: "ruth",
        last: "nicolas",
      },
      nat: "CH",
    },
    {
      gender: "female",
      name: {
        title: "miss",
        first: "رها",
        last: "سلطانی نژاد",
      },
      nat: "IR",
    },
    {
      gender: "female",
      name: {
        title: "mrs",
        first: "patricia",
        last: "hale",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "fernando",
        last: "cooper",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "mrs",
        first: "یسنا",
        last: "صدر",
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "eino",
        last: "tuomala",
      },
      nat: "FI",
    },
    {
      gender: "female",
      name: {
        title: "ms",
        first: "gonca",
        last: "özkara",
      },
      nat: "TR",
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "kyle",
        last: "castillo",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "miss",
        first: "olivia",
        last: "kumar",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "monsieur",
        first: "raymond",
        last: "durand",
      },
      nat: "CH",
    },
  ],
  info: {
    seed: "2cb086ce097c87ee",
    results: 10,
    page: 1,
    version: "1.2",
  },
};
let array = Object.values(objectUserList)["0"];

const userListRandom = (array) => {
  let list = document.createElement("li");
  list.textContent = `${array.name.first} ${array.name.last} (${array.nat})`;
  return list;
};

let users = objectUserList.results;
let ulList = document.getElementById("user-list");
users.forEach((array) => {
  let callUserList = userListRandom(array);
  ulList.appendChild(callUserList);
});
