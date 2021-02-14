const duplicator = () => {
    const stringInput = document.getElementById("text-duplicator-string-input").value;
    const numInput = Number(document.getElementById("text-duplicator-number-input").value);
    const list = document.getElementById("text-duplicator-list");
    for (let i = 0; i < numInput; i++) {
        let li = document.createElement("li")
        li.textContent = stringInput
        list.appendChild(li)
    }
}

// const li = document.createElement("li");
// li.textContent = `${player.name}: ${player.batting_average}` //player.name;
// document.querySelector("#best_hitters").appendChild(li);