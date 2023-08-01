// import React, { useEffect, useState } from 'react';
// import './cartelera.scss';
// import { getDataMovies } from '../../services/data';
// import CardCartelera from '../cardCartelera/CardCartelera';

// const Cartelera = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const data = await getDataMovies();
//     setMovies(data);
//   };

//   return (
//     <div className='cartelera'>
//       <h1 className='cartelera__title'>EN CARTELERA</h1>
//       <div className='cartelera__cards'>
//         {movies.map((movie, index) => (
//           <CardCartelera
//             key={index}
//             data={movie}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cartelera;

import React, { useEffect, useState } from 'react';
import './cartelera.scss';
import { getDataMovies } from '../../services/data';
import CardCartelera from '../cardCartelera/CardCartelera';

const Cartelera = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDataMovies();
    setMovies(data);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div className='cartelera'>
      <h1 className='cartelera__title'>EN CARTELERA</h1>
      <div className='cartelera__cards'>
        {filteredMovies.map((movie, index) => (
          <CardCartelera
            key={index}
            data={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;















