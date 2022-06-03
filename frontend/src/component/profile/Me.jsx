import React, { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { FavoritosContext } from "../../context/FavoritosContext";
import Favoritos from "./Favoritos";

export default function Me() {
  const { user } = useContext(UserContext);
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  useEffect(() => {
    axios
      .get(`api/favourite/${user.id}`)
      .then((resp) => setFavoritos(resp.data));
  }, [favoritos.id, user.id]);

  return (
    <div className="contenedorMovies">
      <Favoritos />
    </div>
  );
}
