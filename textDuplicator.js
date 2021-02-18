function submitButton() {
    let stringInput = document.querySelector('#text-duplicator-string-input').value
    let numberInput = document.querySelector('#text-duplicator-number-input').value
    const output = document.querySelector('#text-duplicator-list')
    
    let number = parseInt(numberInput)
    let i = 1
    
    while (i <= number) {
        const li = document.createElement('li')
        li.textContent = stringInput
        output.appendChild(li)
        i += 1
    }
}
