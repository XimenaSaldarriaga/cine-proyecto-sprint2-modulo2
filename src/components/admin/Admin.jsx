import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderNav from '../headerNav/HeaderNav';
import { URL_THEATERS } from '../../services/data';
import './admin.scss'

const Admin = () => {
  const [theaters, setTheaters] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  useEffect(() => {
    getTheatersData();
  }, []);

  const getTheatersData = async () => {
    try {
      const { data } = await axios.get(URL_THEATERS);
      setTheaters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateClick = (date, index) => {
    setSelectedDate(date);
    setSelectedDateIndex(index);
    setSelectedTheater(null);
  };

  const handleTheaterClick = (theater) => {
    setSelectedTheater(selectedTheater === theater ? null : theater);
  };

  return (
    <div>
      <HeaderNav />
      <div className='admin'>
        <div></div>
        <div className='admin__main'>
          <div className='admin__info'>
            <p>Sinopsis</p>
            <p>Título original</p>
            <p>Pais de origen</p>
            <p>Director</p>
            <p>Actores</p>
            <p>Lenguaje</p>
          </div>
          <div className='admin__cinemas'>
            <div className='admin__dates'>
              {theaters[0]?.dates.map((date, index) => {
                const [day, month] = date.date.split(' ');
                return (
                  <div
                    className={`admin__date ${selectedDateIndex === index ? 'selected-date' : ''}`}
                    key={index}
                    onClick={() => handleDateClick(date, index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className='admin__day'>{day}</span>
                    <span className='admin__month'>{month.toUpperCase()}</span>
                  </div>
                );
              })}
            </div>
            <div className='admin__theaters'>
              <h2 className='admin__h2'>FUNCIONES POR MULTIPLEX</h2>
              {theaters.map((theater, theaterIndex) => (
                <div key={theaterIndex} style={{ marginBottom: '10px' }}>
                  <p
                    value={theater.name}
                    className='admin__theater'
                    onClick={() => handleTheaterClick(theater)}
                    style={{ cursor: 'pointer' }}
                  >
                    {theater.name}
                  </p>
                  {selectedTheater === theater &&
                    selectedDate &&
                    theater.dates.map((date, dateIndex) => {
                      if (date.date === selectedDate.date) {
                        return (
                          <div key={dateIndex}>
                            {date.hours.map((hour, hourIndex) => {
                              const [time, room] = hour.split(' - ');
                              return (
                                <div key={hourIndex}>
                                  <h3>Sala {room}</h3>
                                  <p>Hora: {time}</p>
                                  <button onClick={() => handleEditHour(theaterIndex, dateIndex, hourIndex)}>
                                    Editar Hora
                                  </button>
                                  <button onClick={() => handleDeleteHour(theaterIndex, dateIndex, hourIndex)}>
                                    Eliminar Hora
                                  </button>
                                </div>
                              );
                            })}
                            <button onClick={() => handleEditRoom(theaterIndex, dateIndex)}>
                              Editar Sala
                            </button>
                            <button onClick={() => handleDeleteRoom(theaterIndex, dateIndex)}>
                              Eliminar Sala
                            </button>
                          </div>
                        );
                      }
                      return null;
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;







