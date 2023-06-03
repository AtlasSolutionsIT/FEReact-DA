import React, { useEffect, useState } from "react";
import Req  from '../Req.js';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [dottore, setDottore] = useState(null);

  const navigate = useNavigate();

  const getDottore = async () => {
    try {
      const response = (await Req.get('dottore')).data;
      setDottore(response);
    } catch (err) {
      alert(err?.response?.data?.error ?? "Errore server");
    }
  };

  useEffect(() => {

    getDottore();

  
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
        { dottore ? (
          <>
          <div>Profilo Dottore</div>
          <h5>Id: {dottore.id}</h5>
          <h5>Nome: {dottore.nome}</h5>
          <h5>Cognome: {dottore.cognome}</h5>

          <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
          Caricando...
          </>
        )
        }
        
    </>
  )
}

export default Home