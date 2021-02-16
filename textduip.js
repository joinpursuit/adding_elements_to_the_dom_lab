function textDiplicator(){
    const input = document.getElementById('text-duplicator-string-input')
    let string = input.value
    
   const input2 = document.getElementById('text-duplicator-number-input')
    let num = input2.value

   console.log(string)
   const list = document.getElementById('text-duplicator-list')
   for (let i = 0; i < num; i++){
    const para = document.createElement('li')
        para.textContent= string
        list.appendChild(para)
   }


}