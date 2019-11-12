Adding Elements to the DOM Lab
Question One
Make a website with a heading, an input text field and a button. Clicking the button should change the heading's text to be the text in the input.

```
<!DOCTYPE html>
<html>
    <head>
        <title>

        </title>
    </head>
    <body>
          <h2>Hello</h2>
        <label for="user_input">Insert Text: </label>
        <input type="text" name='user_input' id="user_input">
        <button 
            id="user_click" 
            name="user_input" 
            onclick="changeHeader()"
        >
            Change the Header
        </button>
        <script>
            function changeHeader() {
                let inputText = document.querySelector('#user_input').value
                document.querySelector('h2').innerText = inputText
            }
        </script>
    </body>
</html>


```

Question Two
Make a website that displays a list containing all of the names below. Make all of your "li" items inside of a script.

```
  
<!DOCTYPE html>
<html>
    <head>
     
    </head>
    <body>
        
        <script>
            let results = [
                { "name" : "Anne" },
 
            ]            
            let ul = document.createElement('ul')
            for (let obj of results) {
                let li = document.createElement('li')
                li.innerText = obj.name
                ul.appendChild(li)
            }
            document.body.appendChild(ul)
        </script>
    </body>
</html>

```




Question Three
Make a website that displays a list containing all of the nationality, first name and last name of all of the users below:

```
<!DOCTYPE html>
<html>
    <head>
        <title>
            
        </title>
    </head>
    <body>
        <script>
            let results = [
                {"gender": "female",    "name": {"title": "mademoiselle", "first": "ruth", "last": "nicolas"},  "nat": "CH"},      
            ]
            let ul = document.createElement('ul')
            for (let obj of results) {
                let li = document.createElement('li')
                li.innerText = obj.name.first + " " + obj.name.last + " " + obj.nat
                ul.appendChild(li)
            }
            document.body.appendChild(ul)
        </script>
    </body>
</html>

```

Question Four
Make a website that displays a list of all of the names and populations of the following Star Wars planets

```
<!DOCTYPE html>
<html>
    <head>
        <title>
            
        </title>
    </head>
    <body>
        <script>
        let results = [
            {
                "name": "Alderaan",
                "population": "2000000000",
            }  
        ]   
        let ul = document.createElement('ul')
            for (let obj of results) {
                let li = document.createElement('li')
                li.innerText = obj.name + " " + obj.population 
                ul.appendChild(li)
            }
            document.body.appendChild(ul)
        </script>

    </body>
</html>

```

Question Five
Make a website with a text input and a button. Clicking on the button should create a new list item with its text the same as the text in the input.

```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

        <label for="list_entry">Enter an item for your list: </label>
        <input type="text" name="list_item" id="list_entry">
        <button
            id="add_entry"
            name="list_item"
            onclick="addItem()"
        >
            Add an Item to the List
        </button>
        <ul id="entries"></ul>
        <script>
        const addItem = () => {
            let item = document.createElement('li')
            item.innerText = document.querySelector('#list_entry').value
            document.querySelector('#entries').appendChild(item)
        }
        
        </script>
    </body>
</html>

```
Question Six
Make a website with a text input, a number input and a button. Clicking on the button should add that many copies of the text in the text input to a list.

```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
      
        <label for="input_text">Enter your text here</label>
        <br>
        <input type="text" name="text_entry" id="input_text">
        <br>
        <label for="amount">Enter amount of times</label>
        <br>
        <input type="number" name="text_entry" id="amount">
        <br>
        <button
            id="add_entry"
            name="text_entry"
            onclick="dispXTimes()"
        >
            Add
        </button>
        <p id="entries"></p>
        <script>
            const dispXTimes = () => {
                for (let i = 0; i < document.querySelector('#amount').value; i++) {
                    document.querySelector('#entries').innerText += `${document.querySelector('#input_text').value}\n`
                }
            }
        
        </script>

    </body>
</html>
```

Question Seven
Make a website with a number input, a button, and 3 paragraphs. Clicking on the button should add the number to a list. The first paragraph should show the average of all the numbers, the second paragraph should show the maximum value, and the third paragraph should show the minimum value.

Question Eight
Make a website with a button. Clicking on the button should remove the button.

Question Nine
Make a website with a button, and 5 paragraph tags. Clicking on the button should remove all of the paragraphs.

Question Ten
Make a website with a number input, a heading and a button. Clicking on the button should replace the heading with a heading matching the number in the input. (e.g Entering 4 into the number input should turn the heading into <h4>