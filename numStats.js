let sum = 0
let min = Infinity
let max = -Infinity
let counter = 0

function numberStats() {
    const input = document.querySelector('#number-statistics-number-input')
    const value = input.value

        const num = Number(value)
        const li = document.createElement('li')
        li.textContent = num
        const list = document.querySelector('#number-statistics-numbers')
        list.appendChild(li)

        let avg = 0
        sum += num
        counter++
        avg = Math.floor(sum / counter)

        if(num < min) {
            min = num
        }

        if(num > max) {
            max = num
        }

        const pAvg = document.querySelector('#number-statistics-average')
        pAvg.textContent = `Average of all numbers is: ${avg}`

        const pMax = document.querySelector('#number-statistics-maximum')
        pMax.textContent = `Maximum of all numbers is: ${max}`

        const pMin = document.querySelector('#number-statistics-minimum')
        pMin.textContent = `Minimum of all numbers is: ${min}`
}
