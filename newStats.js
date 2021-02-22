function callFunctionHere() {

    let input = Number(document.getElementById('number-statistics-number-input').value)

    let li = document.createElement('li')
    let ul = document.getElementById('number-statistics-number-ul')
    li.textContent = input

    ul.appendChild(li)

    console.log(ul.children)

    let allItems = document.querySelectorAll('#number-statistics-numbers-li')

    for (let i = 0; i < allItems.length; i++) {
        console.log(allItems[i].textContent)
    }



}