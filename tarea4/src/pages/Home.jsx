import React from 'react'
import { useState, useEffect } from 'react';


function home() {
  const [id,  setID]  = useState('');
    const [datos,    setDatos]    = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error,    setError]    = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {

    if (!id.trim()) return;  // si está vacío, no buscar

    setCargando(true);
    setError(null);               // limpiar error anterior

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
        if (!res.ok) throw new Error('Usuario no encontrado');
        return res.json();
        })
        .then((json) => {
        setDatos(json);
        setCargando(false);
        })
        .catch((err) => {
        setError(err.message);
        setDatos(null);
        setCargando(false);
        });

    }, [id]);

  return (
    
    <div className="buscador-contenedor">
        <h1 className="buscador-titulo">Buscar Usuario</h1>

        <input
        type="text"
        placeholder="Escribe ID del 1 al 10"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="buscador-input"/> 
        

        <button onClick={() => setID(inputValue)}>
             Buscar
        </button>
        

        {cargando && <p className="buscador-mensaje">Buscando...</p>}

        {error && <p className="buscador-error">{error}</p>}

        {datos && !cargando && (
        <div className="perfil-card">
            <div className="perfil-info">
            <h2 className="perfil-nombre">{datos.name}</h2>
            <p className="perfil-usuario">{datos.username}</p>
            <p className="perfil-website">{datos.website}</p>
            <p className="perfil-address">{datos.address.city}</p>
            <p className="perfil-company">{datos.company.name}</p>
            <p>{datos.phone}</p>
            </div>
        </div>
        )}

    </div>  
    
    );
}

export default home