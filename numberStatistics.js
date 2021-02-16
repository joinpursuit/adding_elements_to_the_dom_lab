function statistics(){
    const number = document.getElementById('number-statistics-number-input')
    const num = number.value

    const numList = document.createElement('li')
    numList.innerText = num

    console.log(numList)
   
    

let ave = 0
for (let i=1;i<=num;i++){
    ave += i
}

ave = parseInt(ave/num).toFixed(0)

const average = document.querySelector("#number-statistics-average")
average.textContent = ave

const maximun = document.querySelector("#number-statistics-maximum")
maximun.textContent = num

const minimum = document.querySelector("#number-statistics-minimum")
minimum.textContent = num/num



}