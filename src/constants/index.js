export const DEFAULT_PLACE = {
  name: "Batuan",
  place_id: "batuan",
  adm_area1: "Central Visayas",
  adm_area2: "Bohol",
  country: "Philippines",
  lat: "9.7808N",
  lon: "124.1484E",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};

export const UNITS = {
  metric: {
    temperature: "°C",
    wind_speed: "m/s",
    precipitation: "mm",
    humidity: "%",
    uv_index: "",
    visibility: "km",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    wind_speed: "mph",
    precipitation: "mm",
    humidity: "%",
    uv_index: "",
    visibility: "mi",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    wind_speed: "mph",
    precipitation: "in",
    humidity: "%",
    uv_index: "",
    visibility: "mi",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    wind_speed: "km/h",
    precipitation: "mm",
    humidity: "%",
    uv_index: "",
    visibility: "km",
    cloud_cover: "%",
  },
};
