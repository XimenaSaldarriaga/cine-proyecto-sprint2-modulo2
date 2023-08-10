import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderNav from '../headerNav/HeaderNav';
import './admin.scss'
import { RiEditCircleLine } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { getDataMovies } from '../../services/data';
import { useParams } from 'react-router-dom';
import { API_URL, API_KEY, URL_IMAGE, URL_THEATERS } from '../../services/data';

const Admin = ({ data }) => {

  const { id } = useParams();
  const [theaters, setTheaters] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState(data);
  const [playing, setPlaying] = useState(true);


  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovies(data);
    };
    fetchMoviesData();
  }, []);

  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  useEffect(() => {
    getTheatersData();
  }, []);

  console.log(id)
  console.log(selectedMovie)

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
      <HeaderNav loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      {selectedMovie ? (
          <div className='admin__video'>
            <img className='admin__img' src={`${URL_IMAGE}${selectedMovie.poster_path}`} alt='' />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      <div className='admin'>
        <div className='admin__main'>
          {selectedMovie ? (
            <div className='admin__info'>
              <p>{selectedMovie.overview}</p>

              <div>
              <p className='admin__subtitle'>Título Original</p>
              <p>{selectedMovie.original_title}</p>
              </div>

              <p>Pais de origen</p>
              <p>Director</p>
              <p>Actores</p>
              <p>Lenguaje</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
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
                          <div className='admin__salas'>
                            {date.hours.reduce((roomGroups, hour) => {
                              const [time, room] = hour.split(' - ');
                              const roomIndex = roomGroups.findIndex(group => group.room === room);
                              if (roomIndex === -1) {
                                roomGroups.push({ room, hours: [hour] });
                              } else {
                                roomGroups[roomIndex].hours.push(hour);
                              }
                              return roomGroups;
                            }, []).map((roomGroup, roomIndex) => (
                              <div key={roomIndex}>

                                <div className='admin__sala'>
                                  <h3>Sala {roomGroup.room}</h3>
                                  <button onClick={() => handleEditRoom(theaterIndex, dateIndex)}>
                                    <RiEditCircleLine className="edit-icon" />
                                  </button>
                                  <button onClick={() => handleDeleteRoom(theaterIndex, dateIndex)}>
                                    <IoIosCloseCircleOutline className="delete-icon" />
                                  </button>
                                </div>

                                <div className='admin__hours'>
                                  {roomGroup.hours.map((hour, hourIndex) => {
                                    const [time, _] = hour.split(' - ');
                                    return (
                                      <span className='admin__hour' key={hourIndex}>
                                        {time}{' '}
                                        <button onClick={() => handleEditHour(theaterIndex, dateIndex, hourIndex)}>
                                          <RiEditCircleLine className="edit-icon" />
                                        </button>
                                        <button onClick={() => handleDeleteHour(theaterIndex, dateIndex, hourIndex)}>
                                          <IoIosCloseCircleOutline className="delete-icon" />
                                        </button>
                                      </span>
                                    );
                                  })}

                                </div>
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







