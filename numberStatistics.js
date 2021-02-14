const getNumStat = () => {
    const numStat = document.querySelectorAll(".num")
    const li = document.createElement("li")
    for(let li of numStat) {
        document.querySelector("#number-statistics-numbers").appendChild(li)
    }
}

///add input to list
// find average

// const getNumStat = () => {
    // addInputToList()
    // findAverage()
    
    // for(let li of numStat) {
        
    // }
// }

// const addInputToList = () => {
//     const li = document.createElement("li")
//     document.querySelector("#number-statistics-numbers").appendChild(li)
// }
// }