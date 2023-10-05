import Header from "./Header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from "./Register/Register.jsx";
import Login from "./login/Login.jsx";
import Profile from './Profile/Profile.jsx';
import Movies from './Movies/Movies.jsx';
import Preloader from './Preloader/Preloader.jsx'

import { useState } from "react";
import NotFound from "./NotFound/NotFound.jsx";

function App() {
    // const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false)

    return (
          <div className="page">
            <Routes>

              <Route
                
                path="/"
                element={
                  <>
                  <Header name='home' loggedIn={loggedIn}/>
                  <Main />
                  <Footer />
                  </>
                }
              />
    
              <Route
                path="signup"
                element={
                    <Register name="signup" setLoggedIn={setLoggedIn} />
                }
              />
    
              <Route
                path="signin"
                element={
                    <Login name="signin" setLoggedIn={setLoggedIn} />
                }
              />

              <Route
                path="movies"
                element={
                    <>
                    <Header />
                    <Movies name="movies" />
                    <Footer />
                    </>
                }
              />

              <Route
                path="saved-movies"
                element={
                    <>
                    <Header />
                    <Movies name="savedmovies" />
                    <Footer />
                    </>
                }
              />
              <Route
                path="profile"
                element={
                    <>
                    <Header />
                    <Profile name="profile" setLoggedIn={setLoggedIn} />
                    </>
                }
              />
    
              <Route path="*" element={
              <NotFound />} />
              
            </Routes>
    
            
            </div>
    )
}

export default App;