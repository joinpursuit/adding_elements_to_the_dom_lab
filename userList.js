users = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Antoine",
        "last": "Robert"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Freja",
        "last": "Christiansen"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Eden",
        "last": "Smith"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "هستی",
        "last": "علیزاده"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Gabi",
        "last": "Welz"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Daniel",
        "last": "Gill"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Eléonore",
        "last": "Nicolas"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Heather",
        "last": "Omahony"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Indie",
        "last": "Cooper"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Israel",
        "last": "Nogueira"
      },
      "nat": "BR"
    }
  ],
  "info": {
    "seed": "cbb6e1d4c5e90c48",
    "results": 10,
    "page": 1,
    "version": "1.3"
  }
}

const userList = document.querySelector('#user-list');

results = users.results;
// console.log(results.length)
for(let i = 0; i < results.length;i++){
  const li = document.createElement('li');
  firstName = results[i].name.first;
  lastName = results[i].name.last;
  nationality = results[i].nat;
  li.textContent = `${firstName} ${lastName} (${nationality})`;
  document.querySelector('#user-list').appendChild(li);
}