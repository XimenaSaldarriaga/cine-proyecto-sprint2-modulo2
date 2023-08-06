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
        <div className='loginFormOverlay'>
          <div className='loginFormContainer'>
            <button className='closeButton' onClick={closeLoginForm}>
              <span>X</span>
            </button>
            <div className='loginForm'>
              <h1>Bienvenido</h1>
              <h2>Inicia Sesión</h2>
              <form>
                <label htmlFor='email'>Correo electrónico</label>
                <input type='email' id='email' name='email' required />
                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password' required />
                <div className='rememberMe'>
                  <input
                    type='checkbox'
                    id='rememberMe'
                    name='rememberMe'
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor='rememberMe'>Recordarme</label>
                </div>
                <button type='submit'>Iniciar sesión</button>
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








