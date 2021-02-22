function duplicateText () {
    const input = document.getElementById('text-duplicator-string-input')
    let string = input.value

    const inputNum = document.getElementById('text-duplicator-number-input')
    let num = inputNum.value

    const addToList = document.getElementById('text-duplicator-list')
    for(let i = 0; i < num; i++) {
        const onList = document.createElement('li')
        onList.textContent = string
        addToList.appendChild(onList)
        
    }
}