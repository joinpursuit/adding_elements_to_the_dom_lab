function averageStatic () {
    // const num = Number(document.getElementById("number-statistics-number-input").value)
    // const output = document.getElementById("number-statistics-numbers")
    // const newListItem = document.createElement("li")
    // newListItem.textContent += num
    // output.appendChild(newListItem)
    //  let sum=0
    // for (let key in output){
    //     sum += output[key]
    //     output.appendChild(key)
    // } 
     // 1.grap the users input
     const input= document.querySelector('#number-statistics-number-input').valueAsNumber
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
     minimum.textContent= `This is the max ${min}`;

   

    
   


   


}