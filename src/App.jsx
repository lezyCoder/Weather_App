import { useEffect } from "react";
import { fetchWeather } from "./store/actions/Actions.jsx";
import { useDispatch } from "react-redux";

import Search from "./components/search.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("Mumbai"));
  }, []);
  return (
    <div>
      hello
      <Search />
    </div>
  );
}

export default App;
