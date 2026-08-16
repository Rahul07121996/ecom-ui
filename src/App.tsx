import { useEffect } from "react";
import "./App.css";
import api from "./api/axios";

function App() {
  useEffect(() => {
    const getWeather = async () => {
      const response = await api.get("/WeatherForecast");
      console.log(response.data);
    };

    getWeather();
  }, []);

  return (
    <>
      <h1>React App</h1>
    </>
  );
}

export default App;
