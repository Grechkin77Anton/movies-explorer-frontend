import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useEffect, useState } from 'react';

export default function MoviesCard({ savedMovie, data,addMovie, onDelete  }) {
    const [click, setIsClick] = useState(false);
    const { pathname } = useLocation()

    function onClick() {
        if(savedMovie.some((element) => data.id === element.movieId)) {
            setIsClick(true)
            addMovie(data)
        } else {
            setIsClick(false)
            addMovie(data)
        }
    }

    function convertTime(duration) {
        const hours = Math.floor(duration / 60)
        const minutes = duration % 60
        return ( hours === 0 ? `${minutes} м ` : minutes === 0 ? `${hours} ч ` : `${hours} ч ${minutes} м`)
    }

    useEffect(() => {
        if (pathname === '/movies')
        setIsClick(savedMovie.some(element => data.id === element.movieId))
    }, [pathname, setIsClick, savedMovie, data.id])

    return(
        <li className='movie__card'>
            <article>
                <Link to={data.trailerLink} target='_blank'>
                    <img alt={data.name} className='movie__pic' src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image}></img>
                </Link>
                <div className='movie__card-group'>
                    <div className='movie__card-text'>
                      <h2 className='movie__card-name'>{data.nameRU}</h2>
                    </div>
                    { pathname === '/saved-movies' ?
                     <button type='button' onClick={() => onDelete(data._id)} className='movie__card-like_deactive movie__card-delete' />
                     : 
                    <button type='button' onClick={onClick} className={`movie__card-like ${click ? 'movie__card-like-active' : '' }`} />
                    }
                </div>
                <span className='movie__card-duration'>{convertTime(data.duration)}</span>
            </article>
        </li>
    )
}