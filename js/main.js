//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


//set an event listener for the button that when clicked, triggers the function getDrink
document.querySelector('button').addEventListener('click', getDrink)

//initialize and define function getDrink
function getDrink(){
    //gather the user input of which drink they would like to see by using queryselector value
    let drink = document.querySelector('input').value;

    //using template literals to plug in the user selected drink into the API search
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

    //defining a fundtion that takes in a min max and returns a random integer between those. src: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    function returnIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1) + min);
    }
    
    //api template
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //define a variable that calls the returnIntFromInterval function so that it's consistent throughout the below lines
            let rand = returnIntFromInterval(0,data.drinks.length);
            //fill in html elements with the title of the drink, the image of the drink, and the instructions for the drink
            document.querySelector('h2').innerText = data.drinks[rand].strDrink;
            document.querySelector('img').src = data.drinks[rand].strDrinkThumb;
            document.querySelector('h3').innerText = data.drinks[rand].strInstructions;
        })
        //error catch and display error
        .catch(err => {
            console.log(`error ${err}`)
        });

}