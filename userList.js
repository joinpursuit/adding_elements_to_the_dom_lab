const nationalities = {
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

nationalities.results.forEach((el) => {
  const listTag = document.createElement("li"); // .createElement() is a method, document is an object, .value/.textContent is a property
  // ln 202 is just declaring that we are gonna create li we have not actually created the li
  let first = el.name.first;
  let last = el.name.last;
  let nat = el.nat;
  listTag.textContent = `${first} ${last} (${nat})`;
  document.querySelector("#user-list").appendChild(listTag);
});
