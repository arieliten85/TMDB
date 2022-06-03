import React, { useContext } from "react";
import Banner from "../bienvenida/Banner";
import { UserContext } from "../../context/UserContext";

import MovieList from "./MovieList";

export default function MovieListContainer() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="contenedorPadre">
        {user ? <Banner /> : ""}

        <div className="contenedorMovies">
          <MovieList />
        </div>
      </div>
    </>
  );
}
