import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';

function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = Number(id);
    if (userId < 1 || userId > 10) {
      navigate('/notfound');
      return;
    }

    setCargando(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al buscar');
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

  }, [id, navigate]);

  return (
    <div>
      {cargando && <p>Buscando...</p>}
      {error && <p className="buscador-error">{error}</p>}

      {datos && !cargando && (
        <div className='text-serif bg-black rounded-xl'>
          <h1 className='p-5 text-center text-white'>Usuario: {datos.username}</h1>
          <p className='p-3 text-white'>Nombre: {datos.name}</p>
          <p className='p-3 text-white'>Email: {datos.email}</p>
          <p className='p-3 text-white'>Telefono: {datos.phone}</p>
          <p className='p-3 text-white'>Sitio web: {datos.website}</p>
          <p className='p-3 text-white'>Ciudad: {datos.address.city}</p>
          <p className='p-3 text-white'>Empresa: {datos.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default Detalle;