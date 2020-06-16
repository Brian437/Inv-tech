/*
  Weather page style
  Created by Brian Chaves
  Created on June 15, 2020
  Updated on June 15, 2020
*/

const lngAndLatRequest=(location)=>
{
  let requestURL=`https://api.opencagedata.com/geocode/v1/json?q=${location},ca&key=${OPEN_CAGE_API_KEY}`
  let request = new XMLHttpRequest({mozSystem: true})
  request.open('GET', requestURL)
  request.onload = ()=> lngAndLatResponse(request)
  request.responseType="json"
  request.send()
}
const currentWeatherInfoRequestByCity=(city,onLoadEvent)=>
{
  let requestURL=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`

  let request = new XMLHttpRequest({mozSystem: true})
  request.open('GET', requestURL)
  request.onload = ()=> onLoadEvent(request)
  request.responseType="json"
  request.send()
}
const forcastWeatherInfoRequestByCity=(city,onLoadEvent)=>
{
  let requestURL=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}`

  let request = new XMLHttpRequest({mozSystem: true})
  request.open('GET', requestURL)
  request.onload = ()=>onLoadEvent(request)
  request.responseType="json"
  request.send();
}
const currentWeatherInfoRequestByLngAndLat=(lng,lat,onLoadEvent)=>
{
  let requestURL=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`

  let request = new XMLHttpRequest({mozSystem: true})
  request.open('GET', requestURL)
  request.onload = ()=> onLoadEvent(request)
  request.responseType="json"
  request.send()
}
const forcastWeatherInfoRequestByLngAndLat=(lng,lat,onLoadEvent)=>
{
  let requestURL=`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`

  let request = new XMLHttpRequest({mozSystem: true})
  request.open('POST', requestURL)
  request.onload = ()=>onLoadEvent(request)
  request.responseType="json"
  request.send()

}