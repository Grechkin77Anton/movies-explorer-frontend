import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import photo from '../../images/movie_pic.svg';
import { useState } from 'react';

export default function MoviesCard() {

    const [isActive, setIsActive] = useState(false);

    const { pathname } = useLocation()

    function onLike() {
        if(isActive) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }

    return(
        <div className='movie__card'>
            <article>
                <Link to={''} target='_blank'>
                    <img alt='#' className='movie__pic' src={photo}></img>
                </Link>
                <div className='movie__card-group'>
                    <div className='movie__card-text'>
                      <p className='movie__card-name'>{'Название'}</p>
                    </div>
                    { pathname === '/saved-movies' ?
                     <button type='button' onClick={onLike} className='movie__card-like movie__card-delete' />
                     : 
                    <button type='button' onClick={onLike} className={`movie__card-like ${isActive ? 'movie__card-like-active' : '' }`} />
                    }
                </div>
                <span className='movie__card-duration'>{'1ч 40м'}</span>
            </article>
        </div>
    )
}