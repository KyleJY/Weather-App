import "../styles/components/Search.scss";
import { searchPlaces } from "../api";
import { useState, useContext } from "react";
import WeatherContext from "../context/weather.context";

function Search() {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  async function onSearch(e) {
    setText(e.target.value);
    const data = await searchPlaces(e.target.value);
    setSearchResults(data);
    setOpenSearchResults(data.length > 0);
  }
  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchResults(false);
  };

  return (
    <div className="search-container">
      <div className="search-icon">
        <i className="bi bi-search"></i>
      </div>
      <div className="search-input">
        <input
          type="text"
          name="search-city"
          placeholder="Search for a city..."
          value={text}
          onChange={onSearch}
        />
      </div>
      {openSearchResults && (
        <div className="search-results">
          <div className="results-container">
            {searchResults.map((place) => (
              <div
                className="result"
                key={place.place_id}
                onClick={() => changePlace(place)}
              >
                {place.name}, {place.adm_area1}, {place.country}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
