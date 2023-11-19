import './home.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';


//b97d296087e0398f756b090cb4c8cdc1
//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=b97d296087e0398f756b090cb4c8cdc1

function Home(){
    const [city,setCity]=useState('Pune');
    const [temperature,setTemperature]=useState(0);
    const [message,setMessage]=useState();
    const [reelfeel,setReelfeel]=useState(0);

    async function loadWeatherInfo(){
       try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b97d296087e0398f756b090cb4c8cdc1`);
        setTemperature((response.data.main.temp - 273).toFixed(2));
        setReelfeel((response.data.main.feels_like - 273).toFixed(2));
        setMessage('✅ Data Fetch Successfully .....');
       }
       catch(err){
        setTemperature(0);
        setMessage('');
        setReelfeel(0);
       }
    }
     
    useEffect(()=>
    {
     loadWeatherInfo();
    },[city]);

 return(
    <div>
        <h1 className='app-title'>⛅Know Weather of Your City</h1>
        <input type="text" placeholder='Enter Your City......' className='inputbox'
        value={city}
        onChange={(e)=>
        {   
            setCity(e.target.value);
        }}/>
        <h4 className='center-text'>{message}</h4>
        <h2 className='center-text'>The Temperature of {city} is {temperature} °C .</h2>
        <h2 className='center-text'>The Real Feel is {reelfeel} °C .</h2>
        
     
    </div>
 );
}

export default Home;