//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const { features } = require("process");

//set an event listener for the button that when clicked, triggers the function getDrink
document.getElementById('inputSubmitQuery').addEventListener('submit', getDrink)

//initialize and define function getDrink
function getDrink(){
    console.log('hi')
    //gather the user input of which drink they would like to see by using queryselector value
    let drink = document.getElementById('inputText').value;

    fetch('/submitDrink',{
        method: 'POST',
        headers: {
            'Content-Type' : 'text/plain'
        },
        body: drink
    })
}