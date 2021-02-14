const ul = document.querySelector("#user-list")
const data = {
    "results": [
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
    ],
    "info": {
        "seed": "2cb086ce097c87ee",
        "results": 10,
        "page": 1,
        "version": "1.2"
    }
}


for (let i = 0; i < data.results.length; i++) {
    let li = document.createElement("li")
    let firstName = data.results[i].name.first;
    let lastName = data.results[i].name.last;
    let nat = data.results[i].nat;
    li.textContent = `${firstName} ${lastName} (${nat})`
    ul.appendChild(li);

}
