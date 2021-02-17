let array = []

function statistics() {
const number = Number(document.querySelector("#number-statistics-number-input").value)
const average = document.querySelector("#number-statistics-average")
const max = document.querySelector("#number-statistics-maximum")
const min = document.querySelector("#number-statistics-minimum")
const list = document.querySelector("#number-statistics-numbers")


let maxValue = -Infinity
let minValue = Infinity
let averageValue = 0
let sum = 0

array.push(number)

for(let i = 0; i < array.length; i++) {
sum += array[i]
}

let sortedArray = array.sort((a,b) => {
  return a-b
})

averageValue = sum/array.length
maxValue = sortedArray[sortedArray.length-1]
minValue = sortedArray[0]

const newLi = document.createElement("li")
newLi.textContent = number
list.appendChild(newLi)


average.textContent = `Average is ${averageValue}`
max.textContent = `Max is ${maxValue}`
min.textContent = `Min is ${minValue}`
}

