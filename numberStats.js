let list = []
const addNum = () => {
    let input = Number(document.querySelector("#number-statistics-number-input").value)
    list.push(input)
    let sum = 0
    let avgNum = 0
    let maxNum = -Infinity
    let minNum = Infinity
    let avgP = document.querySelector("#number-statistics-average");
    let maxP = document.querySelector("#number-statistics-maximum");
    let minP = document.querySelector("#number-statistics-minimum");
    let display = document.querySelector("#entered-numbers")
    console.log(input)
    console.log(list)
    list.forEach(num => {
        sum += num
        console.log(sum)
        console.log(list.length)
        avgNum = sum / list.length
        console.log(avgNum, "this is average")
        if (num < minNum) {
            minNum = num
        } else if (num > maxNum) {
            maxNum = num

        }
        console.log(maxNum, "this is max")
        console.log(minNum, "this is min")
    })
    avgP.textContent = `The average is: ${avgNum}`
    maxP.textContent = `The largest number is: ${maxNum}`
    minP.textContent = `The smallest number is: ${minNum}`
    display.textContent = `You've entered: ${list} `

}


// avgP.textContent = ``;
    // maxP.textContent = `The largest number is: ${maxNum}`;
    // minP.textContent = `The smallest number is: ${minNum}`;










// let average = document.querySelector("#number-statistics-average")
// let max = document.querySelector("#number-statistics-maximum")
// let min = document.querySelector("#number-statistics-minimum")
// let display = document.querySelector("#number-statistics-numbers")
// let minNum = Infinity
// let maxNum = -Infinity
// let sum = 0
// let avgNum = sum/list.length
// list.push(input)
// list.forEach(num => {
//     sum += num 
// if(num < minNum){
//     minNum = num
// }else if(num > maxNum){
//     maxNum = num
// }

// }
// });
// push inputs into an array - 
// let li = document.createElement("li");
// // list.appendChild(li); display array as ul
// li.textContent = input;

    // Big for loop {
        // average = (sum += num[i])/arr.length
        // min if statement - input < min -> min = input
        // max if statement - input > max -> max = input
        // push input to list - 
        // }
//         display.textContent += input + ", "

// }

// We're going to need (arr of input).length -> list
// Have a list to show user what their inputs have been 
