console.log('hello')


function duplicator() {
    const stringInput = document.querySelector('#text-duplicator-string-input').value
    let numberInput = document.querySelector('#text-duplicator-number-input').value
    let output = document.querySelector('#text-duplicator-list')
    while (numberInput > 0) {
        const duplicate = document.createElement('li')
        duplicate.textContent = stringInput
        output.appendChild(duplicate)
        numberInput--
    }
    
}