import React, { useEffect, useState } from 'react';
import './detailsCard.scss';
import axios from 'axios';
import YouTube from 'react-youtube';
import { API_URL, API_KEY, URL_IMAGE } from '../../services/data';

const DetailsCard = ({ data }) => {
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState(data);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    fetchMovie(data.id);
  }, [data.id]);

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
      setMovie(data);
    }
  };

  const getGenreNames = () => {
    if (movie.genres && movie.genres.length > 0) {
      return movie.genres.map((genre) => genre.name).join(', ');
    }
    return 'Desconocido';
  };

  return (
    <div className='details'>
      <div className='details__movie'>
        <div className='details__image'>
          <img src={`${URL_IMAGE}${data.poster_path}`} alt='' />
        </div>
        <div className='details__info'>
          <h1 className='details__title'>{data.title}</h1>
          <span className='details__span'>{data.original_title}</span>
          <div className='details__buttons'>
            <span className='details__runtime'>{movie.runtime} Min </span>
            <span className='details__genre'>{getGenreNames()}</span>
          </div>
        </div>
      </div>
      <div className='details__trailer'>
        <h2 className='details__subtitle'>Trailer</h2>
        <div className='details__video'>
          {movie ? (
            <div
              className='details__viewtrailer'
              style={{
                backgroundImage: `url("${URL_IMAGE}${movie.backdrop_path}")`,
              }}
            >
              {playing && trailer ? (
                <YouTube
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
                'Lo siento, el video no está disponible'
              )}
            </div>
          ) : null}
        </div>
        <h2 className='details__subtitle'>Sinopsis</h2>
        <p className='details__paragraph'>{data.overview}</p>
      </div>
    </div>
  );
};

export default DetailsCard;




