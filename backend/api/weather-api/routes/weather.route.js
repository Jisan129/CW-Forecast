var ForecastIo = require('forecastio');

const express = require('express')
const route = express.Router();

var options = {
    units:'si',
    exclude:'minutely,hourly,daily,hourly'
}
var forecastIo = new ForecastIo('2286dd2204e405b21ad2dec95e789d49');

route.get('/',(req, res) =>{
    forecastIo.forecast('23.8103', '90.4125',options).then(function(data) {

         console.log(JSON.stringify(data, null, 2));
          res.send(JSON.stringify(data,null,2))


/*
        res.send(JSON.stringify(data.currently.icon,null,2))
*/

        var forecastIoEnd = new ForecastIo('2286dd2204e405b21ad2dec95e789d49', {timeout: 30*1000});
        res.end()
    });

})
module.exports=route