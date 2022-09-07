import React, { useState } from 'react'
import Weather from './Weather';
import { useCity } from '../context/CityContext';

export default function Header() {

  const{city,setCity }= useCity();
  //   const getInitialState = () => {
  //     const value = "Istanbul";
  //     return value;
  //   };

  //   const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
      setCity(e.target.value);
    };
  return (
    <div className='header'>
      <select value={city} onChange={handleChange}>
        <option value="Istanbul">Istanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="Konya">Konya</option>
        <option value="Bursa">Bursa</option>
      </select>
      <p>{`You selected ${city}`}</p>
      
    </div>
    

  )
}
