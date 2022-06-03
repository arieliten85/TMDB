import React, { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext";
import FavoritoSelect from "./FavoritoSelect";

export default function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);



  if (favoritos.length === 0) {
    return (
      <div className="emptyBox">
        <div>
          <h4 className="texto">Tus peliculas Favoritas</h4>
          <p>Todavia no guardaste favoritos</p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {favoritos.map((favorito) => (
          <FavoritoSelect key={favorito.id} fav={favorito} />
        ))}
      </>
    );
  }
}
