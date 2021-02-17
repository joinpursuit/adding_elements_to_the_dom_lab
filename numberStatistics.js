let counter = 0
let sum = 0
let min = 0
let max = 0

function addNum() {
    let num = document.querySelector("#number-statistics-number-input").value
    if(num !== ""){
        num = Number(num)
        sum += num
        counter++
        if(counter === 1){
            min = num
            max = num
        } else if(num > max){
            max = num
        } else if(num < min){
            min = num
        }
        document.querySelector("#number-statistics-average").textContent = `Average: ${Math.floor(sum/counter)}`
        document.querySelector("#number-statistics-maximum").textContent = `Maximum: ${max}`
        document.querySelector("#number-statistics-minimum").textContent = `Minimum: ${min}`
    }
}