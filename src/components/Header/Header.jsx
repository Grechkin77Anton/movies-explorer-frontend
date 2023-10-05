
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import { useState } from "react";

export default function Header({ name, loggedIn }) {
  console.log(loggedIn)

  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  function openBurger() {
    if(isOpen){
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function goLink() {
    setIsOpen(false)
  }

  return (
    <header className={`header ${name !=='home' ? 'header__white' : ''}`}>
      <div>
      <Link to={'/'} className="header__link-home"></Link>
      </div>
      {name === 'home' && !loggedIn ?
        <nav>
          <ul className='header__links-container'>
            <li>
              <Link to={'/signup'} className="header__signup">Регистрация</Link>
            </li>
            <li>
              <Link to={'/signin'} className="header__signin">Войти</Link>
            </li>
          </ul>
        </nav> 
        :
        <>
        <nav className={`header__nav ${isOpen ? 'header__nav_open' : ''}`}>
        <button type="button" onClick={openBurger} className='header__burger-close' />
          <ul className="header__nav_links-container">
            <li className="header__nav-links">
              <Link to={'/'} onClick={goLink} className={`header__nav-link ${name !== 'home' ? 'header__nav-link_text' : ''}  ${pathname === '/' ? 'header__nav-link_active' : ''}`}>Главная</Link>
            </li>
            <li className="header__nav-links">
              <Link to={'/movies'} onClick={goLink} className={`header__nav-link ${name !== 'home' ? 'header__nav-link_text' : ''} ${pathname === '/movies' ? 'header__nav-link_active' : ''}`}>Фильмы</Link>
            </li >
            <li className="header__nav-links">
              <Link to={'/saved-movies'} onClick={goLink} className={`header__nav-link ${name !== 'home' ? 'header__nav-link_text' : ''} ${pathname === '/saved-movies' ? 'header__nav-link_active' : ''}`}>Сохранённые фильмы</Link>
            </li>
            <li className="header__nav-links ">
              <Link to={'/profile'} onClick={goLink} className={`header__nav-link header__nav_acc-container ${name !== 'home' ? 'header__nav_acc-container_white' : ''}`}>Аккаунт<div className="header__nav-link_account" /></Link>
            </li>
          </ul>
        </nav> 
        <button type="button" onClick={openBurger} className={`header__burger-menu ${name === 'home' ? 'header__burger-menu-white' : ''}`} />
</>
}
    </header>
  );
}
