import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function EliminaFavoritos({movieSelect}) {
  const { user} = useContext(UserContext);
  const id = movieSelect.id;
  const idUser = user.id;

  const eliminarFavoritos = () => {
    axios
      .delete(`/api/favourite/${idUser}/${id}/delete`)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <button className="texto button" onClick={eliminarFavoritos}>
      Eliminar Favoritos
    </button>
  );
}
