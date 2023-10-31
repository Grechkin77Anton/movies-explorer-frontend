import './MoviesList.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from '../Preloader/Preloader';
import useFormValidation from '../../utils/useFormValidation.js';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function MoviesList({ movies, isLoading, isServerError, searchMovie, searchedMovies, savedMovies, isCheck, changeShort, addMovie, onDelete }) {
    const [isError,setIsError] = useState(false)
    const { values, handleChange, formReset } = useFormValidation()

    const { pathname } = useLocation()

    const [count, setCount] = useState('')
    const fact = movies.slice(0, count)



    function printCards() {
      const counter = { init: 16, step: 4}
      if (window.innerWidth < 1280){
        counter.init = 12
        counter.step = 3
      }
      if (window.innerWidth < 1137){
        counter.init = 8
        counter.step = 2
      }
      if (window.innerWidth < 768) {
        counter.init = 5
        counter.step = 2
      }
      return counter
    }

    function clickMore() {
      setCount(count + printCards().step)
    }

    useEffect(() => {
      setIsError(false)
  }, [pathname])
 
  useEffect(() => {
    if((pathname === '/saved-movies')) {
      formReset({ search: ''})
    } else {
      formReset({ search: searchedMovies})
    }
    setIsError(false)
  }, [searchedMovies, formReset, setIsError, pathname, savedMovies])


  useEffect(() => {
    if(pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth < 1280){
          setCount(printCards().init)
        }
        if (window.innerWidth < 1137){
          setCount(printCards().init)
        }
        if (window.innerWidth < 768) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname])

    function onSubmit(evt) {
      evt.preventDefault()
      if(evt.target.search.value){
        searchMovie(evt.target.search.value)
        setIsError(false)
      } else {
        setIsError(true)
      }
    }

    return (
      <main className='movie-gallery__page'>
          <section className='movie__gallery'>
              <div className='search__container'>
                  <form noValidate className='movie__search-container'
                  name='searchForm' 
                  onSubmit={onSubmit}>
                    <div className='search__movie'>
                      <input className='input__search_movie'
                        type='text' 
                        placeholder='Фильм'
                        name='search'
                        value={values.search || ''}
                        onChange={handleChange} 
                        required  />
                      <button type='submit' className='button__search' >Найти</button>
                    </div>
                      <span className={`search__error ${isError ? 'search__error_active': ''}`}>Введите название фильма</span>
                      <FilterCheckbox isCheck={isCheck} changeShort={changeShort}></FilterCheckbox>
                  </form>
                  </div>
              <ul className='movie__list'>
                {isLoading ? <Preloader /> : 
                 (pathname === '/movies' && fact.length !==0) ? 
                    fact.map((data) => {
                      return (
                        <MoviesCard 
                        key={data.id}
                        savedMovie={savedMovies}
                        addMovie={addMovie}
                        data={data}
                        />
                      )
                    }) : movies.length !==0 ? 
                    movies.map((data) => {
                      return(
                        <MoviesCard 
                        data={data}
                        key={data._id}
                        onDelete={onDelete}
                        />
                      )
                    }) : isServerError ?
                      <span className='movie__list_search-error'>
                        "Во время запроса произошла ошибка. 
                        Проблема с соединением или сервер недоступен"</span>
                        :
                        <span className='movie__list_search-error'>
                        "Ничего не найдено"</span>
                      
                    }
                  
                  </ul>
                  {pathname === '/movies' && <button type='button' className={`button__add-more ${count >= movies.length ? 'button__add-more_hidden' : ''}`} onClick={clickMore}>Ещё</button>}
          </section>
      </main>
    )
}