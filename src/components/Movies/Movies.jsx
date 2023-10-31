import { useCallback, useEffect, useState } from "react";
import MoviesList from "../MoviesList/MoviesList";
import moviesApi from "../../utils/MoviesApi";

export default function Movies({ savedMovies, addMovie, setIsError  }) {
    const [allMovies, setAllMovies] = useState([])
    const [filterMovies, setFilterMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState('')
    const [isCheck, setIsCheck] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isServerError, setIsServerError] = useState(false)

    const filter = useCallback((search, isCheck, movies) => {
        localStorage.setItem('movie', JSON.stringify(search))
        localStorage.setItem('shorts', JSON.stringify(isCheck))
        localStorage.setItem('allmovies', JSON.stringify(movies))
        setSearchedMovies(search)
        setFilterMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
      }, [])

      function searchMovie(search) {
        if(allMovies.length === 0) {
            setIsLoading(true)
            moviesApi.getMovie()
              .then ((res) => {
                setAllMovies(res)
                setIsCheck(false)
                setIsServerError(false)
                filter(search, isCheck, res)
              })
              .catch((err) => {
                setIsServerError(true)
                console.error(`Ошибка поиска фильма' ${err}`)
              })
              .finally(() => setIsLoading(false))
        } else {
            filter(search, isCheck, allMovies)
        }
      }

      console.log()

      useEffect(() => {
        if(localStorage.allmovies && localStorage.shorts && localStorage.movie) {
            const movies = JSON.parse(localStorage.allmovies)
            const search = JSON.parse(localStorage.movie)
            const isCheck = JSON.parse(localStorage.shorts)
            setIsServerError(false)
            setSearchedMovies(search)
            setIsCheck(isCheck)
            setAllMovies(movies)
            filter(search, isCheck, movies)
        }
      }, [filter])

      function changeShort() {
        if(isCheck) {
            setIsCheck(false)
            filter(searchedMovies, false, allMovies)
        } else {
            setIsCheck(true)
            filter(searchedMovies, true, allMovies)
        }
      }


      
    return(
        <>
        <MoviesList 
            isCheck={isCheck}
            searchMovie={searchMovie}
            searchedMovies={searchedMovies}
            savedMovies={savedMovies}
            changeShort={changeShort}
            movies={filterMovies}
            isLoading={isLoading}
            isServerError={isServerError}
            addMovie={addMovie}
        />
        </>
    )


      }






