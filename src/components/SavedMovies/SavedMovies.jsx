import { useCallback, useEffect, useState } from "react";
import MoviesList from "../MoviesList/MoviesList";

export default function SavedMovies({ savedMovies, onDelete, setIsError }) {
    const [isCheck, setIsCheck] = useState(false)
    const [filterMovies, setFilterMovies] = useState(savedMovies)
    const [searchedMovies, setSearchedMovies] = useState('')
    

    // console.log(setIsError)


    const filter = useCallback((search, isCheck, movies) => {
        setSearchedMovies(search)
        setFilterMovies(movies.filter((movie) => {
            const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isCheck ? (searchName && movie.duration <= 40) : searchName
        }))
      }, [])

    function searchMovie(search) {
        filter(search, isCheck, savedMovies)
    }

    useEffect(() => {
        filter(searchedMovies, isCheck, savedMovies)
    }, [filter, searchedMovies, isCheck, savedMovies])


    function changeShort() {
        if(isCheck) {
            setIsCheck(false)
            filter(searchedMovies,false, savedMovies)
        } else {
            setIsCheck(true)
            filter(searchedMovies,true, savedMovies)
        }
    }

    return( 
        <>
        <MoviesList 
            isCheck={isCheck}
            searchMovie={searchMovie}
            searchedMovies={searchedMovies}
            changeShort={changeShort}
            movies={filterMovies}
            onDelete={onDelete}
            savedMovies={savedMovies}
        />
        </>
    )

}