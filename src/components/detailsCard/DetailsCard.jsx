import React, { useEffect, useState } from 'react';
import './detailsCard.scss';
import axios from 'axios';
import YouTube from 'react-youtube';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const DetailsCard = ({ data }) => {

    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        if (data && data.id) {
            fetchMovie(data.id);
        }
    }, [data]);

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
            },
        });

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
            setMovie(data);
        }
    };

    return (
        <div className='details'>
            <div className='details__movie'>
                <div className='details__image'>
                    <img src={`${IMAGE_PATH}${data.poster_path}`} alt="" />
                </div>
                <div className='details__info'>
                    <h1 className='details__title'>{data.title}</h1>
                    <span className='details__span'>{data.original_title}</span>
                </div>
            </div>
            <div className='details__trailer'>
                <h2 className='details__subtitle'>Trailer</h2>
                <div className='details__video'>
                    {movie ? (
                        <div
                            className="details__viewtrailer"
                            style={{
                                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                            }}
                        >
                            {playing && trailer ? (
                                <YouTube
                                    videoId={trailer.key}
                                    className="reproductor container"
                                    containerClassName={"youtube-container amru"}
                                    opts={{
                                        playerVars: {
                                            rel: 0,
                                        },
                                    }}
                                />
                            ) : ("Lo siento, el video no está disponible")}
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


