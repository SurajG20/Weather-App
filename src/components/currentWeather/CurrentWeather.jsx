import './currentWeather.css';

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Itarsi</p>
          <p className="description">sunny</p>
        </div>
      </div>
      <img src="icons/01d.png" alt="weather" />
    </div>
  );
};
export default CurrentWeather;
