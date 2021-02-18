//////////Problem 1/////////////
const textDuplicator = () => {
    const inputVal = document.getElementById('text-duplicator-string-input').value
    const inputNumVal = Number(document.getElementById('text-duplicator-number-input').value)
    for (let i = 0; i < inputNumVal; i++) {
        let newLi = document.createElement("li")
        newLi.textContent = inputVal
        let listEl = document.getElementById('text-duplicator-list')
        listEl.appendChild(newLi)
    }
}
///////////Problem 2//////////////
//global object
let obj = {
    storedVal: [],
    total: 0,
    maxNum: -Infinity,
    minNum: Infinity
}
const numberStatistics = () => {
    //grab number input 
    const inputNum = Number(document.getElementById('number-statistics-number-input').value)
    //store value in global variable to know length for average calculation
    obj.storedVal.push(inputNum)
    //store total in global variable for average calculation  
    obj.total += inputNum
    //create average variable from global variables 
    let avgNum = obj.total / obj.storedVal.length
    //change global max value 
    if (inputNum > obj.maxNum) {
        obj.maxNum = inputNum
    }
    //change global min value
    if (inputNum < obj.minNum) {
        obj.minNum = inputNum
    }
    //select dom elements 
    const averagePTag = document.getElementById('number-statistics-average')
    const maximumPTag = document.getElementById('number-statistics-maximum')
    const minimumPTag = document.getElementById('number-statistics-minimum')
    //change textcontent of dom elements
    averagePTag.textContent = `Avg: ${avgNum}`
    maximumPTag.textContent = `Max: ${obj.maxNum}`
    minimumPTag.textContent = `Min: ${obj.minNum}`
    //list sumbmisions
    let newLi = document.createElement("li")
    newLi.textContent = inputNum
    let domLocation = document.getElementById('number-statistics-numbers')
    domLocation.appendChild(newLi)
}
///////////Problem 3//////////////
