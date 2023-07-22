import React, {useState} from 'react'
import './App.css'


function App() {
  const [weatherData, setWeatherData] = useState('');
  
  const [location, setlocation] = useState('');
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e94203882f1068d1f5dfefcbb4d365cd`;

  const fetchLocation = (event) =>{
    fetch(apiUrl)
    .then((response) =>{
      return response.json()
    }).then((data) =>{
      setWeatherData(data)
      console.log(data)
    })
    setlocation('')
  }


  return (
    <div className='app'>
      <div className="search">
        <input className='searchbar' type="text" placeholder='Type your location here' value={location} onChange={event => setlocation(event.target.value)}/>
        <button className="searchbtn" onClick={fetchLocation}>Search</button>
      </div>

      <div className="locationandtemperature">
      <div className="cityandcountry">
        <h1>{weatherData.name}</h1>
        {weatherData.sys ? <h2 className='values'>{weatherData.sys.country}</h2> : null}
      </div>
      
      <div className="temperature">
        {weatherData.main ? <h1>{weatherData.main.temp} °F</h1> : null}
        {weatherData.weather ? <h3 className='values'>{weatherData.weather[0].description}</h3> : null}
      </div>
      </div>
{weatherData.name != undefined && 
      <div className='multiplecontent'>
        <div className="feelslike">
          {weatherData.main ? <h2 className='values'>{weatherData.main.feels_like} °F</h2> : null}
          <h1>Feels Like</h1>
        </div>

        <div className="humidity">
          {weatherData.main ? <h2 className='values'>{weatherData.main.humidity} %</h2> : null}
          <h1>Humidity</h1>
        </div>

        <div className="windspeed">
          {weatherData.wind ? <h2 className='values'>{weatherData.wind.speed} MPH</h2> : null}
          <h1>Wind Speed</h1>
        </div>
      </div>
}
    </div>
  )
}

export default App