import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Header from './components/Header';
import { CityProvider } from './context/CityContext';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <CityProvider>
        {/* <WeatherProvider> */}
          <Header/>
        <Weather/>
        {/* </WeatherProvider> */}
        
        
      </CityProvider>
      
      
    </div>
  );
}

export default App;
