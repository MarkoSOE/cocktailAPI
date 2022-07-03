//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const { features } = require("process");

//set an event listener for the button that when clicked, triggers the function getDrink

let drink = document.getElementById('inputSubmitQuery')

drink.addEventListener('submit', getDrink)

//initialize and define function getDrink
function getDrink(){

    let drinkData = document.getElementById('inputText').value 

    fetch(`http://example.com/movies.jsonwww.thecocktaildb.com/api/json/v1/1/search.php?s=` + `${drinkData}`)
  .then(response => response.json())
  .then(data => console.log(data));
}