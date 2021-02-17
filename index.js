function numberStatic(){
    // 84 get added in the ul
      // get users input from the DOM
const num = document.getElementById('number-statistics-number-input').value
      // convert users input to a number
      const num1 = Number(num)
      // create a new li and set its text content to the users input
      const li = document.createElement('li')
      li.textContent = num1
      // get the ul from the DOM
      const list = document.getElementById('number-statistics-numbers')
      // append our new li  to the ul
      list.appendChild(li)


    // update average
    const allParas = document.querySelectorAll('li')
    for(let el of allParas){
        
        el.textContent = num1
        console.log('el')
        allParas.appendChild = el
    }
    //update min
    //update max
}