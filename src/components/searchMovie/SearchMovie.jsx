import React, { useState } from "react";
import axios from "axios";
import { URL_CONSULTA } from "../../services/data";
import { useNavigate } from "react-router-dom";
import './searchMovie.scss'
import Swal from 'sweetalert2';


const SearchMovie = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      if (!searchTerm) return;

      const response = await axios.get(URL_CONSULTA);
      const movies = response.data.results;

      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredMovies);

      setSearchTerm("");

      if (filteredMovies.length > 0) {
        const firstMovieId = filteredMovies[0].id;
        navigate(`/details/${firstMovieId}`, { state: { searchResults: filteredMovies } });
      } else {
        Swal.fire({
          text: 'Lo siento, no se encontraron películas con ese nombre',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#3085d6',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="selectHeader__form" onSubmit={handleSearch}>
        <input
          className="selectHeader__input"
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchMovie;

