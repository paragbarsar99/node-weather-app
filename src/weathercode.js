const request = require('request')
//const geocode = require('../utils/geocode')

//make a weather data request to server using weather stacks api
function weathercode (langtitiude,longtitude,callback) {
    const url =  'http://api.weatherstack.com/current?access_key=8dafe2e2186d580a654ce6008dfad4af&query=' + langtitiude + ',' + longtitude + '&units=f'
    request({url,json:true},(error,{body}) => { ///doing destructring in response to {body}
      
     try{
       callback(undefined,
         'temperature is '+
          body.current.temperature + ' But it feelslike '+ 
          body.current.feelslike + ' and here is weather discription '+ 
          body.current.weather_descriptions[0]
        )
      }catch(e){
         callback(error,undefined)
      } 
    })
  }
  module.exports = weathercode;
    

  // console.log(`in  ${response.body.location.name} temperature is 
  //         ${response.body.current.temperature} But it feelslike  
  //        ${ response.body.current.feelslike} and summery is 
  //        ${ response.body.current.weather_descriptions[0]}`)