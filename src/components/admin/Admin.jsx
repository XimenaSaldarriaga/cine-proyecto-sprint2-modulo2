import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderNav from '../headerNav/HeaderNav';
import { URL_THEATERS } from '../../services/data';

const Admin = () => {
  const [theaters, setTheaters] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);

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

  const handleDateClick = (date) => {
    setSelectedDate(date);
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
        <div>
          <div></div>
          <div>
            <div className='admin__dates'>
              <h2>Fechas</h2>
              {theaters[0]?.dates.map((date, index) => (
                <p
                  key={index}
                  value={date.date}
                  onClick={() => handleDateClick(date)}
                  style={{ cursor: 'pointer' }}
                >
                  {date.date}
                </p>
              ))}
            </div>
            <div>
              <h2>Teatros</h2>
              {theaters.map((theater, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <p
                    value={theater.name}
                    onClick={() => handleTheaterClick(theater)}
                    style={{ cursor: 'pointer' }}
                  >
                    {theater.name}
                  </p>
                  {selectedTheater === theater &&
                    selectedDate &&
                    theater.dates.map((date, dateIndex) => {
                      if (date.date === selectedDate.date) {
                        const roomNumbers = new Set(date.hours.map(hour => hour.split(' - ')[1].trim()));
                        return (
                          <div key={dateIndex}>
                            {Array.from(roomNumbers).map(roomNumber => (
                              <div key={roomNumber}>
                                <h3>Sala {roomNumber}</h3>
                                {theater.dates[dateIndex].hours
                                  .filter(hour => hour.split(' - ')[1].trim() === roomNumber)
                                  .map((hour, hourIndex) => {
                                    const [time] = hour.split(' - ');
                                    return (
                                      <p key={hourIndex}>Hora: {time}</p>
                                    );
                                  })}
                              </div>
                            ))}
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






