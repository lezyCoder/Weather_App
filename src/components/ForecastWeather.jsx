import { useSelector } from "react-redux";

const ForecastWeather = () => {
  const { loading, error, forecasteWeather } = useSelector(
    (state) => state.weatherDetails
  );

  if (error) return <p>{error}</p>;
  if (!forecasteWeather) return null;

  return (
    <div>
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
  );
};

export default ForecastWeather;
