# Products
Code Structure:
Routes: contains the routes.
Core: contains the schemas and the models.
app.js: the server file.

Used Packages:
Express, body-parser, mongoose, dotenv, nodemon

Npm Scripts:
npm start: start the app

Run the App Locally through:
http://localhost:8400

Routes:
Products Endpoints:
POST api/products
Request body:
{
    "name":"hulkToy",
    "size":"3Y",
    "quantity":"20",
    "category":"NEW",
    "price":30
}
GET api/products?category=&page=&size=

Card Endpoints:
POST api/cards
{ "products":[
    {
        "id":"",
        "size":"",
        "quantity":,
        "price":
    },
        {
        "id":"",
        "size":"",
        "quantity":,
        "price":
    }
] }


