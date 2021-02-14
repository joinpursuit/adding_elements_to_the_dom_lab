const getNumStat = () => {
    const numStat = document.querySelectorAll(".num")
    const li = document.createElement("li")
    for(let li of numStat) {
        document.querySelector("#number-statistics-numbers").appendChild(li)
    }
}