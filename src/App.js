import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <p>This page was coded by Caelidh Liddell and the code can be seen on <a href="https://github.com/caelidh/react-weather-app">Github</a></p>

      <Weather />
      
    </div>
  );
}

