var input=document.getElementById('demo');
var button=document.getElementById('btns');


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos) {
        var long=pos.coords.longitude;
        var lat=pos.coords.latitude;
        console.log(long);
        console.log(lat);
        getdata(`${lat},${long}`)
       
    })
}

 async function getdata(query){
    var response=await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${query}&days=3&key=0ef50a145c3444e09bb205225240709`);
    var data= await response.json();
    console.log(data);
    display(data)
    displaytomro(data)
    displayaftertom(data)
    
 }
 button.addEventListener('click',function() {
    var get=input.value;
    getdata(get)
 })
  function display(data){
    var dates=data.current.last_updated;
    
    var date=new Date(dates);
    var dayname=date.toLocaleString('en-us',{weekday:'long'});
    
    day.innerHTML=dayname;
    var daynum=date.getDate();
   
    var month=date.toLocaleString('en-us',{
        month:'long'
    })
   
    monthday.innerHTML=`${daynum}  ${month}`;
    var locat=data.location.name;
    
    city.innerHTML=locat;
   var temp=`${data.current.temp_c}<sup>o</sup> C`;
   
   tempration.innerHTML=temp;
   var img=`https:${data.current.condition.icon}`;
   images.setAttribute('src',img);
   
   var statu=data.current.condition.text;
   
   stat.innerHTML=statu;
   

  }
  function displayaftertom({forecast}){
  var dat1=forecast.forecastday[1].date;
  var dat2=new Date(dat1);
  var dat3=dat2.toLocaleString('en-us',{weekday:'long'})
  
  next.innerHTML=dat3;
  var dat4=`https:${forecast.forecastday[1].day.condition.icon}`;
  next1.setAttribute('src',dat4);
  var dat5=forecast.forecastday[1].day.maxtemp_c;
  next2.innerHTML=`${dat5}<sup>o</sup> C`;
  var dat6=forecast.forecastday[1].day.mintemp_c;
  next3.innerHTML=`${dat6}<sup>o</sup> C`;
  var dat7=forecast.forecastday[1].day.condition.text;
  next4.innerHTML=dat7;
  
  }
  function displaytomro({forecast}){
    var dat1=forecast.forecastday[2].date;
    var dat2=new Date(dat1);
    var dat3=dat2.toLocaleString('en-us',{weekday:'long'})
    
    
    last.innerHTML=dat3;
    var dat4=`https:${forecast.forecastday[2].day.condition.icon}`;
    last1.setAttribute('src',dat4);
    var dat5=forecast.forecastday[2].day.maxtemp_c;
    
    
    last2.innerHTML=`${dat5}<sup>o</sup> C`;
    var dat6=forecast.forecastday[2].day.mintemp_c;
    
    last3.innerHTML=`${dat6}<sup>o</sup> C`;
    var dat7=forecast.forecastday[2].day.condition.text;
    
    
    last4.innerHTML=dat7;
    
    }