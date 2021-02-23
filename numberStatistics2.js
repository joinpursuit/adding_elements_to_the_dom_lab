// by Vanessa
const numberStatistics = () => {
    const userInput = Number(document.querySelector("#number-statistics-number-input").value);
    const divisor = Number(document.querySelectorAll("#number-statistics-numbers li").length + 1) ;
    const liTag = document.createElement("li");
    liTag.textContent = userInput;
    document.querySelector("#number-statistics-numbers").appendChild(liTag);
    const nums = document.querySelectorAll("#number-statistics-numbers li") // nodeList
    let sum = 0;
    let max = -Infinity;
    let min = Infinity;
    
    for (let num of nums) {
        let numValue = Number(num.textContent);
        sum += numValue
        
        if (numValue < min) {
            min = numValue
        }
        
        if (numValue > max) {
            max = numValue
        }
    }
    let avg = Math.floor(sum / divisor)
    let avgP = document.querySelector("#number-statistics-average")
    avgP.textContent = avg

    let maxP = document.querySelector("#number-statistics-maximum")
    maxP.textContent = max

    let minP = document.querySelector("#number-statistics-minimum")
    minP.textContent = min
}