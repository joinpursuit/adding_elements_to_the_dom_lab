
    // addInputToList()
    // findAverage()
    
    // for(let li of numStat) {
        
    // }
// }

// let numArray = []
// const addInputToList = () => {
//     const numInput = Number(document.querySelector("#number-statistics-number-input").value)
//     const numAvg = document.querySelector("#number-statistics-average")
//     const numMax = document.querySelector("#number-statistics-maximum")
//     const numMin = document.querySelector("#number-statistics-minimum")
//     numArray.push(numInput)
//     let totalNum = 0
//     for(let i =0; i < numArray.length; i++) {
//         totalNum += numArray[i]
//         console.log(totalNum)
//         if(numArray.length === 1) {
//             numAvg.textContent = numArray[i]
//             numMax.textContent = numArray[i]
//             numMin.textContent = numArray[i]
//         } else {
//             numAvg.textContent = Math.floor(totalNum/numArray.length)
//             numMax.textContent = Math.max(...numArray)
//             numMin.textContent = Math.min(...numArray)
//         }
//     }
// }

const addInputToList = () => {
    const userInput = Number(document.querySelector("#number-statistics-number-input").value);
    let divisor = Number(document.querySelectorAll("#number-statistics-numbers li").length + 1) ;
    let liTag = document.createElement("li");
    liTag.textContent = userInput;
    document.querySelector("#number-statistics-numbers").appendChild(liTag);
    let nums = document.querySelectorAll("#number-statistics-numbers li") // nodeList ????
    let sum = 0;
    let max = -Infinity;
    let min = Infinity;

    for (let num of nums) {
        let numValue = Number(num.textContent);
        console.log(numValue)
        sum += numValue
        if (numValue < min) {
            min = numValue
        }
        if (numValue > max) {
            max = numValue
        }
    }
    let avg = Math.floor(sum/divisor)
    let avgP = document.querySelector("#number-statistics-average")
    avgP.textContent = avg

    let maxP = document.querySelector("#number-statistics-maximum")
    maxP.textContent = max

    let minP = document.querySelector("#number-statistics-minimum")
    minP.textContent = min
}


// const addInputToList = () => {
//     const numInput = Number(document.querySelector("#number-statistics-number-input").value);
//     let divisor = Number(document.querySelectorAll("#number-statistics-numbers li").length + 1);
//     let li = document.createElement("li");
//     li.textContent = numInput;
//     document.querySelector("#number-statistics-numbers").appendChild(li);
//     let nums = document.querySelectorAll("#numbers-statistics-numbers li");
//     let sum = 0;
//     let max = -Infinity;
//     let min = Infinity;
//     for (let num of nums) {
//         console.log("hi")
//         console.log(num.innerText)
//         let numValue = Number(num.innerText);
//         console.log(num.innerText)
//         sum += numValue
//         if (numValue < min) {
//             min = numValue
//             console.log(min)
//         }
//         if(numValue > max) {
//             max = numValue
//             console.log(max)
//         }
//     }
// }
    // const numAvg = document.querySelector("#number-statistics-average")
    // const numMax = document.querySelector("#number-statistics-maximum")
    // const numMin = document.querySelector("#number-statistics-minimum")


// let num = Number(document.querySelector("#number-statistics-number-input").value);
// // const output = document.querySelector("#num-stat-output")
// const li = document.createElement("li")
// document.querySelector("#number-statistics-numbers").appendChild(li)
// li.textContent = num

// let numAvg = document.querySelector("#number-statistics-average").value
// for(let num of numAvg) {
//     num += num[i]/num.length
// }
// avg.innerText = `${avg} is the average of the numbers you entered.`

// const getNumStat = () => {
//     addInputToList()
//     getAverage()
// }   

// getNumStat()