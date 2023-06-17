import React, { useState } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather/currentWeather';
import Search from './components/search';
// Icons

const APIkey = 'a1d18af1391c16b2ae1f518dadd2fb58';

function App() {
  const [loading, setLoading] = useState(true);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <main>
      <div className="search-container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <CurrentWeather />
    </main>
  );
}

export default App;

// let icon;

// switch (data && data.weather[0].main) {
//   case 'Clouds':
//     icon = <IoMdCloudy />;
//     break;
//   case 'Haze':
//     icon = <BsCloudHaze2Fill />;
//     break;
//   case 'Rain':
//     icon = <IoMdRainy />;
//     break;
//   case 'Clear':
//     icon = <IoMdSunny />;
//     break;
//   case 'Drizzle':
//     icon = <BsCloudDrizzleFill />;
//     break;
//   case 'Snow':
//     icon = <IoMdSnow />;
//     break;
//   case 'Thunderstorm':
//     icon = <IoMdThunderstorm />;
//     break;
// }
// useEffect(() => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

//   axios.get(url).then((res) => {
//     setData(res.data);
//   });
//   setLoading(false);
// }, [location]);

// if (loading) {
//   return <Loading />;
// }
