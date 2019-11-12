document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#button')
    button.addEventListener('click', () => {
        let listItems = document.createElement('ul')
        listItems.innerText = 'list numbers'
        const inputNumbers = () => {
            document.body.appendChild(listItems)
            let number = parseInt(document.querySelector('#number').value)
            if (!isNaN(number)) {
                let newItem = document.createElement('li')
                newItem.innerText = number
                listItems.appendChild(newItem)
            }
            let everyNumber = document.querySelectorAll('li')
            if (everyNumber.length > 0) {
                let average = 0
                let max = -Infinity
                let min = Infinity
            }
        }

        let firstInput = document.createElement('p1')
        firstInput.innerText = listItems.value
        let secondInput = document.createElement('p2')
        secondInput.innerText = listItems.value
        let thirdInput = document.createElement('p3')
        thirdInput.innerText = listItems.value
        let averageInput = document.createElement('p')
        let maxInput = document.createElement('p')
        let minInput = document.createElement('p')
    })
})

// let newList = document.createElement("ul");
// newList.innerText = "List of your entered numbers :";
// const addNumber = () => {
//     document.body.appendChild(newList);
//     let num = parseInt(document.querySelector("#num_id").value);
//     if (!isNaN(num)) {
//         let newListItem = document.createElement("li");
//         newListItem.innerText = num;
//         newList.appendChild(newListItem);
//     }

// let allNum = document.querySelectorAll("li");
// if (allNum.length > 0) {
//     let average = 0;
//     let max = -Infinity;
//     let min = Infinity;

//     for (let i = 0; i < allNum.length; i++) {
//         let intNum = parseInt(allNum[i].innerText);
//         average += intNum;
//         if (intNum > max) {
//             max = intNum;
//         }
//         if (intNum < min) {
//             min = intNum;
//         }
//     }
//     average /= allNum.length;
//     let firstParagraph = document.querySelector("#p1");
//     let averageParagraph = document.createElement("p");
//     averageParagraph.setAttribute("id", "p1");
//     averageParagraph.innerText = `The average of all the numbers is ${average}`;
//     firstParagraph.parentNode.replaceChild(averageParagraph, firstParagraph);
//     let SecondParagraph = document.querySelector("#p2");
//     let maxParagraph = document.createElement("p");
//     maxParagraph.setAttribute("id", "p2");
//     maxParagraph.innerText = `The biggest number of the list is ${max}`;
//     SecondParagraph.parentNode.replaceChild(maxParagraph, SecondParagraph);
//     let ThirdParagraph = document.querySelector("#p3");
//     let minParagraph = document.createElement("p");
//     minParagraph.setAttribute("id", "p3")
//     minParagraph.innerText = `The smallest number of the list is ${min}`;
//     ThirdParagraph.parentNode.replaceChild(minParagraph, ThirdParagraph);
// }

// }