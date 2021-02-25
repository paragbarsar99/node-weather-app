const request = require('request');

function geocode(address,callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGFyYWdzaGFybWEiLCJhIjoiY2tsMXZtZWVtMHl3MDJ2bGJ0Nng3ZzZncSJ9.aTY9vi5SUlD5YWcE-Ix-8A'
    //call request 
    request({url,json:true}, (error,{body}) => { //doing destructring in response to {body}
      //handle error's 
       try{
        callback(undefined,{
        langtitude:body.features[0].center[0],
        longtitude:body.features[0].center[1],
        location:body.features[0].place_name
       })
      }catch(e) {
        callback(error,undefined)
      }
    })
  }

    module.exports = geocode;

    // langtitude:response.body.features[0].center[0],
    //       longtitude:response.body.features[0].center[1],
    //       location:response.body.features[0].place_name' name of the city is ' +response.body.features[0].place_name +
          
    
    // ' langtitiude is ' +   response.body.features[0].center[0]  +
          // ' longtitude is ' +  response.body.features[0].center[1]
  
          //  return { langtitude:response.body.features[0].center[0],
        //   longtitude:response.body.features[0].center[1],
        //   location:response.body.features[0].place_name
        