import { useEffect } from "react";
import { fetchWeather } from "./store/actions/Actions.jsx";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather("Mumbai"));
  }, []);
  return <div>Hello</div>;
}

export default App;
