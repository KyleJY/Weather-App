import React from "react";

function WeatherIcon({ iconNumber, summary }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/medium/${iconNumber}.png`}
      alt={summary}
    />
  );
}

export default WeatherIcon;
