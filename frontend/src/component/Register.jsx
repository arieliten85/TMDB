import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useInput from "../utils/custom-hooks";

import { UserContext } from "../context/UserContext";

export default function Registre() {
  const { mostrarAlerta, msg } = useContext(UserContext);

  const name = useInput();
  const password = useInput();
  const email = useInput();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("registrando...");

    if ([name.value, email.value, password.value].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    axios.post("/api/users/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });
    navigate("/login");
  };

  return (
    <div className="formContent">
      <form className="formBox" 
        onSubmit={handleSubmit}>
        
        <h1 className="texto">Register</h1>

     
        <input type="text"
               placeholder="Nombre"
               {...name} />

     
        <input type="email" 
              placeholder="Su Correo"
              {...email} />

       
        <input type="password" 
               placeholder="Su contraseña"
              {...password} />

        <input
          className="button"
          type="submit"
          value="Registrar"
          onClick={() => {}}
        />
                 {/* {Alerta de error} */}
        {!msg ? "" : <p className="error">{msg}</p>}
      </form>
    </div>
  );
}
