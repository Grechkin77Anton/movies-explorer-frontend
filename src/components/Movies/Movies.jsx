import './Movies.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import useFormValidation from '../../utils/useFormValidation.js';
import { useState } from 'react';

export default function Movies() {
    const [isError,setIsError] = useState(false)
    const {values, isValid, handleChange} = useFormValidation()

    function onSubmit(evt) {
        evt.preventDefault()
        if (!isValid) {
          setIsError(true)
          return
        } else {
          setIsError(false)
        }
      }

    return (
        <section className='movie__gallery'>
            <div className='search__container'>
                <form noValidate className='movie__search' value={values.search} onSubmit={onSubmit}>
                    <input className='input__search_movie' type='text' placeholder='Фильм' onChange={handleChange} required  />
                    <button className='button__search' >Найти</button>
                </form>
                <span className={`search__error ${isError ? 'search__error_active': ''}`}>Введите название фильма</span>
                <FilterCheckbox></FilterCheckbox>
                </div>
            <section className='movie__list'>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                <MoviesCard></MoviesCard>
                </section>
                <button type='button' className='button__add-more'>Ещё</button>
        </section>
    )
}