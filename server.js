const { request } = require('express')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = 2000

app.use(express.static(__dirname + '/public'))
app.set('views', __dirname+'/views/')
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) =>{
    response.render('/index.html')
})

app.post('/submitDrink',(request,response) =>{
    
    console.log('req.body: ', request.body.textinput);

    let drink = request.body.textinput

    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min + 1) +min)
    }
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    //api template
    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            //need to determine a random drink within the drinks array returned from the 

            let i = randomIntFromInterval(0,data.drinks.length)
            
            let drinkName = data.drinks[i].strDrink
            console.log(drinkName)
            //drink glass
            let drinkGlass = data.drinks[i].strGlass
            console.log(drinkGlass)
            //ingredients
            //create an array to store the ingredients
            let ingredients = []
            ingredients.push(data.drinks[i].strIngredient1, data.drinks[i].strIngredient2, data.drinks[i].strIngredient3, data.drinks[i].strIngredient4, data.drinks[i].strIngredient5,data.drinks[i].strIngredient6,data.drinks[i].strIngredient7,data.drinks[i].strIngredient8,data.drinks[i].strIngredient9,data.drinks[i].strIngredient10,data.drinks[i].strIngredient11,data.drinks[i].strIngredient12,data.drinks[i].strIngredient13,data.drinks[i].strIngredient14,data.drinks[i].strIngredient15)

            //measure
            //create an array to store the measures
            let measures = []
            measures.push(data.drinks [i].strMeasure1 , data.drinks [i].strMeasure2, data.drinks [i].strMeasure3, data.drinks [i].strMeasure4, data.drinks [i].strMeasure5, data.drinks [i].strMeasure6, data.drinks [i].strMeasure7, data.drinks [i].strMeasure8, data.drinks [i].strMeasure9, data.drinks [i].strMeasure10, data.drinks [i].strMeasure11, data.drinks [i].strMeasure12, data.drinks [i].strMeasure13, data.drinks [i].strMeasure14, data.drinks [i].strMeasure15)

            ingredients = ingredients.filter(function(e){
                return e
            })

			measures = measures.filter(function(e){
                return e
            })

            console.log(ingredients)
            console.log(measures)

            let combinedingredientsinstructions = []
            
            for(let i = 0; i < ingredients.length; i++)

            //instructions
            let instructions = data.drinks[i].strInstructions

			console.log(instructions)

        })
        //error catch and display error
        .catch(err => {
            console.log(`error ${err}`)
        });
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server runnning on port ${PORT}`)
})