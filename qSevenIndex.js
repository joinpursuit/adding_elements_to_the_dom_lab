document.addEventListener("DOMContentLoaded",()=>{

    let submit = document.querySelector("#submitButton")

    submit.addEventListener("click", ()=>{
        let number=document.querySelector("#number")
        let numberEntered = number.value
        let li =document.createElement("li")
        li.innerText = numberEntered
        let list = document.querySelector("ol")
        list.appendChild(li)

        numlist = document.querySelectorAll("li")
        console.log(numlist)
        // debugger
        numlist.forEach(el => {
            larg = -Infinity
            if(el.innerText>larg){
                larg = el.innerText
            }
            average = document.querySelector("#average")
            average.innerText = larg
            debugger
        });
    })
    
})