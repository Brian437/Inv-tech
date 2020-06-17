/*
  Weather page style
  Created by Brian Chaves
  Created on June 03, 2020
  Updated on June 15, 2020
*/

let retryWithLngAndLat=false
const btnCheckWeatherClick=()=>
{
  city=getElementValue('city')
  if(city=="")
  {
    alert("Enter City")
    return
  }
  retryWithLngAndLat=true
  currentWeatherInfoRequestByCity(city,currentWeatherInfoResponse)
  forcastWeatherInfoRequestByCity(city,forcastWeatherInfoResponse)
  // lngAndLatRequest(getElementValue('city'))
}
const lngAndLatResponse=(request)=>
{
  if(request.status==200)
  {
    let lng=request.response.results[0].geometry.lng
    let lat=request.response.results[0].geometry.lat
    currentWeatherInfoRequestByLngAndLat(lng,lat,currentWeatherInfoResponse)
    forcastWeatherInfoRequestByLngAndLat(lng,lat,forcastWeatherInfoResponse)
  }
  else
  {
    throw "Response failed"
    getElement('city-info').innerHTML=""
    getElement('forcast').innerHTML=""
  }
}
const currentWeatherInfoResponse=(request)=>
{
  if(request.status==404)
  {
    return
  }
  let city=request.response
  let date = new Date()
  let UtcUnixCode = date.getTime()/1000
  timezoneDifferenceMinutes=new Date().getTimezoneOffset()
  timezoneDifferenceSeconds=timezoneDifferenceMinutes*60
  unixCode=UtcUnixCode+timezoneDifferenceSeconds+city.timezone
  if(getElementValue('temperture-fahrenheit'))
  {
    tempUnit="fahrenheit"
    tempSymbol='&#730;F'
  }
  else
  {
    tempUnit="celsius"
    tempSymbol='&#730;C'
  }
  let isDayTime=true
  if(!city.weather[0].icon.includes('d'))
  {
    isDayTime=false
  }
  let cityHtml=
    `<h1>${city.name} </h1> `+
    `Country: ${city.sys.country} <br/> `+
    `Sunrise: ${unixToTime(city.sys.sunrise)} <br/>` +
    `Sunset: ${unixToTime(city.sys.sunset)} <br/> `+
    `lat: ${degToDms(city.coord.lat)} <br/> `+
    `lon: ${degToDms(city.coord.lon)} <br/> `+
    `City Time: ${unixToTime(unixCode)} <br/> `+
    `<h1>${titleCase(city.weather[0].description)}</h1>`+
    `<img class="weather-img-big" src="${getWeatherImage(city.weather[0].id,isDayTime)}" /><br/> `+
    `<h1> ${kelvinTo(tempUnit,city.main.temp,ROUND)} ${tempSymbol}</h1> `+
    `Feels like: ${kelvinTo(tempUnit,city.main.feels_like,ROUND)} ${tempSymbol} <br/> `+
    `Wind Speed: ${city.wind.speed} M/sec </br/>`+
    `Wind Direction: ${city.wind.deg} &#730;(${directionWord(city.wind.deg)}) </br/>`
    if(city.rain !=null)
    {
      cityHtml+='Rain: '+city.rain['1h'] +'mm</br/>'
    }
    else if(city.snow !=null)
    {
      cityHtml+='Snow: '+city.snow['1h'] +'mm</br/>'
    }
    else
    {
      cityHtml+="<br/>"
    }
  getElement('city-info').innerHTML=cityHtml
}
const forcastWeatherInfoResponse=(request)=>
{
  try
  {
    if(request.status==404)
    {
      throw "Invalid city"
    }
    let weatherList=request.response.list
    let forcastHtml=""
    for(let x=0;x<weatherList.length;x++)
    {
      let weather=weatherList[x]
      let tempUnit=""
      let tempSymbol=""
      let isDayTime=true
      if(weather.sys.pod!="d")
      {
        isDayTime=false
      }
      if(getElementValue('temperture-fahrenheit'))
      {
        tempUnit="fahrenheit"
        tempSymbol='&#730;F'
      }
      else
      {
        tempUnit="celsius"
        tempSymbol='&#730;C'
      }
      forcastHtml+=
        `<div id="weather-${x}" class="weather"> `+
          `<h1>${unixToTime(weather.dt)}</h1> `+
          `<h2>${titleCase(weather.weather[0].description)} </h2> `+
          `<img class="weather-img" src="${getWeatherImage(weather.weather[0].id,isDayTime)}" />`+
          `<h2>${kelvinTo(tempUnit,weather.main.temp,ROUND)} ${tempSymbol} </h2><Br/> `+
          `Feels like: ${kelvinTo(tempUnit,weather.main.feels_like,ROUND)} ${tempSymbol}<Br/> `+
          `Wind Speed: ${weather.wind.speed} M/sec </br/>`+
          `Wind Direction: ${weather.wind.deg} &#730;(${directionWord(weather.wind.deg)}) </br/>`;
          if(weather.rain !=null)
          {
            forcastHtml+='Rain: '+weather.rain['3h'] +'mm</br/>'
          }
          else if(weather.snow !=null)
          {
            forcastHtml+='Snow: '+weather.snow['3h'] +'mm</br/>'
          }
          else
          {
            forcastHtml+="<br/>"
          }
        forcastHtml+='</div> '
    }
    getElement('forcast').innerHTML=forcastHtml
  }
  catch(err)
  {
    if(retryWithLngAndLat)
    {
      retryWithLngAndLat=false
      lngAndLatRequest(getElementValue('city'))
    }
    else
    {
      getElement('forcast').innerHTML="<h1 class='red-font'>ERROR</h1> "+err
    }
    
  }

}
const kelvinTo=(unit,kelvin,round=0)=>
{
  if(unit.toLowerCase()=="celsius")
  {
    return kelvinToCelsius(kelvin,round)
  }
  else if(unit.toLowerCase()=="fahrenheit")
  {
    return kelvinToFahrenheit(kelvin,round)
  }
  else
  {
    throw "Invalid unit"
  }
}
const kelvinToCelsius=(kelvin,round=0)=>
{
  let celsius=kelvin-273.15
  return celsius.toFixed(round)
}
const kelvinToFahrenheit=(kelvin,round=0)=>
{
  let fahrenheit=kelvin*9/5-459.67
  return fahrenheit.toFixed(round)
}

const getElementValue=(id)=>
{
  try
  {
    if(
      document.getElementById(id).type=="checkbox" ||
      document.getElementById(id).type =="radio"
    )
    {
      return document.getElementById(id).checked
    }
    else
    {
      return document.getElementById(id).value
    }
  }
  catch(exception)
  {
    return null
  }
}
const setElementValue=(id,value)=>
{
  if(
    document.getElementById(id).type=="checkbox" ||
    document.getElementById(id).type =="radio"
  ){
    document.getElementById(id).checked=value
  }
  else
  {
    document.getElementById(id).value=value
  }
}
const getElement=(id)=>
{
  try
  {
    return document.getElementById(id)
  }
  catch(exception)
  {
    return null
  }
}
const unixToTime=(unix)=>
{
  dateObj = new Date(unix * 1000) 
  let hour=dateObj.getHours()
  let minite=dateObj.getMinutes()
  let miniteString=minite.toString()
  let ampm="AM"
  if(hour>12)
  {
    hour-=12
    ampm="PM"
  }
  else if(hour==12)
  {
    ampm="PM"
  }
  else if(hour==0)
  {
    hour=12
  }
  if(minite<10)
  {
    miniteString="0"+miniteString
  }
  return hour+":"+miniteString+" "+ampm
}
const directionWord=(degrees)=>
{
  degrees=degrees%DEGREES
  for(let x=0;x<DIRECTIONS.length;x++)
  {
    if(degrees<=DIRECTIONS[x].max && degrees>=DIRECTIONS[x].min)
    {
      return DIRECTIONS[x].name
    }
  }
  throw "invalid data"
}

const getWeatherImage=(id,day)=>
{
  try
  {
    if(day)
    {
      return "assets/"+weatherImage[id].day
    }
    else
    {
      return "assets/"+weatherImage[id].night
    }
  }
  catch(err)
  {
    return "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
  }
}
const displayPopulation= (population)=>
{
  if(population<10*1000)
  {
    return population.toString()
  }
  else if(population<100*1000)
  {
    return (population/1000).toFixed(1)+" K"
  }
  else if(population<1000*1000)
  {
    return (population/1000).toFixed(0)+" K"
  }
  else
  {
    return (population/1000/1000).toFixed(2)+" M"
  }
}

const degToDms= (deg)=> 
{
  let d = Math.floor (deg)
  let minfloat = (deg-d)*60
  let m = Math.floor(minfloat)
  let secfloat = (minfloat-m)*60
  let s = Math.round(secfloat)
  // After rounding, the seconds might become 60. These two
  // if-tests are not necessary if no rounding is done.
  if (s==60) {
    m++
    s = 0
  }
  if (m==60) {
   d++
   m=0
  }
  return ("" + d + ":" + m + ":" + s)
}
const titleCase=(string)=> 
{
  let sentence = string.toLowerCase().split(" ")
  for(let i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
  }
  sentence=sentence.join(" ")
  return sentence
}
