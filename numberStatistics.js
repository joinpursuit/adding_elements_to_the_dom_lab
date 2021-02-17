// function statistics(){
//     const number = document.getElementById('number-statistics-number-input')
//     const num = number.value

//     const numList = document.createElement('li')
//     numList.innerText = num

//     console.log(numList)
   
    

// let ave = 0
// for (let i=1;i<=num;i++){
//     ave += i
// }

// ave = parseInt(ave/num).toFixed(0)

// const average = document.querySelector("#number-statistics-average")
// average.textContent = ave

// const maximun = document.querySelector("#number-statistics-maximum")
// maximun.textContent = num

// const minimum = document.querySelector("#number-statistics-minimum")
// minimum.textContent = num/num



// }

let array = []
let order = []
let average = 0
let maximum = 0
let minimum = 0
let sum = 0
function statistics(){

  
    // Create a li with id
    const list = document.createElement('li')
    list.id = 'number-statistics-numbers'
    document.body.appendChild(list)
    console.log(list)

  
    // Store the values in the list
        // Extract the value from the number input
        const num = document.getElementById('number-statistics-number-input')
    list.textContent = num.value
    array.push(parseInt(num.value))

    var myList = document.querySelectorAll('#number-statistics-numbers')
    console.log(myList)
    
    console.log(`Array : ${array}`)


    for (let ele of array){
        console.log(`ele : ${ele}`)
            sum += ele
    }      
    
    console.log(`sum : ${sum}`)
    average = sum/(array.length)
    const avv = document.querySelector("#number-statistics-average")
    avv.textContent = average.toFixed(0)

    array.sort((a,b)=> a-b)
    console.log(`Array sorted : ${array}`)
    const maxim = document.querySelector("#number-statistics-maximum")
    maxim.textContent = array[(array.length-1)]

    const minim = document.querySelector("#number-statistics-minimum")
    minim.textContent = array[0]
    sum =0
}