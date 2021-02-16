const duplicator = () => {
    const input = document.querySelector('#text-duplicator-string-input').value
    let inputNum = document.getElementById('text-duplicator-number-input').value   
    let output = document.querySelector('#text-duplicator-list')    
    
    for (let i = 1; i <= inputNum; i++){
        let li = document.createElement('li')
        li.textContent = input;
        output.appendChild(li)
        console.log(i)
    }
}

// function duplicator() {    
//     const stringInput = document.getElementById('text-duplicator-string-input').value
//     const numInput = Number(document.getElementById('text-duplicator-number-input').value)
    
//     const listElement = document.getElementById('text-duplicator-list')
    
//     for (let i = numInput; i > 0; i--) {
//         const output = document.createElement("li")
//         output.textContent = stringInput.repeat(numInput)
//         listElement.appendChild(output)
//         console.log(i)
//     }
// }


