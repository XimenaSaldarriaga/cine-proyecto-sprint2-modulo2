import React, { useEffect, useState } from 'react';
import { getDataMovies } from '../../services/data';
import './carousel.scss';
import CarouselCard from '../carouselCard/CarouselCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDataMovies();
    setMovies(data);
    console.log(data);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideStyle = {
    width: '300px',
  };

  return (
    <div className='carousel'>
      <Slider {...sliderSettings}>
        {movies.map((movie, index) => (
          <div key={index} style={slideStyle}>
            <CarouselCard data={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
