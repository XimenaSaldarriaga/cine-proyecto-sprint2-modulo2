import React, { useEffect, useState } from 'react';
import './selectHeader.scss';
import SelectDate from '../selectDate/SelectDate';
import SearchMovie from '../searchMovie/SearchMovie';

const SelectHeader = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleImageClick = () => {
    setShowLoginForm(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div className='selectHeader'>
      {showLoginForm && (
        <div className='selectHeader__loginFormOverlay'>
          <div className='selectHeader__loginFormContainer'>
            <button className='selectHeader__closeButton' onClick={closeLoginForm}>
              <span>X</span>
            </button>
            <div className='selectHeader__loginForm'>
              <h1>Bienvenido</h1>
              <h2>Inicia Sesión</h2>
              <form className='selectHeader__form'>
                <div>
                  <label className='selectHeader__labelform' htmlFor='email'>Correo electrónico</label>
                  <input className='selectHeader__inputform' type='email' id='email' name='email' required />
                </div>
                <div>
                  <label className='selectHeader__labelform' htmlFor='password'>Contraseña</label>
                  <input className='selectHeader__inputform' type='password' id='password' name='password' required />
                </div>
                <div className='selectHeader__rememberMe'>
                  <input
                    className='selectHeader__checkbox'
                    type='checkbox'
                    id='rememberMe'
                    name='rememberMe'
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label className='selectHeader__labelform' htmlFor='rememberMe'>Recordarme</label>
                </div>
                <button className='selectHeader__login' type='submit'>Iniciar sesión</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <SearchMovie />
      <SelectDate />
      <img
        className='selectHeader__icon'
        src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
        alt=''
        onClick={handleImageClick}
      />
    </div>
  );
};

export default SelectHeader;








