document.addEventListener("DOMContentLoaded",()=>{
    submit=document.querySelector("#submitButton")
    submit.addEventListener("click",()=>{
        text=document.querySelector("#text")
        textEntered = text.value
        num=document.querySelector("#number")
        numEntered = num.value
        list=document.createElement("ol")
        let num2 = 0;
        while(num2 < numEntered){
            li=document.createElement("li")
            li.innerText = textEntered
            list.appendChild(li)
            num2 ++
        }
        document.body.appendChild(list)
    })
})