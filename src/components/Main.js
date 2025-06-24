import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { getHourlyForecast, getDailyForecast } from "../api";

function Main() {
  return (
    <div className="Main">
      <CurrentWeather />
      <Forecast
        type="hourly"
        title="Hourly Forecast"
        data={getHourlyForecast()}
      />
      <Forecast type="dail" title=" Daily Forcast" data={getDailyForecast()} />
    </div>
  );
}

export default Main;
