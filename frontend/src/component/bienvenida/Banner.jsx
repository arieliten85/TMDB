import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Banner() {
  const { user } = useContext(UserContext);

  return (
    <div className="bannerBox texto">
      <div>
        <h1 className="titiloBanner">MooSee</h1>
        <div className="boxTexto">
          <h2 className="textoBanner">
            Hola {user.name}! que bueno tenerte ode vuelta!, Ya sabés como
            funciona nuestra página, elegís la categoría y encontrás las
            películas que más te gusten, podés agregalas a favoritos. Conocé la
            lista de favoritos de otros usuarios.
          </h2>
          <Link to={"/user"}>
            <h2 className="perfilBanner texto">Perfil</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
