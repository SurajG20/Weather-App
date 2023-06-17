import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Loading from './components/Loading';
import Search from './components/search';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import Forecast from './components/forecast/Forecast';
// Icons

const APIkey = 'a1d18af1391c16b2ae1f518dadd2fb58';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecasts] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecasts({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log('weather', currentWeather);
  console.log('forecast', forecast);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="search-container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </main>
  );
}

export default App;
