const duplicator = () => {
    const input = document.querySelector('#text-duplicator-string-input').value
    let inputNum = parseInt(document.getElementById('#text-duplicator-number-input'))
    console.log(inputNum)
    console.log(typeof inputNum)
    let output = document.querySelector('#text-duplicator-list')

    let li = document.createElement('li')
    li.textContent = input;
                    
    output.appendChild(li)
    console.log(input)

}

