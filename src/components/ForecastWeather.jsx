import { useSelector } from "react-redux";

const ForecastWeather = () => {
  const { loading, error, forecasteWeather } = useSelector(
    (state) => state.weatherDetails
  );

  if (loading) return <p>Loading forecast...</p>;
  if (error) return <p>{error}</p>;
  // console.log("forecast in UI", forecasteWeather);
  if (!forecasteWeather?.length) return <p>No forecast data available </p>;
  console.log("forecast in UI", forecasteWeather);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Forecast Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {forecasteWeather.list.slice(0, 6).map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md p-4">
            <p className="font-semibold">
              {new Date(item.dt * 1000).toLocaleString()}
            </p>

            <div className="weather-details text-lg">
              <p>🌡 Temp: {item.main.temp}°C</p>
              <p>💧 Humidity: {item.main.humidity}%</p>
              <p>💨 Wind: {item.wind.speed} m/s</p>
              <p>☁️ {item.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
