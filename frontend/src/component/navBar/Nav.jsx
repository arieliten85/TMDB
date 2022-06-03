import React, { useState, useContext } from "react";
import ButtonRegister from "../ButtonRegister";
import ButtonLogin from "../ButtonLogin";
import Search from "../serch/Search";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Nav() {
  const { setIsLoogedId, isAuthenticated, user } = useContext(UserContext);

  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleClickLogOut = async () => {
    try {
      await axios.post("/api/users/logout");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }

    setIsLoogedId({});
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        
        <Link to={"/"}>
          <h1 className="nav-logo"> MooSee</h1>
        </Link>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div>
            <Search />
          </div>

          <Link to={"/"}>
            <div className="nav-item">
              <h2 className="nav-links ">Home</h2>
            </div>
          </Link>
          <Link to={"/user"}>
            <div className="nav-item">
              <h2 className="nav-links ">Perfil</h2>
            </div>
          </Link>
          {!isAuthenticated ? (
            <>
              <ButtonLogin />
              <ButtonRegister />
            </>
          ) : (
            <>
              <h5 className="userLog">Hola {user.name}</h5>

              <div>
                <button className="boton-neon" onClick={handleClickLogOut}>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>



        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <i className="material-icons fas fa-times nav-icon">close</i>
          ) : (
            <i className="material-icons fas fa-bars nav-icon">menu</i>
          )}
        </div>
      </div>
    </nav>
  );
}

//viejo

// import React, { useState, useContext } from "react";
// import ButtonRegister from "../ButtonRegister";
// import ButtonLogin from "../ButtonLogin";

// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

// export default function Nav() {
//   const { setIsLoogedId, isAuthenticated, user } = useContext(UserContext);

//   const navigate = useNavigate();

//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   const handleClickLogOut = async () => {
//     try {
//       await axios.post("/api/users/logout");
//       localStorage.clear();
//     } catch (error) {
//       console.log(error);
//     }

//     setIsLoogedId({});
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div>
//           <h1 className="nav-logo"> MooSee</h1>
//         </div>

//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link
//               to="/peliculas"
//               // activeClassName="active"
//               className="nav-links "
//               onClick={handleClick}
//             >
//               Inicio
//             </Link>

//             <Link
//               to="/peliculas"
//               // activeClassName="active"
//               className="nav-links "
//               onClick={handleClick}
//             >
//               Peliculas
//             </Link>

//             <Link
//               to="/peliculas"
//               // activeClassName="active"
//               className="nav-links "
//               onClick={handleClick}
//             >
//               Estrenos
//             </Link>
//           </li>

//           {!isAuthenticated ? (
//             <>
//               <ButtonLogin />
//               <ButtonRegister />
//             </>
//           ) : (
//             <>
//               <Link to={"/user"}>
//                 <div className="userLog">Hola {user.name}</div>
//               </Link>

//               <div>
//                 <button className="boton-neon" onClick={handleClickLogOut}>
//                   Logout
//                 </button>
//               </div>
//             </>
//           )}
//         </ul>
//         <div className="nav-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>
//       </div>
//     </nav>
//   );
// }
