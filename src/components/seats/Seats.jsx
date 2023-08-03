import React, { useState, useEffect } from 'react';
import './seats.scss';
import HeaderNav from '../headerNav/HeaderNav';

const svgContent = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path d="M353.073,0H158.927c-55.168,0-99.85,44.624-99.85,99.792v108.384h19.045c27.922,0,51.284,22.681,51.284,50.604v47.858
          h253.187v-47.858c0-27.922,23.362-50.604,51.284-50.604h19.045V99.792C452.923,44.624,408.241,0,353.073,0z"/>
      </g>
    </g>
    <g>
      <g>
        <rect x="129.407" y="365.714" width="253.187" height="119.56" />
      </g>
    </g>
    <g>
      <g>
        <path d="M78.122,236.308H25.319c-12.409,0-22.505,10.061-22.505,22.472V512h98.462V258.779
        C101.275,246.369,90.531,236.308,78.122,236.308z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M486.681,236.308h-52.804c-12.409,0-23.153,10.061-23.153,22.472V512h98.462V258.779
        C509.187,246.37,499.09,236.308,486.681,236.308z"/>
      </g>
    </g>
  </svg>
);

const Seats = () => {
  const totalRows = 8;
  const seatsPerRow = 20;
  const totalSeats = totalRows * seatsPerRow;
  const seatsArray = new Array(totalSeats).fill(null);

  const [selectedButtons, setSelectedButtons] = useState([]);

  const updateSelectedButtons = (selected) => {
    setSelectedButtons(selected);
    localStorage.setItem('selectedButtons', JSON.stringify(selected));
  };

  useEffect(() => {
    const storedSelectedButtons = JSON.parse(localStorage.getItem('selectedButtons'));
    if (storedSelectedButtons && Array.isArray(storedSelectedButtons)) {
      setSelectedButtons(storedSelectedButtons);
    }
  }, []);

  const getSeatRowLetter = (index) => {
    const row = Math.floor(index / seatsPerRow);
    return String.fromCharCode('A'.charCodeAt(0) + row);
  };

  const getSeatColumnNumber = (index) => {
    return (index % seatsPerRow) + 1;
  };

  const handleSeatClick = (index) => {
    const updatedSelectedButtons = selectedButtons.includes(index)
      ? selectedButtons.filter((buttonIndex) => buttonIndex !== index)
      : [...selectedButtons, index];

    updateSelectedButtons(updatedSelectedButtons);
  };

  const getSeatNumber = (index) => {
    const rowLetter = getSeatRowLetter(index);
    const columnNumber = getSeatColumnNumber(index);
    return `${rowLetter}${columnNumber}`;
  };


  return (
    <>
      <HeaderNav />
      <div className="seats">
        <h2 className="seats__subtitle">Selecciona tus asientos</h2>
        <p className="seats__paragraph">Para cambiar tu lugar asignado da click en el asiento deseado</p>
        <div className="seats__options">
          <div className="seats__option">
            <div className="seats__yellow">
              {svgContent}
            </div>
            <span>Seleccionado</span>
          </div>
          <div className="seats__option">
            <div className="seats__red">
              {svgContent}
            </div>
            <span>Ocupado</span>
          </div>
          <div className="seats__option">
            <div className="seats__blue">
              {svgContent}
            </div>
            <span>Disponible</span>
          </div>
        </div>
        <hr />

        <div className="seats__maps">
          <div className="seats__map">
            {seatsArray.map((_, index) => (
              <button
                className={`seats__blue ${selectedButtons.includes(index) ? "seats__yellow" : ""}`}
                key={index}
                onClick={() => handleSeatClick(index)}
                id={index}
              >
                <svg version="1.1" id={`seats-svg-${index}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" className="seat-svg">
                  {svgContent}
                </svg>
                <span className="seats__number">{getSeatNumber(index)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Seats;









