const textDuplicator = () => {
    let str = document.querySelector("#text-duplicator-string-input").value;
    let num = Number(document.querySelector("#text-duplicator-number-input").value);
    
    for (let i = 0; i< num; i++) {
         let li = document.createElement("li"); // create <li>
         li.textContent = str // assign the text of <li>
         document.querySelector("#text-duplicator-list").appendChild(li); // add <li> to <ul>
    }
}