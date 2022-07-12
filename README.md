# Introduction

<a href= "https://cocktailnodeapi.herokuapp.com/" > Cocktail API Node App</a>

This is a simple web app where a user can type in a drink they would like a recipe for and the drink name, image, and recipe will be displayed on the page. 
This application uses the <a href= "https://www.thecocktaildb.com/api.php" > Cocktail API </a>
to fetch drink data based on drink name (e.g. using user input 'margarita' 
will fetch www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita).

# How it's made
<p align="middle">
<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=black&style=plastic" alt="badge sample"/>
</p>

The web application is built using the Express framework, allowing us to manage client requests to our server.js. The user enters a drink name into the HTML form, and upon submission, sends a post request to the server.js. The server uses body-parser to parse the request, obtain the name of the drink, and send a fetch request to the cocktailapi. The response from the API is sent to the ejs and renders an HTML with the contents of the response. If an error is sent back from the api, the error is console logged. An error can occur when the user inputs a word that isn't found in the cocktail api.

# Optimizations

Currently, the application is not able to handle error requests in a user friendly manner. The response sent back using ejs returns a blank page with an error. An improvement would be to return a useful error message to the user. A further improvement would be to respond with the error page and add possible word suggestions based on the user input.


# Lessons Learned

