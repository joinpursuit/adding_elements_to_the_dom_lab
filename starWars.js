

starWarsObj.forEach(planets => {
  const list = document.createElement("li");
  let name = planets["name"];
  let pop = planets["population"];
  list.textContent = `${name} (pop. ${pop})`;
  document.querySelector("#planets-list").appendChild(list);
});

