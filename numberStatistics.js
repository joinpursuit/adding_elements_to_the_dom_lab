const recalculate =() =>{
    const numberInput = Number(document.querySelector("#number-statistics-number-input").value)
    const li = document.createElement("li")
    li.innerText = numberInput
    document.querySelector("#number-statistics-numbers").appendChild(li)
    const pMax = document.querySelector("#number-statistics-maximum") 
    const pAverage = document.querySelector("#number-statistics-average")
    const pMin = document.querySelector("#number-statistics-minimum")
    li.classList.add('number');
    const listObject = document.querySelectorAll(".number")
    
    
    let listArray = []
    
    for(let el of listObject){
        listArray.push(Number(el.innerText))
    }
    pMax.textContent =max(listArray)
    console.log(max(listArray))
    pMin.textContent =min(listArray)
    console.log(min(listArray))
    pAverage.textContent =average(listArray)
    console.log(average(listArray))

}

const max =(listArray) =>{
    let maxNum = -Infinity
    for(let i = 0; i < listArray.length; i++){
        if(listArray[i] > maxNum){
            maxNum = listArray[i]
        }
    }
    
    return maxNum
}


const average =(listArray) =>{
   let  sum = 0;
    for(let i = 0; i < listArray.length; i++){
        sum += listArray[i]
    }
    return sum/listArray.length
}


const min =(listArray) =>{
    let minNum = Infinity
    for(let i = 0; i < listArray.length; i++){
        if(listArray[i] < minNum){
            minNum = listArray[i]
        }
    }
    
    return minNum
}