const inputArr = []
const numberSnek = () => {
    const input = Number(document.querySelector('#number-statistics-number-input').value);
    const ul = document.querySelector('#number-statistics-numbers')
    let avg = document.querySelector('#number-statistics-average')
    let max = document.querySelector('#number-statistics-maximum')
    let min = document.querySelector('#number-statistics-minimum')

    inputArr.unshift(input)
    let li = document.createElement('li')    
    li.textContent = input
    ul.appendChild(li)

    let sorter = inputArr.sort((lo, hi) => { return hi - lo })     

    max.textContent = `Maximum: ${sorter[0]}`
    min.textContent = `Minimum: ${sorter[sorter.length - 1]}`    
    avg.textContent = `Average: ${sorter.reduce((a, b) => { return (a + b) })/sorter.length}`    
}