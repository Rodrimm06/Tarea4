import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function home() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  function handleBuscar() {
    navigate(`/usuarios/${id}`);   // navega a /usuario/3, /usuario/7, etc.
  }

  return (
    <div>
     <h1>Buscar usuario</h1>
      <input
        type="number"
        min="1"
        max="10"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
}


export default home