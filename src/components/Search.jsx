import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setCity } from "../store/actions/Actions";
const Search = () => {
  const dispatch = useDispatch();
  // accessing the city only
  const city = useSelector((state) => state.weatherDetails.city);
  // handling the set city action
  const handleInput = (e) => {
    dispatch(setCity(e.target.value));
  };

  // handling the search
  const handleSearch = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="join">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          value={city}
          onChange={(e) => handleInput(e)}
        />
      </label>
      <button className="btn btn-neutral join-item" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};

export default Search;
