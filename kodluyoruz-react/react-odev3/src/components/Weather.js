import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useCity } from '../context/CityContext';
import Card from './Card';


export default function Weather() {
    const[weather,setWeather] = useState([]);
    const{city,setCity, }= useCity();
    useEffect(()=> {
            axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=971b89c7d1f441eea1701398a300c6dd`).then((res)=>setWeather(res.data.data))
            console.log(weather);
    },[city])
    
  return (
    <div>
        <ul className='list'>
            {
                weather.map((w,index)=>(
                    <li key={index}>
                        {w.valid_date}
                        <Card maxtemp={w.app_max_temp} mintemp={w.app_min_temp} iconcode={w.weather.icon}/>
                    </li>
                ))
            }
        </ul>
       {/* <code>{JSON.stringify(weather.data[0].app_max_temp)} </code> 
       <code>{JSON.stringify(weather.data[0].app_min_temp)} </code>  */}
        {/* <code>{JSON.stringify(weather.data[0].weather.icon)} </code> */}
    </div>
  )
}
