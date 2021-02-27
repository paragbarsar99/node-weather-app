//it is a client side js file
//console.log('client side js running')
 //dom manipulation get access to html 
 const weatherform = document.querySelector('form');
 const search = document.querySelector('input');
 const message_1 = document.querySelector('#message-1')
 const message_2 = document.querySelector('#message-2')
//adding event listener
 weatherform.addEventListener('submit',(e)=> {
  
   // debugger;

        e.preventDefault();
        const location =  search.value;
        console.log(typeof location)
      message_1.textContent = 'Loading...'
      message_2.textContent = ''
         
 //use fetch api to get json data and show it in clint side ui
   try{ 
     if(location === "" )  return message_1.textContent= 'Trouble In Finding Your Loaction!!Please Try Another One' 
    
   
     fetch('/weather?search='+  location).then((response) =>{
    
   
   response.json().then((data) => {
      //handle error
      console.log(data.error)
      if(data.error) {
         
        message_1.textContent ='Trouble in finding your location please try another one';
     }else{
            
          message_1.textContent = data.location
          message_2.textContent = data.forcast;
       }
     })
   })
   
  }catch(e) {
     message_1.textContent = 'please fill the right location'
  }
 
})
