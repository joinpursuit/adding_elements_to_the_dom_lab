const statistics = () => {
    let inputNum = Number(document.getElementById("number-statistics-number-input").value)
    let output = document.createElement("li")
    let ul = document.getElementById('number-statistics-numbers')
    output.textContent = inputNum
    ul.appendChild(output)
    let allNums = document.querySelectorAll("#number-statistics-numbers>li")
    let pAverage = document.getElementById("number-statistics-average")
    let pMax = document.getElementById("number-statistics-maximum")
    let pMin = document.getElementById("number-statistics-minimum")
    let sum = 0
    let average
    for(let i= 0; i < allNums.length; i++) {
        sum+=Number(allNums[i].textContent)
    }
    average = sum/allNums.length
    pAverage.textContent = `Average is ${average}`

    let min = Infinity
    for(let i= 0; i < allNums.length; i++) {
        let num = Number(allNums[i].textContent)
       if(num < min) {
           min = num
       }
    }
    pMin.textContent = `Minimum is ${min}`
    
    let max = -Infinity
    for(let i= 0; i < allNums.length; i++) {
        let num = Number(allNums[i].textContent)
        if(num > max) {
            max = num
        }
    }
    pMax.textContent = `Maximum is ${max}`
}

