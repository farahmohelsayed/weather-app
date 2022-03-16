import { useRef, useState } from "react";
import Input from "./UI/Input";
import "./App.css";
import Button from "./UI/Button";
import SearchBox from "./UI/SearchBox";
import WeatherLocation from "./weather/WeatherLocation";
import WeatherTemp from "./weather/WeatherTemp";

function App() {
  const [weather, setweather] = useState({});
  const query = useRef();
  const api = {
    key: "1220373fb2dd457356c1ec54419f0d3d",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", options);

  const onClickHandler = () => {
    fetch(
      `${api.base}weather?q=${query.current.value}&units=metric&appid=${api.key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setweather(data);
        console.log(data);
        query.current.value = "";
      });
  };
  //console.log(weather);
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.weather[0].main.toLowerCase().includes("cloud")
            ? "app cloud"
            : weather.weather[0].main.toLowerCase().includes("mist")
            ? "app mist"
            : weather.weather[0].main.toLowerCase().includes("clear")
            ? "app clear"
            : weather.weather[0].main.toLowerCase().includes("snow")
            ? "app snow"
            : weather.weather[0].main.toLowerCase().includes("rain")
            ? "app rain"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBox className="search-box">
          <Input
            type="text"
            className="search-bar"
            placeholder="Search City ..."
            ref={query}
          />
          <Button onClick={onClickHandler} className="search-btn">
            Search
          </Button>
        </SearchBox>
        {typeof weather.main != "undefined" ? (
          <div>
            <WeatherLocation
              city={weather.name}
              country={weather.sys.country}
              date={date}
            />
            <WeatherTemp
              temp={Math.round(weather.main.temp)}
              state={weather.weather[0].main}
            />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
