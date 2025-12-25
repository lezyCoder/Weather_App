import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const { currentWeather, city, loading, error } = useSelector(
    (state) => state.weatherDetails
  );

  if (loading) return <p className="p-10">Featching Report ....</p>;
  if (error) return <p>{error}</p>;
  if (!currentWeather || currentWeather.length === 0) {
    return <p className="p-10">No weather data available</p>;
  }

  const tempKelvin = currentWeather[0].main.temp;
  const temperature = Math.floor(tempKelvin - 273.15).toFixed(1);

  const humidity = currentWeather[0].main.humidity;

  const { speed } = currentWeather[0].wind;
  const windMph = (speed * 2.237).toFixed(1);

  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyjqa2bv0Ir3duJqhlKoJXp-v_7xaNfOHYw&s"
            alt="Shoes"
            width={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{city}</h2>
          <div className="weather-details flex flex-col items-end text-lg">
            <p>Temperature - {temperature}&deg;C</p>
            <p>Wind - {windMph} mph</p>
            <p>Humidity - {humidity} %</p>
          </div>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
