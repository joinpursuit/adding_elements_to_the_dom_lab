
    let arr=[]
    let max = -Infinity
    let min = Infinity
    
    
    function numberStatistics(){
        const input = Number(document.querySelector("#number-statistics-number-input").value)
        //Number converts the HTML Selector "String into an actual number that can be Added/Substracted etc."
        // Input always gives an HTML Object and use the information provide in the input we need to convert it to a "String" with the property .value
        let sum = 0
        arr.push(input)
        
        const avg = document.querySelector("#number-statistics-average")
        for (let i=0; i<arr.length; i++){
            const num = arr[i]
            sum += num   
        }
        let average = sum / arr.length 
        debugger 
        avg.textContent = `Average: ${average}`
    //textContent create visual expression of equation within the Html Document Query Selector
    const actualMax = document.querySelector("#number-statistics-maximum") 
    for (let i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }   
        actualMax.textContent = `Maximum:${max}`
    }

    const actualMin =document.querySelector("#number-statistics-minimum")
    for (let i=0; i<arr.length; i++){
        if (arr[i]< min){
            min = arr[i]
        }
        actualMin.textContent = `Minimum:${min}`
    }
}





