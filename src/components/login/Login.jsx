
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";

export default function Login ({ setLoggedIn }) {

    const navigate = useNavigate(); 

    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    // const handleLogin = (evt) => {
    //     evt.preventDefault()
    //     onLogin({password, email})
    //       .then(() => {
    //         setPassword('');
    //         setEmail('');
    //       })
    //       .then(() => navigate('/'))
    //       .catch(console.error)
    // }


    function handleLogin(evt) {
        evt.preventDefault()
        navigate('/movies')
        setLoggedIn(true)
      }

    return (
        <div className="login">
            <div>
              <Link to={'/'} className="login__link-home"></Link>
            </div>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" 
            name="signin"
            onSubmit={handleLogin}
            >
                <label className="login__label">
                    <span className="login__subtitle">Email</span>
                    <input 
                    className="login__input_email" 
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    required
                    >
                    </input>
                    <span className="login__error"></span>
                </label>

                <label className="login__label">
                    <span className="login__subtitle">Пароль</span>
                    <input 
                    className="login__input_password" 
                    type="password"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                    required
                    >  
                    </input>
                    <span className="login__error">Что-то пошло не так</span>
                </label>
                <span className="login__error-request">Ошибка при входе</span>
                <button type="submit" className="login__submit">Войти</button>
            </form>
            <p className="login__text">Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
        </div>
    )
}