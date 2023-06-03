import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Req from '../Req.js';


const Login = () => {
  const idRef = useRef('');
  const passwordRef = useRef('');

  const [errore, setErrore] = useState('');

  const navigate = useNavigate();

  const postLogin = async() => {    
    try {
      const response = (await Req.post('dottore/login', {id: idRef.current.value, password: passwordRef.current.value})).data;
      localStorage.setItem('token', response.jwt);
      navigate("/home");
    } catch(err) {
      setErrore(err?.response?.data?.error ?? "Errore server");
    }   

  };

  const accedi = (e) => {
    e.preventDefault();
    
    postLogin();

  };

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