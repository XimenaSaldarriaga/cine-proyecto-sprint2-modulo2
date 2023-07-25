import React, { useState } from "react";
import axios from "axios";
import { URL_CONSULTA } from "../../services/data";
import { useNavigate } from "react-router-dom";

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

      navigate("/details", { state: { searchResults: filteredMovies } });
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
