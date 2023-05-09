import './App.scss'
import { Button } from './components/Buttons'
import { Input } from './components/Quote'
import { WeatherCard, WeatherInfo } from './components/Weather';
import { useState, useEffect } from 'react';
import { MdGpsFixed } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { MdNearMe } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdRoom } from "react-icons/md";

function App() {
  return(
      <div className ='container'>
        <div className='weather'>
          <div className='search'>
          </div>
        </div>
      </div>
  )
}

export default App;
