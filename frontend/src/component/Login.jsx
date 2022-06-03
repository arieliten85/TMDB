import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import useInput from "../utils/custom-hooks";

export default function Login() {
  const { toggleAuth } = useContext(UserContext);
  const { mostrarAlerta, msg } = useContext(UserContext);

  const navigate = useNavigate();

  const password = useInput();
  const email = useInput();

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email.value, password.value].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    axios
      .post("/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then((resp) => {
        toggleAuth(resp.data);
      });

    navigate("/");
    
  };


 
  return (
    <div className="formContent">
      <form className="formBox" onSubmit={handleSubmit}>
        <h1 className="texto">Login</h1>

        <input type="email" placeholder="Su Correo" {...email} />

        <input type="password" placeholder="Su contraseña" {...password} />

        <input
          className="button"
          type="submit"
          value="Login"
          // onClick={() => {}}
        />
        {!msg ? "" : <p className="error">{msg}</p>}
      </form>
    </div>
  );
}
