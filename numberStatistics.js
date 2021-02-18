let numArr = []
let min = Infinity
let max = -Infinity

function submitButton () {
    const numberInput = Number(document.querySelector('#number-statistics-number-input').value)
    const list = document.querySelector('#number-statistics-numbers')
    const p1 = document.querySelector('#number-statistics-average')
    const p2 = document.querySelector('#number-statistics-minimum')
    const p3 = document.querySelector('#number-statistics-maximum')
    //let allItems = document.querySelectorAll('#number-statistics-numbers li')
    
    function numList () {
        const li = document.createElement('li')
        li.textContent = numberInput
        list.appendChild(li)
        numArr.push(numberInput)
    }
    numList()
    
    function average () {
        let sum = numArr.reduce((a, b) => a + b)
        let averageNum = sum / numArr.length
        p1.textContent = `Average number is ${averageNum}`
    }
    average()

    function minimum () {
        for (let i = 0; i < numArr.length; i += 1) {
            if (numArr[i] < min) {
                min = numArr[i]
            }
        }
        p2.textContent = `Minimum number is ${min}`
    }
    minimum()

    function maximum () {
        for (let i = 0; i < numArr.length; i += 1) {
            if (numArr[i] > max) {
                max = numArr[i]
            }
        }
        p3.textContent = `Maximum number is ${max}`
    }
    maximum()
}