const express = require("express");

const blogApi = require('./api/blog-api/blog-api-web')
const getWeather=require("./api/weather-api/routes/weather.route")
const SSLCommerzPayment = require('sslcommerz')

const app = express();
const payment =require("./api/payment-api/routes/payment.controller")


configureApp = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    require("./config/database/connection");
}


configureApp();

app.use('/blog-api', blogApi);
app.use('/getWeather',getWeather)


app.get("/express", ((req, res) => {
    console.log("Sending data");
    res.send('hello world');


}))
app.get('/init',payment)


app.listen(8001)
module.exports = app;

//login change

//new_branch

