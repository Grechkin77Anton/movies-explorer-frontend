import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile({ name, setLoggedIn }) {

    function onEdit(evt) {
        evt.preventDefault()
      }
    
      function logOut() {
        setLoggedIn(false)
      }

    return (
        <section className='profile'>
            <h2 className='profile__title'> Привет, Виталий</h2>
            <form className="profile__form" 
            name="profile"
            onSubmit={onEdit}
            >
                <label className="profile__label">
                    <span className="profile__subtitle">Имя</span>
                    <input 
                    className="profile__input_name" 
                    minLength={2}
                    type="text"
                    required
                    >
                    </input>
                </label>
                <span className="profile__error"></span>

                <label className="profile__label">
                    <span className="profile__subtitle">E-mail</span>
                    <input 
                    className="profile__input_email" 
                    type="email"
                    required
                    >  
                    </input>
                </label>
                <span className="profile__error">Что-то пошло не так</span>

                <span className="profile__error-request">При обновлении профиля произошла ошибка</span>
                <button type="submit" className="profile__submit">Редактировать</button>
            </form>
            <Link to={'/'} onClick={logOut} type="submit" className="profile__logout">Выйти из аккаунта</Link>
        </section>
    )
}