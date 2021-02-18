
let arr = []

const numberStats = () => {
  let input = Number(document.querySelector('#number-statistics-number-input').value)
  let ul = document.querySelector('#number-statistics-numbers')
  let li = document.createElement('li')
  let avg = document.querySelector('#number-statistics-average')
  let max = document.querySelector('#number-statistics-maximum')
  let min = document.querySelector('#number-statistics-minimum')

  li.innerText = input
  ul.appendChild(li)

  arr.push(input)

  const average = () => {
    let sum = 0
    arr.forEach((el) => {
      sum += el
      averageOfNums = sum / arr.length
      return averageOfNums
    })
  }
  average()
    
  const maximum = () => {
    maxVal = Math.max(...arr)
    return maxVal
  }
  maximum()

  const minimum = () => {
    minVal = Math.min(...arr)
    return minVal
  }
  minimum()

  avg.innerText = averageOfNums
  max.innerText = maxVal
  min.innerText = minVal
}






// let newArray = []

// const getAverage = () => {
//     let num = Number(document.querySelector("#number-statistics-number-input").value)
//     let uList = document.querySelector('#number-statistics-numbers')
//     let average = document.querySelector('#number-statistics-average')
//     let max = document.querySelector('#number-statistics-maximum')
//     let min = document.querySelector('#number-statistics-minimum')

//     let li = document.createElement('li')
//     li.innerText = num
//     uList.appendChild(li)

//     newArray.push(num)

//     //Average 
//     const findAverage = () => {
//         let sum = 0
//         newArray.forEach = ( (n) => {
//             sum += n
//             let avg = sum /newArray.length
//             return avg
//         })
//         // for(let i = 0;i < newArray.length; i++){
//         //     sum += newArray[i]
//         //     let avg = sum/newArray.length
//         //     return avg
//         // }
//     }
//     findAverage()
    
//     average.innerText = avg
//     //equal sign reassign the value avg


//     //Max
//     const findMaximum = () => {
//         let maximum = Math.max(...newArray)   
//         return maximum

//     }
//     findMaximum()

//     max.innerText = maximum
    
//     //Min
//     const findMinimum = () => {
//         let minimum = Math.min(...newArray)
//         return minimum
//     }
//     findMinimum()

//     min.innerText= minimum

// }














// ----------------------------------------


// const getAverage = () => {
//     //get users input from the DOM
//     const input = document.querySelector('#number-statistics-number-input')
//     const value = input.value
//     // const value = Number(document.querySelector('#number-statistics-number-input').value)

//     //convert users input to a number
//     const num = Number(value)
//     // const num2 = parseInt(value)
//     // console.log(`num1: ${num2} is a ${typeof num2}`)
    
//     //create a new li and set its text content to the users input 
//     const li = document.createElement('li')
//     li.textContent = num

//     //get the ul from the DOM
//     const list = document.querySelector('#numbers')
//     console.log(list)

//     //append our new li to the ul
//     list.appendChild(li)

//     //update average
//     //update min
//     //update max 
// }




//get users input from the DOM
    // const input = document.querySelector('#number-statistics-number-input')
    // const value = input.value
    // const num1 = Number(value)
//one line code
    // const num = Number(document.querySelector('#number-statistics-number-input').value)




//Get user input from the DOM
    //use document.querySelector or document.getelementbyID
//Transformed that input (converted it to a number)
    //this step depends on what problem your're trying to solve
//Created a new DOM element and set its textContent to our transformed input 
    //(Our new li element)
//Grabbed a parent element from the DOM
    //grab the ul from the DOM
//We append our new DOM element to the parent 
    //call ul.appendChild 