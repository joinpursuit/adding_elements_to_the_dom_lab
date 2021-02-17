
let sum = 0
let counter = 0
let min = Infinity
let max = -Infinity
function numberStatic(){
    
    // 84 get added in the ul
      // get users input from the DOM
const num = document.getElementById('number-statistics-number-input').value
      // convert users input to a number
      const num1 = Number(num)
      // create a new li and set its text content to the users input
      const li = document.createElement('li')
      li.textContent = num1
      // get the ul from the DOM
      const list = document.getElementById('number-statistics-numbers')
      // append our new li  to the ul
      list.appendChild(li)
let avg = 0
 sum += num1
 counter++
 avg = Math.floor(sum/counter)
 if (num1 < min){
     min = num1
 }
 if(num1 > max){
     max=num1
 }
 console.log(sum)


const p1 = document.getElementById('number-statistics-minimum')
p1.textContent= `Minimum: ${min}`
const p2 = document.getElementById('number-statistics-maximum')
p2.textContent = `Maximum: ${max}`
const p3 = document.getElementById('number-statistics-average')
p3.textContent =`Average: ${avg}`







    // update average
    
    
    //update min
    // const minimum = document.getElementById('id="number-statistics-minimum')
    // let min = num1[0]
    // for(let i = 0; i <num1.length;i++){
    //     if(arr[i]< min){
    //         min = arr[i]
    //     }
    // }return min

    //update max
}