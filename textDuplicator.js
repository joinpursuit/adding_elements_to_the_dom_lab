function TextDuplicator() {
    const str = document.getElementById("text-duplicator-string-input").value 
    const num = document.getElementById("text-duplicator-number-input").value
    let output = document.getElementById('text-duplicator-list')

    for (let i = 0 ; i < num; i += 1) {
     const newli = document.createElement("li")  
     newli.textContent += str
     output.appendChild(newli)
}
}