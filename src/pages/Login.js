import React, { useContext, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Req from '../Req.js';
import { UserContext } from "../UserContext.js";

const Login = () => {
  const idRef = useRef('');
  const passwordRef = useRef('');

  const [errore, setErrore] = useState('');
  const [redirect, setRedirect] = useState(null);

  const {user, setUser, ready} = useContext(UserContext);

  if(!ready) {
    return 'Caricando...';
  }

  if(ready && user && !redirect) {
    return <Navigate to={'/home'} />;
  }

  const postLogin = async() => {    
    try {
      const { data : loginResponse } = await Req.post('dottore/login', {id: idRef.current.value, password: passwordRef.current.value});
      localStorage.setItem('token', loginResponse.jwt);

      const { data : userResponse } = await Req.get('dottore');
      setUser(userResponse);
      
      setRedirect('/home');
     // navigate("/home");
    } catch(err) {
      setErrore(err?.response?.data?.error ?? "Errore server");
    }   

  };

  const accedi = (e) => {
    e.preventDefault();
    
    postLogin();

  };

  if(redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <form onSubmit={accedi}>
      <input type="text" ref={idRef} placeholder="Id" />
      <br/>
      <input type="text" ref={passwordRef} placeholder="Password" />
      <br/>
      <input type="submit" value="Accedi"/>
      { errore && <h5>{errore}</h5> }
    </form>
  )
}

export default Login