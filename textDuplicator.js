const duplicator = () => {
    const input = document.querySelector('#text-duplicator-string-input').value
    let inputNum = document.getElementById('#text-duplicator-number-input').value
    let inputNumConvert = inputNum *= 1
    console.log(inputNumConvert)
    console.log(typeof inputNumConvert)
    
    let output = document.querySelector('#text-duplicator-list')

    let li = document.createElement('li')
    li.textContent = input;
    
    console.log(li)
    for (let i = 0; i < inputNumConvert; i++){
        output.appendChild(li)
        console.log(input)
    }
    

}

