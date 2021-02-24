function duplicator(){
const input1 = document.querySelector('#text-duplicator-string-input')
const string = input1.value // "hello world"
const input2 = document.querySelector('#text-duplicator-number-input')
const number = input2.value // 2
let output = document.getElementById('text-duplicator-list');
 

for(i = 0; i < number; i++){
  const list = document.createElement('li')
  list.textContent += string
  output.appendChild(list)

}

 //number input generate a new <li></li> with the content of the li filled with the input

}
//Clicking the submit button will add that many copies of the string as list items to an unordered list with id='text-duplicator-list'
// adding a number 