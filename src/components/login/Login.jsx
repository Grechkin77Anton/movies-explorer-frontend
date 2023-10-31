import React, { useEffect, useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";

export default function Login ({ onLogin, setIsError, isError, isSend }) {
    const { values, errors, isValid, handleChange } = useFormValidation()

    useEffect(() => {
        setIsError(false)
    }, [setIsError])

    function onSubmit(evt) {
       evt.preventDefault()
       onLogin(values.email, values.password)
    }

    return (
        <main className="login__page">
            <div className="login">
                <div>
                <Link to={'/'} className="login__link-home"></Link>
                </div>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__form" 
                name="signin"
                onSubmit={onSubmit}
                noValidate
                >
                    <label className="login__label">
                        <span className="login__subtitle">Email</span>
                        <input 
                            name="email"
                            className='login__input_email'
                            placeholder='Email@mail.com'
                            type="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            pattern={"^\\S+@\\S+\\.\\S+$"}
                            required
                        >
                        </input>
                        <span className="login__error" error={errors.email}>{errors.email}</span>
                    </label>

                    <label className="login__label">
                        <span className="login__subtitle">Пароль</span>
                        <input 
                            name="password"
                            className='login__input_password'
                            placeholder='Пароль'
                            type="password"
                            minLength={6}
                            value={values.password || ''}
                            error={errors.password}
                            onChange={handleChange}
                            required
                        >  
                        </input>
                        <span className="login__error" error={errors.password}>{errors.password}</span>
                    </label>
                    <span className={`login__error-request ${isError ? 'login__error-request_active' : ''}`}>Ошибка при авторизации</span>
                    <button type="submit" 
                    disabled={ !isValid || isSend }
                    className={`login__submit ${isValid || isSend ? '' : 'login__submit_disabled'}`}>Войти</button>
                </form>
                <p className="login__text">Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
            </div>
        </main>
    )
}