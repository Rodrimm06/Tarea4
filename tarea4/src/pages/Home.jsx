import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function home() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  function handleBuscar() {
    navigate(`/usuario/${id}`);   // navega a /usuario/3, /usuario/7, etc.
  }

  return (
    <div className='flex items-center justify-center bg-gray-200 rounded-full'>
     <h1 className=' p-15 font-serif text-lg'>Buscar usuario por ID</h1>
     <div>
      <input
        type="number"
        min="1"
        max="10"
        className='bg-blue-500 font-mono rounded-full text-center text-white w-20 m-10'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleBuscar}
      className='bg-red-500 font-mono rounded-full text-center- text-white w-20 m-10' 
      >Buscar</button>
      </div>
    </div>
  );
}


export default home