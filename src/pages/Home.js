import React, { useEffect, useState, useContext } from "react";
import Req  from '../Req.js';
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";

const Home = () => {

  const {user, setUser, ready} = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  if(!ready) {
    return 'Caricando...';
  }

  if(ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  const logout = () => {
    localStorage.removeItem('token');
    setRedirect('/login');
    setUser(null);
  };

  if(redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <div>Profilo Dottore</div>
      <h5>Id: {user.id}</h5>
      <h5>Nome: {user.nome}</h5>
      <h5>Cognome: {user.cognome}</h5>

      <button onClick={logout}>Logout</button>
    </>
  )
}

export default Home