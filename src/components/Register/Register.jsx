import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";


export default function Register({ name , setLoggedIn}) {

    const navigate = useNavigate(); 

    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');


    // const handleRegister = (evt) => {
    //     evt.preventDefault()
    //     onRegister({password, email, username})
    //       .then(() => {
    //         setPassword('');
    //         setEmail('');
    //         setUsername('');
    //       })
    //       .then(() =>
    //         navigate('/signin'))
    //       .catch((err) => {
    //         setIsError(true)
    //         console.log(err)
    //       })
    // }

    function onLogin(evt) {
      evt.preventDefault()
      navigate('/signin')
      setLoggedIn(true)
    }

    return (
      <main className='registration__page'>
          <div className="registration">
            <div>
                <Link to={'/'} className="registration__link-home"></Link>
              </div>
              <h1 className="registration__title">Добро пожаловать!</h1>
              <form className="registration__form" 
              name="signup" 
              onSubmit={onLogin}
              >
                  <label className="registration__label">
                    <span className="registration__subtitle">Имя</span>
                    <input 
                    name='username'
                    className="registration__input_name" 
                    placeholder='Имя'
                    type="text"
                    value={username}
                    onChange={({target}) => setUsername(target.value)}
                    required
                    >
                    </input>
                    <span className="registration__error"></span>
                  </label>

                  <label className="registration__label">
                    <span className="registration__subtitle">Email</span>
                    <input 
                    name='email'
                    className="registration__input_email" 
                    placeholder='Email@mail.com'
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    required
                    >
                    </input>
                    <span className="registration__error">Что-то пошло не так</span>
                  </label>

                  <label className="registration__label">
                      <span className="registration__subtitle">Пароль</span>
                      <input 
                      name='password'
                      className="registration__input_password" 
                      placeholder='Пароль'
                      type="password"
                      value={password}
                      minLength={'3'}
                      onChange={({target}) => setPassword(target.value)}
                      required
                      >  
                      </input>
                      <span className="registration__error"></span>
                  </label>
                  <span className="registration__error-request">Ошибка при регистрации</span>
                  <button type='submit' className="registration__submit">Зарегистрироваться</button>
              </form>
              <p className="registration__text">Уже зарегистрированы? <Link to='/signin' className='registration__link'>Войти</Link></p>
            </div>
        </main>
    )
}