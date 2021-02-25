const path = require('path')
const express = require('express');
const hbs = require('hbs')
const geocode = require('./geocode')
const forcast = require('./weathercode')
//const index = require('../views/index')

//express is a function not confirm 


const app = express();
//define path for express config
const publicPathValue = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup static directory and serve
app.use(express.static(publicPathValue))

 //setup handlebar engnie and view location
 app.set('view engine','hbs');
 app.set('views',viewPath);
 hbs.registerPartials(partialsPath);

 //setup diffrent routes
 app.get('',(req,res) => {
       res.render('index',{
         title:'Weather',
         body:'created by noob developer'
       })
  
})
//about route
app.get('/about',(req,res) => {
  res.render('about',{
      title:'About page ',
      body:'created by noob developer'
  })
})

//help route
app.get('/help',(req,res) => {
     res.render('help',{
         title:'help page',
         body:'For any inforamtion'
     })

})

 //weather route
//lets send a json response through server
app.get('/weather',(req,res) => {
      //lets add some dynamic weather data using query methode 
      let address = req.query.search
      //check for null address
      if(!address) return res.send({error:'please fill valid address'})
       //calling mapbox api for lang,long
         geocode(address,(error,{langtitude,longtitude,location} = {}) => {
          
          if(error) return res.send({error:'not getting to point'});
         //passing lan,long for weather on weatherstack's api
          forcast(langtitude,longtitude,(error,forcast)=>{
               
              if(error) return  res.send({error:'not getting to point'});
               //if everything goes right
               res.send({location,forcast})
  
          })
          
     })
    

});
//setting up 404 error
app.get('/help/*',(req,res) => {
      res.render('404',{
           title:'404 page',
           errormessage:'help artical is not avilable',
           body:'created by noob developer'
      }) 
})
//here * is a wild card character who's gonna match to any rout request
app.get('*',(req,res) => {
    res.render('404',{
        title:'404 page',
        errormessage:'404 error!!',
        body:'created by noob developer'
    })

})
//listning port of sever on browser
app.listen(3000,() => {

     console.log('listning at 3000');
});

