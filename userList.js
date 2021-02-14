window.onload = function () {
  const allUsers = {
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

  let users = allUsers.results;
  for (let i = 0; i < users.length; i++) {
    let firstName = users[i].name.first;
    let lastName = users[i].name.last;
    let nationality = users[i].nat;
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${firstName} ${lastName} (${nationality})`)
    );
    document.querySelector("#user-list").appendChild(li);
  }
};
