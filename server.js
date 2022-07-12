const { request } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
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
    let drink = request.body.textinput
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    //api template
    fetch(url)
        .then(res => res.json())
        .then(data => {
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