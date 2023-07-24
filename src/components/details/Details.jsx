import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import DetailsCard from "../detailsCard/DetailsCard";
import './details.scss'

const Details = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return ( 
  <>
  <Header />
  <div className="detailsDiv">
    <div>
      {searchResults && searchResults.length > 0 ? (
        <div>
          {searchResults.map((movie) => (
            <DetailsCard key={movie.id} data={movie} />
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
    </div>
    </>
  );
};

export default Details;
