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
    
    console.log('req.name: ', request.name);
    console.log('req.data: ', request.data);
    console.log('req.body: ', request.body);
    
    // const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    // //api template
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         //fill in html elements with the title of the drink, the image of the drink, and the instructions for the drink
    //         console.log(data)
    //     })
    //     //error catch and display error
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     });
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server runnning on port ${PORT}`)
})