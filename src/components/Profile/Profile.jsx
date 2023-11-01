import { Link } from 'react-router-dom';
import './Profile.css';
import { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormValidation from '../../utils/useFormValidation';

export default function Profile({ logOut, editUserData, isSend, isSuccess, setIsSuccess, isError, setIsError }) {
    const currentUser = useContext(CurrentUserContext)
    const { values, errors, isValid, handleChange, formReset } = useFormValidation()


    useEffect(() => {
        setIsError(false)
        setIsSuccess(false)
    }, [setIsError, setIsSuccess])

    useEffect(() => {
        formReset({
            username: currentUser.name,
            email: currentUser.email 
        })
    }, [formReset, currentUser])

    function handleSubmit(evt) {
        evt.preventDefault()
        editUserData(values.username, values.email)
    }
    
    return (
        <main className='profile__page'>
            <section className='profile'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name} !`}</h1>
                <form className="profile__form" 
                name="profile"
                onSubmit={handleSubmit}
                values={values}
                noValidate
                >
                    <label className="profile__label">
                        <span className="profile__subtitle">Имя</span>
                        <input
                        name='username'
                        className="profile__input_name" 
                        placeholder='Имя'
                        minLength={2}
                        maxLength={30}
                        type="text"
                        value={values.username || ''}
                        onChange={handleChange}
                        required
                        >
                        </input>
                    </label>
                    <span className="profile__error">{errors.username}</span>

                    <label className="profile__label">
                        <span className="profile__subtitle">E-mail</span>
                        <input 
                        name='email'
                        className="profile__input_email" 
                        placeholder='Email@mail.com'
                        type="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        pattern={"^\\S+@\\S+\\.\\S+$"}
                        required
                        >  
                        </input>
                    </label>
                    <span className="profile__error">{errors.email}</span>

                    <span className={`profile__error-request ${isSuccess ? 'profile__error-request_success' : ''}`}>{`${isError ? 'При обновлении профиля произошла ошибка': ''} ${isSuccess ? 'Успешно': ''}`}</span>
                    <button type="submit"
                    disabled={ !isValid || isSend }
                    className={`profile__submit ${(values.username === currentUser.name && values.email === currentUser.email) ? '' : 'profile__submit_active' }`}>Редактировать</button>
                </form>
                <Link to={'/'} onClick={logOut} type="submit" className="profile__logout">Выйти из аккаунта</Link>
            </section>
        </main>
    )
}