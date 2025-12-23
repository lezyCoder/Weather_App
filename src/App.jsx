import { useEffect } from "react";
import { fetchWeather } from "./store/actions/Actions.jsx";
import { useDispatch, useSelector } from "react-redux";

import Search from "./components/search.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";

function App() {
  const city = useSelector((state) => state.weatherDetails.city);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);

  return (
    <div className="flex justify-center items-center gap-10 flex-col mt-10">
      <Search />
      <CurrentWeather />
    </div>
  );
}

export default App;
