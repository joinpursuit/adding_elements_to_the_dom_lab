function textDuplicator(){
    const text= document.getElementById("text-duplicator-string-input")
    const duplicator = text.value
    console.log(duplicator)

    const number = document.getElementById("text-duplicator-number-input")
    const times = number.value
    console.log(times)

    const unList = document.getElementById("text-duplicator-list")
    for (let i=0; i<times; i++){
    unList.innerHTML += `<li>${duplicator}</li>`
    }

}