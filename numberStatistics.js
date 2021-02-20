// const getNumStat = () => {
    // addInputToList()
    // findAverage()
    
    // for(let li of numStat) {
        
    // }
// }

const addInputToList = () => {
    console.log("here")
    let num = Number(document.querySelector("#number-statistics-number-input").value)
    // const output = document.querySelector("#num-stat-output")
    const li = document.createElement("li")
    li.textContent = num
    // li.classList.add("number")
    document.querySelector("#number-statistics-numbers").appendChild(li)

    const listItems = document.querySelectorAll("#number-statistics-numbers li")

    let max = -Infinity
    let min = Infinity
    let sum = 0

    for (let el of listItems) {
            sum += Number(el.textContent)
    }

    for (let el of listItems) {
        if (max < Number(el.textContent)){
            max = Number(el.textContent)
        }
    }

    for (let el of listItems) {
        if (min > Number(el.textContent)){
            min = Number(el.textContent)
        }
    }

    const average = document.querySelector("#number-statistics-average")
    average.textContent = `This is the average number: ` + sum / listItems.length

    const maximum = document.querySelector("#number-statistics-maximum")
    maximum.textContent = `This is the maximum number: ${max}`

    const minimum = document.querySelector("#number-statistics-minimum")
    minimum.textContent = `This is the minimum number: ${min}`
}

