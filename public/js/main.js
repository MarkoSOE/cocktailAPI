//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//initialize a starting position for the drinks array
let i = 0;

//set an event listener for the button that when clicked, triggers the function getDrink
document.getElementById('inputSubmitQuery').addEventListener('click', getDrink)

//initialize and define function getDrink
function getDrink(){

    //gather the user input of which drink they would like to see by using queryselector value
    let drink = document.getElementById('inputText').value;

    //using template literals to plug in the user selected drink into the API search
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

    
    //api template
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //fill in html elements with the title of the drink, the image of the drink, and the instructions for the drink
            console.log(data)
        })
        //error catch and display error
        .catch(err => {
            console.log(`error ${err}`)
        });
}