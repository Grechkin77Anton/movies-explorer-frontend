import Header from "./Header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Register from "./Register/Register.jsx";
import Login from "./login/Login.jsx";
import Profile from './Profile/Profile.jsx';
import MoviesList from './MoviesList/MoviesList.jsx';
import Preloader from './Preloader/Preloader.jsx';
import CurrentUserContext from '../contexts/CurrentUserContext.js' 
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute.jsx' 
import { useEffect, useState } from "react";
import NotFound from "./NotFound/NotFound.jsx";
import mainApi from "../utils/MainApi.js";
import Movies from "./Movies/Movies.jsx";
import SavedMovies from "./SavedMovies/SavedMovies.jsx";

function App() {
   
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false)
    const [isSend, setIsSend] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [savedMovies, setSavedMovies] = useState([])
    const [isError, setIsError] = useState(false)
    const [isCheckToken, setIsCheckToken] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)

    function handleDeleteMovieCard(deleteId) {
      mainApi.deleteMovie(deleteId, localStorage.jwt)
        .then(() => {
          setSavedMovies(savedMovies.filter((movie) => {
            return movie._id !== deleteId
          }))
        })
        .catch((err) => console.error(`'Ошибка при удалении фильма' ${err}`))
    }

    function handleAddMovie(data) {
      const addMovie = savedMovies.some((element) => data.id === element.movieId)
      const searchClickMovie = savedMovies.filter((movie) => {
        return movie.movieId === data.id
      })
      if(addMovie) {
        handleDeleteMovieCard(searchClickMovie[0]._id)
      } else {
        mainApi.addMovie(data, localStorage.jwt)
          .then((res) => {
            setSavedMovies([res, ...savedMovies])
          })
          .catch((err) => console.error(`Ошибка при постановке лайка ${err}`))
      }
    }

    useEffect(() => {
      if (localStorage.jwt) {
        Promise.all([mainApi.getUserData(localStorage.jwt), mainApi.getMovies(localStorage.jwt)])
          .then(([userData, dataMovies]) => {
            setSavedMovies(dataMovies.reverse())
            setCurrentUser(userData)
            setLoggedIn(true)
            setIsCheckToken(false)
          })
          .catch((err) => {
            console.error(`Ошибка при загрузке начальных данных ${err}`)
            setIsCheckToken(false)
            localStorage.clear()
          })
      } else {
        setLoggedIn(false)
        setIsCheckToken(false)
        localStorage.clear()
      }
    }, [loggedIn])

    function editUserData(username, email) {
      setIsSend(true)
      mainApi.setUserInfo(username, email, localStorage.jwt)
        .then((res) => {
          setCurrentUser(res)
          setIsSuccess(true)
        })
        .catch((err) => {
          setIsError(true)
          setIsSuccess(false)
          console.error(`Ошибка при редактировании данных пользователя ${err}`)
        })
        .finally(() => setIsSend(false))
    }

    function logOut() {
      localStorage.clear()
      setLoggedIn(false)
      navigate('/')
    }

    function handleLogin(email, password) {
      setIsSend(true)
      mainApi.authorization(email, password)
        .then((res) => {
          localStorage.setItem('jwt', res.token )
          setLoggedIn(true)
          navigate('/movies')
        })
        .catch((err) => {
          setIsError(true)
          console.error(`Ошибка при авторизации ${err}`)
        })
        .finally(() => setIsSend(false))
    }

    function handleRegister(username, email, password) {
      setIsSend(true)
      mainApi.registration(username, email, password)
        .then((res) => {
          if (res) {
            setLoggedIn(false)
            handleLogin(email, password)
        }
        })
        .catch((err) => {
          setIsError(true)
          console.error(`Ошибка при регистрации ${err}`)
        })
        .finally(() => setIsSend(false))
    }
    return (
      <div className="page">
        {isCheckToken ? <Preloader /> :
      <CurrentUserContext.Provider value={currentUser}>
            <Routes>

              <Route
                path="/"
                element={
                  <>
                  <Header name='home' loggedIn={loggedIn}/>
                  <Main loggedIn={loggedIn}/>
                  <Footer />
                  </>
                }
              />
    
              <Route
                path="/signup"
                element={ loggedIn ? <Navigate to='/movies' replace /> :
                    <Register name="signup" onRegister={handleRegister} setLoggedIn={setLoggedIn} isSend={isSend} isError={isError} setIsError={setIsError} />
                }
              />
    
              <Route
                path="/signin"
                element={
                    <Login name="signin" onLogin={handleLogin} setLoggedIn={setLoggedIn} isSend={isSend} isError={isError} setIsError={setIsError} />
                }
              />
              <Route 
                path="*"  element={
                    <NotFound />} />

              <Route element={<ProtectedRoute loggedIn={loggedIn} />}>

              <Route
                path="/movies"
                element={
                    <>
                    <Header />
                    <Movies name="movies" 
                    setIsError={setIsError} 
                    savedMovies={savedMovies} 
                    addMovie={handleAddMovie}
                    />
                    <Footer />
                    </>     
                 }
              />

              <Route
                path="/saved-movies"
                element={
                    <>
                    <Header />
                    <SavedMovies name="savedmovies" 
                    setIsError={setIsError} 
                    savedMovies={savedMovies}
                    onDelete={handleDeleteMovieCard}
                    />
                    <Footer />
                    </>
                }
              />
              <Route
                path="/profile"
                element={
                    <>
                    <Header />
                    <Profile name="profile" 
                    editUserData={editUserData} 
                    logOut={logOut} 
                    isSend={isSend}
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                    isError={isError}
                    setIsError={setIsError}
                    setLoggedIn={setLoggedIn} />
                    </>
                }
              />
    
    </Route>
              
            </Routes>
      </CurrentUserContext.Provider>}
      </div>
    )
}

export default App;