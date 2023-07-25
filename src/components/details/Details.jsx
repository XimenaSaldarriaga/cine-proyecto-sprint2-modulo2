import React from "react";
import { useLocation } from "react-router-dom";
import DetailsCard from "../detailsCard/DetailsCard";
import './details.scss'
import HoursMovie from "../hoursMovie/HoursMovie";

const Details = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <>
      <div className="detailsDiv">
        <div className="detailsDiv__movie">
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
        <HoursMovie/>
      </div>
    </>
  );
};

export default Details;
