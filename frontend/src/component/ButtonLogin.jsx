import React from "react";
import { Link } from "react-router-dom";
export default function ButtonLogin() {
  
  return (
    <Link to={"Login"}>
      <button className="boton-neon">Login</button>
    </Link>
  );
}




