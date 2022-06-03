import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export default function MovieSelect({ movieSelect }) {
  const { user, isAuthenticated } = useContext(UserContext);


  //const id = movieSelect.id;
  //const idUser = user.id;

  const eliminarFavoritos = () => {
    const id = movieSelect.id;
    const idUser = user.id;
    
    axios
      .delete(`/api/favourite/${idUser}/${id}/delete`)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const agregarFavoritos = () => {
    const id = movieSelect.id;
   
    axios.post("/api/favourite/add", {
      id: id,
      title: movieSelect.original_title,
      poster_path: movieSelect.poster_path,
      description: movieSelect.overview,
      user: user.id,
    });
  };

  return (
    <>
      <div
        className="main "
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movieSelect.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="imageBox">
          <img
            className="movieImageSelect"
            src={`https://image.tmdb.org/t/p/original${movieSelect.poster_path}`}
            alt="Placeholder"
          />

          <div className="infoBox">
            <div>
              <h4 className="title">{movieSelect.original_title}</h4>
            </div>

            <div>
              <p>{movieSelect.overview}</p>
            </div>

            <div className="botonesBox">
              {!isAuthenticated ? (
                ""
              ) : (
                <>
                  <button className="texto button" onClick={agregarFavoritos}>
                    Agregar Favoritos
                  </button>
                  <button className="texto button" onClick={eliminarFavoritos}>
                    Eliminar Favoritos
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div
  className="main"
  style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movieSelect.backdrop_path}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>
  <div className="MovieBoxSelect">
    <div className="postContainet">
      <div className="imageBox">
        <img
          className="movieImageSelect"
          src={`https://image.tmdb.org/t/p/original${movieSelect.poster_path}`}
          alt="Placeholder"
        />
      </div>

      <h4 className="movieTitleSelect">{movieSelect.original_title}</h4>
    </div>

    <div className="descriptionContainer">
      <h4 className="movieTitleSelect2">{movieSelect.original_title}</h4>
      <p>{movieSelect.overview}</p>
    </div>
  </div>

  {!isAuthenticated ? (
    ""
  ) : (
    <>
      <button onClick={agregarFavoritos}>Agregar Favoritos</button>
      <button onClick={eliminarFavoritos}>Eliminar Favoritos</button>
    </>
  )}
</div>; */
}
