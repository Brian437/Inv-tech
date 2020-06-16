/*
  Created by Brian Chaves
  Created on June 04, 2020
  Updated on June 04, 2020
*/
//https://openweathermap.org/weather-conditions
const weatherImage=[]

//Thunderstorms
weatherImage[200]={
  name:"thunderstorm with light rain ",
  day:"weather-icon/SVG/500/1530385-weather.svg",
  night:"weather-icon/SVG/500/1530381-weather.svg"
}
weatherImage[201]={
  name:"thunderstorm with rain ",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}
weatherImage[202]={
  name:"thunderstorm with heavy rain ",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}
weatherImage[210]={
  name:"light thunderstorm",
  day:"weather-icon/SVG/500/1530385-weather.svg",
  night:"weather-icon/SVG/500/1530381-weather.svg"
}
weatherImage[211]={
  name:"thunderstorm",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}
weatherImage[212]={
  name:"heavy thunderstorm",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}
weatherImage[221]={
  name:"ragged thunderstorm",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}
weatherImage[230]={
  name:"thunderstorm with light drizzle",
  day:"weather-icon/SVG/500/1530385-weather.svg",
  night:"weather-icon/SVG/500/1530381-weather.svg"
}
weatherImage[231]={
  name:"thunderstorm with drizzle",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}
weatherImage[232]={
  name:"thunderstorm with heavy drizzle",
  day:"weather-icon/SVG/500/1530363-weather.svg",
  night:"weather-icon/SVG/500/1530363-weather.svg"
}

//Drizzle
weatherImage[300]={
  name:"light intensity drizzle ",
  day:"weather-icon/SVG/500/1530374-weather.svg",
  night:"weather-icon/SVG/500/1530372-weather.svg"
}
weatherImage[301]={
  name:"drizzle",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}
weatherImage[302]={
  name:"heavy intensity drizzle",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}
weatherImage[310]={
  name:"light intensity drizzle rain ",
  day:"weather-icon/SVG/500/1530374-weather.svg",
  night:"weather-icon/SVG/500/1530372-weather.svg"
}
weatherImage[311]={
  name:"drizzle rain ",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}
weatherImage[312]={
  name:"heavy intensity drizzle rain ",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}
weatherImage[313]={
  name:"shower rain and drizzle ",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}
weatherImage[314]={
  name:"  heavy shower rain and drizzle ",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}
weatherImage[321]={
  name:"shower drizzle ",
  day:"weather-icon/SVG/500/1530367-weather.svg",
  night:"weather-icon/SVG/500/1530367-weather.svg",
}

//rain
weatherImage[500]={
  name:"light rain",
  day:"weather-icon/SVG/500/1530365-weather.svg",
  night:"weather-icon/SVG/500/1530365-weather.svg"
}
weatherImage[501]={
  name:"moderate rain",
  day:"weather-icon/SVG/500/1530364-weather.svg",
  night:"weather-icon/SVG/500/1530364-weather.svg"
}
weatherImage[502]={
  name:"heavy intensity rain",
  day:"weather-icon/SVG/500/1530362-weather.svg",
  night:"weather-icon/SVG/500/1530362-weather.svg"
}
weatherImage[503]={
  name:"very heavy rain",
  day:"weather-icon/SVG/500/1530362-weather.svg",
  night:"weather-icon/SVG/500/1530362-weather.svg"
}
weatherImage[504]={
  name:" extreme rain  ",
  day:"weather-icon/SVG/500/1530362-weather.svg",
  night:"weather-icon/SVG/500/1530362-weather.svg"
}
weatherImage[511]={
  name:"  freezing rain ",
  day:"weather-icon/SVG/500/1530364-weather.svg",
  night:"weather-icon/SVG/500/1530364-weather.svg"
}
weatherImage[520]={
  name:"  light intensity shower rain  ",
  day:"weather-icon/SVG/500/1530390-weather.svg",
  night:"weather-icon/SVG/500/1530379-weather.svg"
}
weatherImage[521]={
  name:"  shower rain  ",
  day:"weather-icon/SVG/500/1530390-weather.svg",
  night:"weather-icon/SVG/500/1530379-weather.svg"
}
weatherImage[522]={
  name:"  heavy intensity shower rain  ",
  day:"weather-icon/SVG/500/1530362-weather.svg",
  night:"weather-icon/SVG/500/1530362-weather.svg"
}
weatherImage[531]={
  name:"  ragged shower rain ",
  day:"weather-icon/SVG/500/1530362-weather.svg",
  night:"weather-icon/SVG/500/1530362-weather.svg"
}


//snow
weatherImage[600]={
  name:"light snow ",
  day:"weather-icon/SVG/500/1530388-weather.svg",
  night:"weather-icon/SVG/500/1530380-weather.svg"
}
weatherImage[601]={
  name:"snow",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}
weatherImage[602]={
  name:"Heavy snow",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}
weatherImage[611]={
  name:"sleet",
  day:"weather-icon/SVG/500/1530370-weather.svg",
  night:"weather-icon/SVG/500/1530370-weather.svg"
}
weatherImage[612]={
  name:"    Light shower sleet   ",
  day:"weather-icon/SVG/500/1530370-weather.svg",
  night:"weather-icon/SVG/500/1530370-weather.svg"
}
weatherImage[613]={
  name:"  Shower sleet  ",
  day:"weather-icon/SVG/500/1530370-weather.svg",
  night:"weather-icon/SVG/500/1530370-weather.svg"
}
weatherImage[615]={
  name:"  Light rain and snow   ",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}
weatherImage[616]={
  name:"  Rain and snow  ",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}
weatherImage[620]={
  name:"    Light shower snow   ",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}
weatherImage[621]={
  name:"    Shower snow  ",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}
weatherImage[622]={
  name:"Heavy shower snow  ",
  day:"weather-icon/SVG/500/1530371-weather.svg",
  night:"weather-icon/SVG/500/1530371-weather.svg"
}

//Atmosphere 
weatherImage[701]={
  name:"mist",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[711]={
  name:"smoke",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[721]={
  name:"haze",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[731]={
  name:"dust",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[741]={
  name:" fog",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[751]={
  name:"  sand  ",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[761]={
  name:"  dust  ",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[762]={
  name:"  ash ",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[771]={
  name:"squall",
  day:"fog.png",
  night:"fog.png"
}
weatherImage[781]={
  name:"tornado",
  day:"fog.png",
  night:"fog.png"
}


//Clear/Clouds
weatherImage[800]={
  name:"  clear ",
  day:"weather-icon/SVG/500/1530392-weather.svg",
  night:"weather-icon/SVG/500/1530382-weather.svg"
}
weatherImage[801]={
  name:"  few clouds ",
  day:"weather-icon/SVG/500/1530391-weather.svg",
  night:"weather-icon/SVG/500/1530383-weather.svg"
}
weatherImage[802]={
  name:"scattered clouds",
  day:"weather-icon/SVG/500/1530391-weather.svg",
  night:"weather-icon/SVG/500/1530383-weather.svg"
}
weatherImage[803]={
  name:"  broken clouds: ",
  day:"weather-icon/SVG/500/1530369-weather.svg",
  night:"weather-icon/SVG/500/1530369-weather.svg"
}
weatherImage[804]={
  name:"    overcast clouds ",
  day:"weather-icon/SVG/500/1530369-weather.svg",
  night:"weather-icon/SVG/500/1530369-weather.svg"
}

