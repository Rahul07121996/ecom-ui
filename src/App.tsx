import { useEffect } from "react";
import "./App.css";
import api from "./api/axios";

function App() {
  useEffect(() => {
    const getWeather = async () => {
      const response = await api.get("/WeatherForecast");
      console.log(response.data);

      const apiUrl = import.meta.env.VITE_API_URL;
      const env = import.meta.env.VITE_ENV;
      console.log("API Url", apiUrl);
      console.log("Env", env);
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
