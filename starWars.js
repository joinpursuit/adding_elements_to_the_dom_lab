

starWarsObj.forEach(planets => {
  const list = document.createElement("li");
  let name = planets["name"];
  let pop = planets["population"];
  console.log(starWarsObj.name)
  list.textContent = `${name} (pop. ${pop})`;
  document.querySelector("#planets-list").appendChild(list);
});

