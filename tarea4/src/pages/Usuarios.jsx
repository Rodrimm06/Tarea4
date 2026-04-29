import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Usuarios() {

  const navigate = useNavigate();

  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    setCargando(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener usuarios');
        return res.json();
      })
      .then((json) => {
        setDatos(json);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setDatos([]);
        setCargando(false);
      });

  }, []);

  return (
    <div>
      <h1 className='p-5 text-serif text-center'>Lista de Usuarios</h1>

      {cargando && <p>Buscando...</p>}
      {error && <p>{error}</p>}

      {datos.map((user) => (
        <div key={user.id} style={{ marginBottom: '10px', cursor: 'pointer' }}
             onClick={() => navigate(`/usuario/${user.id}`)}
             className='p-5 bg-black text-white text-serif rounded-full'>
          
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Usuarios;