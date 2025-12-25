import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const { currentWeather, city, loading } = useSelector(
    (state) => state.weatherDetails
  );

  console.log(currentWeather);
  const temp = currentWeather[0].main.temp;
  const temperature = Math.floor(temp - 273.15);

  const humidity = currentWeather[0].main.humidity;

  const { speed } = currentWeather[0].wind;

  if (loading) return <p className="p-10">Featching Report ....</p>;

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
            <p>Wind - {speed} mph</p>
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
