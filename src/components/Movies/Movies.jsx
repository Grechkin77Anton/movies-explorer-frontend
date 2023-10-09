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
      <main className='movie-gallery__page'>
          <section className='movie__gallery'>
              <div className='search__container'>
                  <form noValidate className='movie__search-container' value={values.search} onSubmit={onSubmit}>
                    <div className='search__movie'>
                      <input className='input__search_movie' type='text' placeholder='Фильм' onChange={handleChange} required  />
                      <button type='submit' className='button__search' >Найти</button>
                    </div>
                      <span className={`search__error ${isError ? 'search__error_active': ''}`}>Введите название фильма</span>
                      <FilterCheckbox></FilterCheckbox>
                  </form>
                  </div>
              <ul className='movie__list'>
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
                  </ul>
                  <button type='button' className='button__add-more'>Ещё</button>
          </section>
      </main>
    )
}