function duplicator(){
       // grap the users input
    const input1 =document.querySelector("#text-duplicator-string-input")
    const string =input1.value;
    const input2 =document.querySelector('#text-duplicator-number-input')
    const number =Number(input2.value)
    const ul =document.querySelector('#text-duplicator-list')
    for(let i =0; i<number; i++){
       // create an li and give it the user input value
    const li =document.createElement('li') 
    li.textContent+=string;
    ul.appendChild(li);
    }
}