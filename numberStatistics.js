let sum = 0
let counter = 0
let min = Infinity
let max = -Infinity
function statistics() {
    const num = document.getElementById('number-statistics-number-input').value
    const num1 = Number(num)
    const li = document.createElement('li')
    li.textContent = num1
    const list = document.getElementById('number-statistics-numbers')
    list.appendChild(li)
    let avg = 0
    sum += num1
    counter++
    avg = Math.floor(sum / counter)
    if (num1 < min) {
        min = num1
    }
    if (num1 > max) {
        max = num1
    }
    console.log(sum)
    const firstParagraph = document.querySelector('#number-statistics-minimum')
    firstParagraph.textContent = `Minimum: ${min}`
    const secondParagraph = document.querySelector('#number-statistics-maximum')
    secondParagraph.textContent = `Maximum: ${max}`
    const thirdParagraph = document.querySelector('#number-statistics-average')
    thirdParagraph.textContent = `Average: ${avg}`
}
