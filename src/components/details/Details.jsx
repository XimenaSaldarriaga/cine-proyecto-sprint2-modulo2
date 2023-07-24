import React from "react";
import { useLocation } from "react-router-dom";
import CardCartelera from "../cardCartelera/CardCartelera";

const Details = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <div>
      <h1>Resultados de búsqueda:</h1>
      {searchResults && searchResults.length > 0 ? (
        <div>
          {searchResults.map((movie) => (
            <CardCartelera key={movie.id} data={movie} />
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Details;
