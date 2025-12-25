import { useSelector } from "react-redux";

const ForecastWeather = () => {
  const { loading, error, forecastWeather } = useSelector(
    (state) => state.weatherDetails
  );
  

  if (loading) return <p className="text-center">Loading forecast...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (!Array.isArray(forecastWeather))
    return <p className="text-center">No forecast data available</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Forecast Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {forecastWeather.slice(0, 9).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <p className="font-semibold mb-2">{item.dt_txt}</p>

            <p className="text-xl font-bold">
              {Math.round(item.main.temp)}°C
            </p>

            <p className="text-gray-600 capitalize">
              {item.weather[0].description}
            </p>

            <p className="text-sm text-gray-500">
              Humidity: {item.main.humidity}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
