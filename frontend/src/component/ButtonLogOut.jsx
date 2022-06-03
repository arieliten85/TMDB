import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ButtonLogOut() {
  const { setIsLoogedId,user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(setIsLoogedId)
  console.log(user)

  // const handleLogout = async () => {

  //   axios.post("/api/users/logout");
  //     setIsLoogedId({});

  //     navigate("/");

  // };

  // const handleLogout = async () => {
  //   try {
  //     await axios.post("/api/users/logout");
  //     setIsLoogedId({
  //       user: null,
  //       isAuthenticated: false,
  //     });
  //     console.log("logged out");
  //     navigate("/");
  //   } catch ({ response }) {
  //     console.log(response.status, response.statusText);
  //   }
  // };

  const handleLogout = async () => {
    axios.post("/api/users/logout")

    setIsLoogedId({
      
    })
    
    .catch((error) => console.log(error));

     navigate("/");
  };

  return (
    <button onClick={handleLogout} className="button">
      LogOut
    </button>
  );
}
