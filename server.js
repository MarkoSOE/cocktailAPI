const { request } = require('express')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = 2000

app.set('views', __dirname+'/views/')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
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

            let ingredientsCounter = 1;

            while(data.drinks[i]['strIngredient' + ingredientsCounter]){
                ingredients.push(data.drinks[i]['strIngredient' + ingredientsCounter])
                ingredientsCounter += 1;
            }

            console.log(ingredients)
            
            //measure
            //create an array to store the measures
            let measures = []
            
            let measuresCounter = 1;

            while(data.drinks[i]['strMeasure' + measuresCounter]){
                measures.push(data.drinks[i]['strMeasure' + measuresCounter])
                measuresCounter += 1;
            }

            console.log(measures)

            // let combinedingredientsmeasures = []
            
            // for(let i = 0; i < ingredients.length; i++){
            //     combinedingredientsmeasures.push(measures[i] + " " + ingredients[i])
            // }

            // console.log(combinedingredientsmeasures)

            // //instructions
            // let instructions = data.drinks[i].strInstructions.split('.')

			// console.log(instructions)

            //send the data from the API to the template to generate html
            response.render('drinkspage.ejs', {info:data})
        })
        //error catch and display error
        .catch(err => {
            console.log(`error ${err}`)
        });
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server runnning on port ${PORT}`)
})