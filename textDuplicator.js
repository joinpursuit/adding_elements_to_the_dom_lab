const textDuplicator=()=>{
    const str = String(document.querySelector('#text-duplicator-string-input').value)
    const num = Number(document.querySelector('#text-duplicator-number-input').value)

    const uList = document.getElementById("text-duplicator-list")

    for(let i = 1; i <= num; i++){
        let listItem = document.createElement('li')
        listItem.textContent = str

        uList.appendChild(listItem)
    }
};


//take value from string text-box and store it in a variable
//take value from number text-box and store it in a variable 
//create a ul and give it an id attribute 
//create as many li's as the number provided in text-box
//append li and ul to body of document 

 // uList.setAttribute('id', 'text-duplicator-list')
 //I can use this to add attributes to elements I created. Make sure the id is not in the html