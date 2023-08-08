import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './selectHeader.scss';
import SearchMovie from '../searchMovie/SearchMovie';
import { URL_USERS } from '../../services/data';
import { useNavigate } from 'react-router-dom';
import location from '../../images/location.png';

const SelectHeader = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Estado para controlar el inicio de sesión
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);  // Usuario que ha iniciado sesión
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(URL_USERS)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleImageClick = () => {
    setShowLoginForm(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleRememberMeChange = event => {
    setRememberMe(event.target.checked);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = event => {
    event.preventDefault();

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
      setShowLoginForm(false);
    } else {
      console.log('Invalid login');
    }
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
              <form className='selectHeader__form' onSubmit={handleLoginFormSubmit}>
                  <div>
                    <label className='selectHeader__labelform' htmlFor='email'>
                      Correo electrónico
                    </label>
                    <input
                      className='selectHeader__inputform'
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <div>
                    <label className='selectHeader__labelform' htmlFor='password'>
                      Contraseña
                    </label>
                    <input
                      className='selectHeader__inputform'
                      type='password'
                      id='password'
                      name='password'
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
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
                    <label className='selectHeader__labelform' htmlFor='rememberMe'>
                      Recordarme
                    </label>
                  </div>
                  <button className='selectHeader__login' type='submit'>
                    Iniciar sesión
                  </button>
                </form>
            </div>
          </div>
        </div>
      )}
      {!isLoggedIn ? (
        <div className='selectHeader__info'>
          <SearchMovie />
          <div className='selectHeader__loc'>
            <span className='selectHeader__city'>Medellín</span>
            <img className='selectHeader__location' src={location} alt='' />
          </div>
          <img
            className='selectHeader__icon'
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
            alt=''
            onClick={handleImageClick}
          />
        </div>
      ) : (
        <div className='selectHeader__loggedInInfo'>
          <p className='selectHeader__loggedInUser'>{loggedInUser.name}</p>
          <span className='selectHeader__view'>Ver Perfil</span>
        </div>
      )}
    </div>
  );
      }

export default SelectHeader;










