import { useEffect } from "react";
import { fetchWeather } from "./store/actions/Actions.jsx";
import { useDispatch, useSelector } from "react-redux";

import Search from "./components/search.jsx";

function App() {
  const city = useSelector((state) => state.weatherDetails.city);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      <Search />
    </div>
  );
}

export default App;
