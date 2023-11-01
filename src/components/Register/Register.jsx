import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import useFormValidation from '../../utils/useFormValidation';

export default function Register({ onRegister, isError, setIsError }) {
  const { values, errors, isValid, handleChange } = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault()
    onRegister( values.username, values.email, values.password)
  }

  useEffect(() => {
    setIsError(false)
}, [setIsError])

  return (
    <main className='registration__page'>
        <div className="registration">
          <div>
              <Link to={'/'} className="registration__link-home"></Link>
            </div>
            <h1 className="registration__title">Добро пожаловать!</h1>
            <form  className="registration__form" 
            name="signup" 
            onSubmit={onSubmit}
            noValidate
            >
                <label className="registration__label">
                  <span className="registration__subtitle">Имя</span>
                  <input 
                  name='username'
                  className="registration__input_name" 
                  placeholder='Имя'
                  type="text"
                  value={values.username || ''}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={30}
                  required
                  >
                  </input>
                  <span className="registration__error">{errors.username}</span>
                </label>

                <label className="registration__label">
                  <span className="registration__subtitle">Email</span>
                  <input 
                    name='email'
                    className="registration__input_email" 
                    placeholder='Email@mail.com'
                    type="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    pattern={"^\\S+@\\S+\\.\\S+$"}
                    required
                  >
                  </input>
                  <span className="registration__error">{errors.email}</span>
                </label>

                <label className="registration__label">
                    <span className="registration__subtitle">Пароль</span>
                    <input 
                      name='password'
                      className="registration__input_password" 
                      placeholder='Пароль'
                      type="password"
                      value={values.password || ''}
                      minLength={6}
                      onChange={handleChange}
                      required
                    >  
                    </input>
                    <span className="registration__error">{errors.password}</span>
                </label>
                <span className={`registration__error-request ${isError ? 'registration__error-request_active' : ''}`}>Ошибка при регистрации</span>
                <button type='submit'
                 disabled={!isValid || isError ? true : false}
                 className={`registration__submit ${isValid ? '' : 'popup__button_disabled'}`}>Зарегистрироваться</button>
            </form>
            <p className="registration__text">Уже зарегистрированы? <Link to='/signin' className='registration__link'>Войти</Link></p>
          </div>
      </main>
  )
}