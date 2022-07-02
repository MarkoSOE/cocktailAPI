const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 2000

app.use(express.static(__dirname + '/public'))
app.use(express.json())

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.post('/submitDrink',(request,response) =>{
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server runnning on port ${PORT}`)
})