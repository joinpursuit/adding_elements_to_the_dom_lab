const numberStats = () => {
      const numberInput = Number(document.querySelector("#number-statistics-number-input").value);
    let quantity = Number(document.querySelectorAll("#number-statistics-numbers li").length + 1)
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(numberInput));
    document.querySelector("#number-statistics-numbers").appendChild(li);
    let numbers = document.querySelectorAll("#number-statistics-numbers li");
    console.log(numbers);
    let enteredNumbersTotal = 0
    let maximum = -Infinity;
    let minimum = Infinity;
    
    for (value of numbers) {
        let integerValue = Number(value.innerText);
        enteredNumbersTotal += integerValue
        if (integerValue < minimum) {
            minimum = integerValue;
        } if (integerValue > maximum) {
            maximum = integerValue;
        }
    }

    let average = Math.floor(enteredNumbersTotal / quantity);

    let averageP = document.querySelector("#number-statistics-average");
    averageP.textContent = average;
    
    let maximumP = document.querySelector("#number-statistics-maximum");
    maximumP.textContent = maximum;

    let minimumP = document.querySelector("#number-statistics-minimum");
    minimumP.textContent = minimum;
    }