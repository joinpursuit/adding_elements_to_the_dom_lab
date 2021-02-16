const textDuplicator = () => {
    let str = document.querySelector("#text-duplicator-string-input").value
    let num = document.querySelector("#text-duplicator-number-input").value
    
    for(let i=0; i<Number(num); i++){
         let li=document.createElement("li")
         li.textContent = str
         document.querySelector('#text-duplicator-list').appendChild(li)

    }
}