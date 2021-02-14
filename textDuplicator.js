const duplicator = () => {
    const stringInput = document.querySelector('#text-duplicator-string-input').value;
    const numberInput = Number(document.querySelector('#text-duplicator-number-input').value);
    for(let i = 0; i < numberInput;i++){
        const li = document.createElement('li');
        li.textContent = stringInput;
        document.querySelector('#text-duplicator-list').appendChild(li);
    }
}