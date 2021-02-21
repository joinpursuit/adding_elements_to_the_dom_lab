let array = []

function onSubmit() {
        const num = Number(document.querySelector('#number-statistics-number-input').value)
        const li = document.createElement('li')
        const inputList = document.querySelector('#number-statistics-numbers')
        const average = document.querySelector('#number-statistics-average')
        const minimum = document.querySelector('#number-statistics-minimum')
        const maximum = document.querySelector('#number-statistics-maximum')
        li.textContent = num
        inputList.appendChild(li)

        let min = Infinity
        let max = -Infinity
        let avgNum = 0
        let totalNum = 0

        array.push(num)
        for (let i = 0; i < array.length; i++) {
            totalNum += array[i]
            if (array[i] < min) {
                min = array[i]
            }
            if (array[i] > max) {
                max = array[i]
            }
        }
        avgNum = totalNum / array.length
        average.textContent = avgNum
        minimum.textContent = min
        maximum.textContent = max
}