import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastwidget from "./DailyForecastWidget";
import "../styles/components/Forecast.scss";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Forecast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div className="forecast-containter">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container">
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastwidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}

export default Forecast;
