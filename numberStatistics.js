const addInputToList = () => {
    const userInput = Number(document.querySelector("#number-statistics-number-input").value);
    let divisor = Number(document.querySelectorAll("#number-statistics-numbers li").length + 1) ;
    let liTag = document.createElement("li");
    liTag.textContent = userInput;
    document.querySelector("#number-statistics-numbers").appendChild(liTag);
    let nums = document.querySelectorAll("#number-statistics-numbers li") 
    let sum = 0;
    let max = -Infinity;
    let min = Infinity;

    for (let num of nums) {
        let numValue = Number(num.textContent);
        console.log(numValue)
        sum += numValue
        if (numValue < min) {
            min = numValue
        }
        if (numValue > max) {
            max = numValue
        }
    }
    let avg = Math.floor(sum/divisor)
    let avgP = document.querySelector("#number-statistics-average")
    avgP.textContent = `${avg} is the average number.`

    let maxP = document.querySelector("#number-statistics-maximum")
    maxP.textContent = `${max} is the maximum number.`

    let minP = document.querySelector("#number-statistics-minimum")
    minP.textContent = `${min} is the minimum number.`
}


