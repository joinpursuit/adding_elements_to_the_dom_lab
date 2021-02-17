let arr = []

const numberStats = () => {
    let input = Number(document.querySelector('#number-statistics-number-input').value)
    let ul = document.querySelector('#number-statistics-numbers')
    let li = document.createElement('li')
    let avg = document.querySelector('#number-statistics-average')
    let max = document.querySelector('#number-statistics-maximum')
    let min = document.querySelector('#number-statistics-minimum')

    li.innerText = input
    ul.appendChild(li)

    arr.push(input)

    const average = () => {
        let sum = 0
        arr.forEach((el) => {
            sum += el
            averageOfNums = sum / arr.length
            return averageOfNums
        })
    }
    average()
    
    const maximum = () => {
        maxVal = Math.max(...arr)
        return maxVal
    }
    maximum()

    const minimum = () => {
        minVal = Math.min(...arr)
        return minVal
    }
    minimum()

    avg.innerText = averageOfNums
    max.innerText = maxVal
    min.innerText = minVal
}

const textDup = () => {}

const starWars = () => {}

const userList = () => {}