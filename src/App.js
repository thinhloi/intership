import './App.scss'
import { Button } from './components/Buttons'
import { Input } from './components/Input'
import { WeatherCard, WeatherInfo } from './components/Weather';
import { useState, useEffect } from 'react';
import { MdGpsFixed } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { MdNearMe } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdRoom } from "react-icons/md";

function App() {
  const [isCurr, setIsCurr] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');
  const [find, setFind] = useState('Ho Chi Minh');
  const [data, setData] = useState('');
  const [list, setList] = useState([]);

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  let API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=5caf59265a678ca70e57d4763ad8ddcc&q=${find}&units=${units}`;

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
          function (position) {
              setLat(position.coords.latitude);
              setLon(position.coords.longitude);
              setIsCurr(true);
          },
          function (error) {
              if (error.code === error.PERMISSION_DENIED) {
                  setIsCurr(false);
                  setFind('Ho Chi Minh');
              }
          }
      );
  }, []);

  if (isCurr) {
      API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5caf59265a678ca70e57d4763ad8ddcc&q&units=${units}`;
  }

  useEffect(() => {
      fetch(API_URL)
          .then((req) => {
              if (req.ok) {
                  return req.json();
              }
              if (req.status === 404) {
                  alert('Not found this city!');
                  return Promise.reject('error 404');
              }
          })
          .then((req) => {
              setData(req);
          });
  }, [API_URL]);

  const handleFindCity = () => {
      setIsCurr(false);
      setFind(city);
      setList((pre) => [...pre, data.city.name]);
      setShowMenu(false);
  };

  const handleSelectCity = (e) => {
      setIsCurr(false);
      setFind(e);
      setShowMenu(false);
  };

  const turnToDate = (e) => {
      const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
      ];
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var a = new Date(e);
      var date = a.getDate();
      let day = days[a.getDay()];
      let month = months[a.getMonth()];
      return day + ', ' + date + ' ' + month;
  };

  const setCurrentLocation = () => {
      setIsCurr(true);
  };

  return (
      <div className='container'>
          <div className='sidebar'>
              {showMenu ? (
                  <div className='sidebar-close'>
                      <Button
                          className='btn-text-icon'
                          text={<MdClose size={30} />}
                          onClick={() => setShowMenu(false)}
                      />
                  </div>
              ) : (
                  <></>
              )}
              <div
                  className='sidebar-search'
                  style={
                      !showMenu ? { paddingTop: '' } : { paddingTop: '82px' }
                  }
              >
                  <Input
                      startIcon={<MdSearch size={25} />}
                      type='text'
                      placeholder='Search for places'
                      className='search-menu'
                      onChange={(e) => {
                          setCity(e.target.value);
                      }}
                      onFocus={() => setShowMenu(true)}
  
                  />
                  {showMenu ? (
                      <Button
                          className='btn-primary'
                          text='Search'
                          onClick={handleFindCity}
                      />
                  ) : (
                      <Button
                          className='btn-icon'
                          text={<MdGpsFixed />}
                          onClick={setCurrentLocation}
                      />
                  )}
              </div>
              {showMenu ? (
                  <div className='search-content'>
                      {list &&
                          list.map((e,id) => (
                              <Button
                                  className='btn-text'
                                  key={id}
                                  text={e}
                                  endIcon={<MdChevronRight />}
                                  onClick={() => handleSelectCity(e)}
                              />
                          ))}
                  </div>
              ) : (
                  data && (
                      <div className='sidebar-content'>
                          <div className='sidebar-img'>
                              <img
                                  style={{
                                      maxHeight: '234px',
                                      maxWidth: '202px',
                                  }}
                                  src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                                  alt=''
                              ></img>
                          </div>
                          <div className='sidebar-info'>
                              <>
                                  <p
                                      className='info-temp'
                                      units={
                                          units === 'imperial' ? '°F' : '°C'
                                      }
                                  >
                                      {Math.round(data.list[0].main.temp)}
                                  </p>
                                  <p className='info-text'>
                                      {data.list[0].weather[0].main}
                                  </p>
                                  <p className='info-date'>
                                      Today •{' '}
                                      {turnToDate(data.list[0].dt_txt)}
                                  </p>
                                  <p className='info-location'>
                                      <MdRoom />
                                      {data.city.name}
                                  </p>
                              </>
                          </div>
                      </div>
                  )
              )}
          </div>
          <div className='weather-container'>
              <div className='temp-group'>
                  <Button
                      className={
                          units === 'metric'
                              ? 'btn-icon btn-active'
                              : 'btn-icon'
                      }
                      onClick={() => setUnits('metric')}
                      text='°C'
                  />
                  <Button
                      className={
                          units === 'imperial'
                              ? 'btn-icon btn-active'
                              : 'btn-icon'
                      }
                      onClick={() => setUnits('imperial')}
                      text='°F'
                  />
              </div>
              <div className='week-weather'>
                  {data && (
                      <>
                          <WeatherCard
                              date='Tomorrow'
                              src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`}
                              imgAlt=''
                              tempLow={Math.round(data.list[7].main.temp_min)}
                              tempHigh={Math.round(
                                  data.list[7].main.temp_max
                              )}
                              units={units === 'imperial' ? '°F' : '°C'}
                          />
                          <WeatherCard
                              date={turnToDate(data.list[15].dt_txt)}
                              src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`}
                              imgAlt=''
                              tempLow={Math.round(
                                  data.list[15].main.temp_min
                              )}
                              tempHigh={Math.round(
                                  data.list[15].main.temp_max
                              )}
                              units={units === 'imperial' ? '°F' : '°C'}
                          />
                          <WeatherCard
                              date={turnToDate(data.list[23].dt_txt)}
                              src={`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`}
                              imgAlt=''
                              tempLow={Math.round(
                                  data.list[23].main.temp_min
                              )}
                              tempHigh={Math.round(
                                  data.list[23].main.temp_max
                              )}
                              units={units === 'imperial' ? '°F' : '°C'}
                          />
                          <WeatherCard
                              date={turnToDate(data.list[31].dt_txt)}
                              src={`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`}
                              imgAlt=''
                              tempLow={Math.round(
                                  data.list[31].main.temp_min
                              )}
                              tempHigh={Math.round(
                                  data.list[31].main.temp_max
                              )}
                              units={units === 'imperial' ? '°F' : '°C'}
                          />
                          <WeatherCard
                              date={turnToDate(data.list[39].dt_txt)}
                              src={`https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`}
                              imgAlt=''
                              tempLow={Math.round(
                                  data.list[39].main.temp_min
                              )}
                              tempHigh={Math.round(
                                  data.list[39].main.temp_max
                              )}
                              units={units === 'imperial' ? '°F' : '°C'}
                          />
                      </>
                  )}
              </div>
              <div className='weather-info'>
                  <p className='info-title'>Today's Hightlights</p>
                  <div className='info-group'>
                      {data && (
                          <>
                              <WeatherInfo
                                  title='Wind status'
                                  info={data.list[0].wind.speed}
                                  data-desc='mph'
                                  footer={
                                      <>
                                          <Button
                                              className='btn-icon'
                                              text={
                                                  <MdNearMe
                                                      style={{
                                                          rotate: '180deg',
                                                      }}
                                                  />
                                              }
                                          />
                                          <p>WSW</p>
                                      </>
                                  }
                              />
                              <WeatherInfo
                                  title='Humidity'
                                  info={data.list[0].main.humidity}
                                  data-desc='%'
                                  footer={
                                      <div className='humidity-progress'>
                                          <div className='humidity-number'>
                                              <span>0</span>
                                              <span>50</span>
                                              <span>100</span>
                                          </div>
                                          <progress
                                              value={
                                                  data.list[0].main.humidity
                                              }
                                              max='100'
                                          ></progress>
                                          <div className='humidity-percen'>
                                              <span>%</span>
                                          </div>
                                      </div>
                                  }
                              />
                              <WeatherInfo
                                  title='Visibility'
                                  info={data.list[0].visibility}
                                  data-desc='miles'
                              />
                              <WeatherInfo
                                  title='Air Pressure'
                                  info={data.list[0].main.pressure}
                                  data-desc='mb'
                              />
                          </>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
}


export default App;
