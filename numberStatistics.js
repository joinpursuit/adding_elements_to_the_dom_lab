function numStat() {
    // 84 gets added to the ul:
        //get users input from the dom
        const input = document.getElementById('number-statistics')
        const num = input.value
        //convert user input to number
        const num1 = Number(num)
        
        //create new li and set its text content to user input
        const li = document.createElement('li')
        li.textContent = num1
        //get the ul from the dom
        const list = document.querySelector('#numbers-statistics-numbers')
        //append new li to the ul
        list.appendChild(li)
        console.log(list)

        //get li from dom
            //trying to select the li elements that appear later in code and DO NOT have id tags
            //want to get the li under a particular ul, because there are multiple li that are under a ul you select the li that is a child of ul based on the id of the ul that you gave an id to
        const newNum = document.querySelector("li")
        //add new li numbers together and divide by the number of inputs to get the average
        //assign average to number-statistics-average paragraph


        function getAverage() {
            const average = document.querySelectorAll("li")
            console.log(average)
            console.log(typeof average)
        }
        getAverage()


        //update average
        //update min
        //update max
}
