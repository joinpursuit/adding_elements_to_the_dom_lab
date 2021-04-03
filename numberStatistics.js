let arr = []

function numberStats () { 
    let input = Number(document.getElementById('number-statistics-number-input').value)
    let ul = document.getElementById('number-statistics-numbers')
    let li =document.createElement('li')
    let avg = document.getElementById('number-statistics-average')
    let max = document.getElementById('number-statistics-maximum')
    let min = document.getElementById('number-statistics-minimum')

    li.innetText = input
    ul.appendChild(li)

    arr.push(input)

    function average() {
        let sum = 0
        arr.forEach((el) => {
            sum += el 
            averageOfNums = sum / arr.length
           return averageOfNums
        })
       
    }
    average()

    function maximum () {
        maxVal = Math.max(...arr)
        return maxVal
    }
    maximum()

         function minimum () {
             minVal = Math.min(...arr)
             return minVal

         }
         minimum ()

         avg.innerText = averageOfNums
         max.innerText = maxVal
         min.innerText = minVal

}