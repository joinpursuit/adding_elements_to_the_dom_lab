function makeCopies(){
    let str = String(document.querySelector("#text-duplicator-string-input").value);
    let num = Number(document.querySelector("#text-duplicator-number-input").value);

    let ulist = document.createElement("ul");
    ulist.setAttribute("id", "text-duplicator-list");
    document.body.appendChild(ulist);

    for(let i=1; i<=num; i++){
        let listItem = document.createElement("li");
        listItem.textContent = str;

        ulist.appendChild(listItem);
    }

}