// function textDuplicator(){
//     const text= document.getElementById("text-duplicator-string-input")
//     const duplicator = text.value
//     console.log(duplicator)

//     const number = document.getElementById("text-duplicator-number-input")
//     const times = number.value
//     console.log(times)

//     const unList = document.getElementById("text-duplicator-list")
//     for (let i=0; i<times; i++){
//     unList.innerHTML += `<li>${duplicator}</li>`
//     }

// }

function textDuplicator(){

// Get the data or text from input text-duplicator string
    const text = document.getElementById("text-duplicator-string-input")
    const value = text.value
    //text.value = ''
// Get the number from input text-duplicator-number

    const number = document.getElementById("text-duplicator-number-input")
    const times = number.value
    //number.value =''

// Create an unordered list with the duplicated string

    const ul = document.createElement('ul')
    ul.id = "text-duplicator-list"
    document.body.appendChild(ul)

    // Duplicate the string and add it to the ul 

    for (let i=1; i<= times; i++ ){
        const duplicated = document.createElement('li')
        duplicated.textContent = value
        ul.appendChild(duplicated)
    }


}

