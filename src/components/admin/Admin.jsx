import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderNav from '../headerNav/HeaderNav';
import './admin.scss'
import { RiEditCircleLine } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { getDataMovies } from '../../services/data';
import { useParams } from 'react-router-dom';
import { API_URL, API_KEY, URL_IMAGE, URL_THEATERS } from '../../services/data';
import YouTube from 'react-youtube';

const Admin = () => {
  const { id } = useParams();
  const [theaters, setTheaters] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovies(data);
    };
    fetchMoviesData();
  }, []);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === Number(id));
    setSelectedMovie(selectedMovie);
    getTheatersData();
  }, [movies, id]);

  useEffect(() => {
    if (selectedMovie) {
      fetchMovie(selectedMovie.id);
    }
  }, [selectedMovie]);

  const getTheatersData = async () => {
    try {
      const { data } = await axios.get(URL_THEATERS);
      setTheaters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos',
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find((vid) => vid.name === 'Official Trailer');
      setTrailer(trailer ? trailer : data.videos.results[0]);
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
          {playing && trailer ? (
            <YouTube
              className='admin__trailer'
              videoId={trailer.key}
              opts={{
                width: '100%',
                height: '350px',
                playerVars: {
                  rel: 0,
                  controls: 0,
                },
              }}
            />
          ) : (
            <p>Lo siento, el video no está disponible</p>
          )}
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

              <div>
                <p>Pais de origen</p>
                <p>{ }</p>
              </div>

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







