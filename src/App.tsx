import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/axios";

interface WeatherData {
  [key: string]: unknown;
}

function App() {
  const [data, setData] = useState<WeatherData[]>([]);
  useEffect(() => {
    const getWeather = async () => {
      const response = await api.get("/WeatherForecast");
      setData(response.data);
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
      <h1>React App 123</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
