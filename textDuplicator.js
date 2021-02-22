       function duplicateButton() {
        const strInput = document.getElementById('text-duplicator-string-input')
        const numInput = document.getElementById('text-duplicator-number-input')
        const strInputData = strInput.value
        const numInputData = numInput.value
        const output = document.getElementById('text-duplicator-list')
        for(i = 0; i < numInputData; i++ ) {
        const inputList= document.createElement('li')
        inputList.textContent += strInputData
        output.appendChild(inputList)
        }
    }
