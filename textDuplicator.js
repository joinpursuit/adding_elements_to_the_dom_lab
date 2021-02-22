function duplicator () {
    const input1= document.getElementById("text-duplicator-string-input")
    const input2 = document.getElementById("text-duplicator-number-input")
    const text = input1.value
    const num = input2.value
    const output = document.getElementById("text-duplicator-list")
    for (i=0; i < num;i++){
        const newListItem = document.createElement("li")
        newListItem.textContent += text
        output.appendChild(newListItem)
    }
    
}