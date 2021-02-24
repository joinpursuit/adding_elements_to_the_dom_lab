 function numberStatistics(){
    // 1.grap the users input
    const input= document.querySelector('#number-statistics-number-input').value
    //const value =input.value(save as value)
    //2create an li and give it the user input value
    const li =document.createElement('li')
    li.textContent=input;
    //3. add it to the unorder list
   const ul= document.querySelector('#number-statistics-numbers')
   ul.appendChild(li);
    //4. grap all of the li element as a list
    const listItems=document.querySelectorAll('#number-statistics-numbers li')
    //.5 iterate through the li elements and calculate ave
    let max = -Infinity
    let min =Infinity
    let sum =0
    for (let el of listItems){
        sum+=Number(el.textContent)
    }
    //6. calculate max
    for (let el of listItems){
    let num=Number(el.textContent)
        if(max<num){
            max=num
        }
    }
    //7. calculate min
    for (let el of listItems){
    let num=Number(el.textContent)
        if(min>num){
            min=num
        }
    }
    //8. add these numbers (max, min, ave) to the p tag
    const avg =sum/listItems.length;
    const average=document.querySelector('#number-statistics-average')
    average.textContent =`This is the average ${avg}`;
    const maximum=document.querySelector('#number-statistics-maximum');
    maximum.textContent= `This is the max ${max}`;
    const minimum=document.querySelector('#number-statistics-minimum');
    minimum.textContent= `This is the min ${min}`;
} 

//const inputArr = []
//const numberSnek = () => {
   // const input = Number(document.querySelector('#number-statistics-number-input').value);
   // const ul = document.querySelector('#number-statistics-numbers')
   // let avg = document.querySelector('#number-statistics-average')
   // let max = document.querySelector('#number-statistics-maximum')
   // let min = document.querySelector('#number-statistics-minimum')
   // inputArr.unshift(input)
  //  let li = document.createElement('li')    
   // li.textContent = input
   // ul.appendChild(li)
  //  let sorter = inputArr.sort((lo, hi) => { return hi - lo })     
   // max.textContent = `Maximum: ${sorter[0]}`
  //  min.textContent = `Minimum: ${sorter[sorter.length - 1]}`    
  //  avg.textContent = `Average: ${sorter.reduce((a, b) => { return (a + b) })/sorter.length}`    
//}