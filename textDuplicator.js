function duplicator(){
const dupl = document.querySelector("#text-duplicator-string-input").value
const number = Number(document.querySelector("#text-duplicator-number-input").value)
for (let i=0; i < number; i++){
    const li= document.createElement("li")
    //reassign list 
    li.textContent = dupl
    document.querySelector("#text-duplicator-list").appendChild(li)
}

}