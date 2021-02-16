const getNation = (user) => {
  return `${user.name.first} ${user.name.last} (${user.nat}) `
}

const allUsers = [
  {
    "gender": "female",
    "name": {
      "title": "mademoiselle",
      "first": "ruth",
      "last": "nicolas"
    },
    "nat": "CH"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "رها",
      "last": "سلطانی نژاد"
    },
    "nat": "IR"
  },
  {
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "patricia",
      "last": "hale"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "fernando",
      "last": "cooper"
    },
    "nat": "US"
  },
  {
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "یسنا",
      "last": "صدر"
    },
    "nat": "IR"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "eino",
      "last": "tuomala"
    },
    "nat": "FI"
  },
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "gonca",
      "last": "özkara"
    },
    "nat": "TR"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "kyle",
      "last": "castillo"
    },
    "nat": "US"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "olivia",
      "last": "kumar"
    },
    "nat": "NZ"
  },
  {
    "gender": "male",
    "name": {
      "title": "monsieur",
      "first": "raymond",
      "last": "durand"
    },
    "nat": "CH"
  }
]

const listElement = document.getElementById("user-list");

for (const user of allUsers) {
  const newUserListItem = document.createElement("li");
  newUserListItem.textContent = getNation(user);
  listElement.appendChild(newUserListItem);
}