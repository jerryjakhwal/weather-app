// `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={WriteYourAPIKey}`
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './style.css';

const Temp = () => {
  const [searchValue,setSearchValue] = useState("Kotdwara");
  const [tempInfo, setTempInfo]= useState({});
  const getinfo = async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2d492c3217fac5ef7888f8ff7ce23432`;
      const res = await fetch(url);
      const data = await res.json();
      const {temp,humidity,pressure,} = data.main;
      const{main:weathermood} = data.weather[0];
      const {name} = data;
      const {speed}= data.wind;
      const {country,sunset} = data.sys;
      const mynewinfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };
      setTempInfo(mynewinfo);
    } catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getinfo();
  }, []);
  return ( 
    <>
      <div className="wrap">
        <div className="search">
<input type="search" placeholder='search here' autoFocus
 id="search" className='searchTerm' value={searchValue} onChange={ (e)=> setSearchValue (e.target.value) } />

 <button className="searchButton" type='button' onCick= {getinfo()}>
    search
 </button>
        </div>
      </div>
     
<Card tempInfo={tempInfo}/>
      
    </>
  );
};

export default Temp;
