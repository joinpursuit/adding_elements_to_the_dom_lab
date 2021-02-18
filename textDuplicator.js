const textDup = () => {
    let input1 = document.querySelector('#text-duplicator-string-input').value
    let input2 = Number(document.querySelector('#text-duplicator-number-input').value)
    let ul = document.querySelector('#text-duplicator-list')
    
    for(let i = 0; i < input2; i++){
      let li = document.createElement('li')
      li.innerText = input1
      ul.appendChild(li)
    }
}