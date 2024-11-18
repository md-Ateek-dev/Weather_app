const apiKey = "8b718b4d2935b7625fe3a17cf8ced283";


// your provide open Weather key


function getWeatherdata (){
 const city=document.getElementById ("cityInput").value ;
 
 const Details=document.getElementById ("Details");
 console.log(Details);
 if(city==''){
  Details.innerHTML="<p>please Enter a city</p>";
  return ;
 }
 
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
 
 fetch(url)
 .then((Response)=>Response.json())
 .then((data)=>{
 
 console.log (data);
 if (data.cod==="404"){
  Details.innerHTML="<p>city not found</p>";
 }
 
 else{
  Details.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
  <p class='temp'><span>Temperature:</span>${data.main.temp}</p>
  <p><span>Humidity:</span>${data.main.humidity}</p>
  <p><span>Sunrise:</span>${data.sys.sunrise}</p>`
 
  
 }
})

.catch((error)=>{
 Details.innerHTML="<p>Error</p>";
});

 
}