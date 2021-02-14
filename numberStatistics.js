// const getNumStat = () => {
    // addInputToList()
    // findAverage()
    
    // for(let li of numStat) {
        
    // }
// }

const addInputToList = () => {
    let num = Number(document.querySelector("#number-statistics-number-input").value)
    // const output = document.querySelector("#num-stat-output")
    const li = document.createElement("li")
    document.querySelector("#number-statistics-numbers").appendChild(li)
    li.textContent = num
}