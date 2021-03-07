const addingNumbers = () => {
   let input = Number(document.getElementById('number-statistics-number-input'));
   let li = document.createElement('li');
   let ul = document.getElementById('number-statistics-numbers');

   li.textContent = input;

   let allItems = document.querySelectorAll('#number-statistics-numbers li');

   for (let i = 0; i < allItems.length; i++){
       console.log(allItems[i]);
   }
} 