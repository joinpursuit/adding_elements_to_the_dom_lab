let arr = []
const getAverage = () =>{
    const input = Number(document.getElementById("number-statistics-number-input").value);
    const averageNum = document.getElementById("number-statistics-average");
    const maxNum = document.getElementById("number-statistics-maximum");
    const minNum = document.getElementById("number-statistics-minimum");
    const uList = document.getElementById("number-statistics-numbers");

    const li = document.createElement("li")
    li.textContent = input
    uList.appendChild(li)
    
    
    let sum = 0
    let averageVal = 0
    arr.push(input)

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let numOfNums = arr.length
    averageVal = sum/numOfNums
    averageNum.textContent = `Average: ${averageVal}`

    let sortedArr = arr.sort((a,b) =>{
        return a-b
    });
    let minVal = arr[0]
    let maxVal = arr[arr.length-1];
    
    maxNum.textContent = `Max Number: ${maxVal}`
    minNum.textContent = `Min Number: ${minVal}`

    
  
    

}

