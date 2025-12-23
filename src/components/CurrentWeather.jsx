import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const { currentWeather, city, loading } = useSelector(
    (state) => state.weatherDetails
  );

  const { temp } = currentWeather[0].main;
  console.log(currentWeather);
  const temperature = Math.floor(temp - 273.15);
  if (loading) return <p className="p-10">Featching Report ....</p>;

  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{city}</h2>
          <p className="text-center text-xl">Temperature - {temperature} &deg;C</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
