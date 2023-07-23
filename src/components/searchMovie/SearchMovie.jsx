import React, { useState } from "react";
import axios from "axios";
import CardCartelera from '../cardCartelera/CardCartelera';
import { URL_CONSULTA } from "../../services/data";


const SearchMovie = () => {

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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form className='selectHeader__form' onSubmit={handleSearch}>
                <input
                    className='selectHeader__input'
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

            {searchResults.length > 0 ? (
                <div>
                    {searchResults.map((movie) => (
                        <CardCartelera key={movie.id} data={movie} />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default SearchMovie;


