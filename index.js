const textDup = () => {
    const numInput = document.getElementById("text-duplicator-number-input").value
    const textInput = document.getElementById("text-duplicator-string-input")

    
    
    for (let i = 0; i < numInput; i ++) {
        let li = document.createElement('li');
        console.log(textInput.value)
        li.textContent = textInput.value;
        document.getElementById("text-duplicator-list").appendChild(li)

}
}

const numStat = () => {
    let minMaxArray = [];
    let input = document.getElementById("number-statistics-number-input").value;
    let list = document.getElementById("number-statistics-numbers");
    const newLi = document.createElement("li");
    newLi.textContent = input;
    newLi.id = "numLi";
    list.appendChild(newLi);
    let allNum = document.querySelectorAll("#numLi");
    let sum = 0;
    allNum.forEach((el)=> {
            minMaxArray.push(Number(el.textContent));
            sum += Number(el.textContent);
    })
        document.getElementById("number-statistics-average").innerText = `The average is: ${sum / allNum.length}`;
        document.getElementById("number-statistics-maximum").innerText = `The max is: ${Math.max(...minMaxArray)}`;
        document.getElementById('number-statistics-minimum').innerText = `The min is:${Math.min(...minMaxArray)}`;
     
    }
    
    
    