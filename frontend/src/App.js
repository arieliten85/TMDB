import * as React from "react";
import { Route, Routes } from "react-router";
import Register from "./component/Register";
import Login from "./component/Login";
import Nav from "./component/navBar/Nav";
import "./styles/scss/app.scss";

import UserContext from "./context/UserContext";

import MovieListContainer from "./component/tmdb/MovieListContainer";
import MovieContext from "./context/MovieContext";

import MovieSelectContainer from "./component/tmdb/MovieSelectContainer";
import FavoritosContext from "./context/FavoritosContext";
import Me from "./component/profile/Me";
import Search from "./component/serch/Search";

function App() {
  return (
    <>
      <FavoritosContext>
        <MovieContext>
          <UserContext>
            <Nav />
            <Search />
            <Routes>
              <Route path="/" element={<MovieListContainer />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/peliculas" element={<MovieListContainer />} />
              <Route path="/movie/:id" element={<MovieSelectContainer />} />
              <Route path="/user" element={<Me />} />
            </Routes>
          </UserContext>
        </MovieContext>
      </FavoritosContext>
    </>
  );
}

export default App;
