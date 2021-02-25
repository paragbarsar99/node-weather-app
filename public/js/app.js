//it is a client side js file
console.log('commit')
 //dom manipulation get access to html 
 const weatherform = document.querySelector('form');
 const search = document.querySelector('input');
 const message_1 = document.querySelector('#message-1')
 const message_2 = document.querySelector('#message-2')
//adding event listener
 weatherform.addEventListener('submit',(e)=> {
        e.preventDefault();
        const location = search.value;

      message_1.textContent = 'Loading...'
      message_2.textContent = ''
         
 //use fetch api to get json data and show it in clint side ui       
fetch('/weather?search='+ location).then((response) =>{
      
    response.json().then((data) => {
      //handle error
      if(data.error) {
         
        message_1.textContent ='trouble in finding your location please try another one';
      }else{
            
          message_1.textContent = data.location;
          message_2.textContent = data.forcast;
        }
     })
   })
       
})