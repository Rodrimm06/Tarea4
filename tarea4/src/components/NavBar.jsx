import { Link } from 'react-router-dom';

function Navbar() {
  const nombre = localStorage.getItem('nombreUsuario');

  return (
    <nav className="bg-indigo-700 text-white px-6 py-3 flex items-center gap-6">
      <span className="font-semibold text-base">Buscador de usuarios</span>
      <div className="flex gap-4 flex-1">
        <Link to="/" className="text-white/80 hover:text-white text-sm">Inicio</Link>
        <Link to="/usuarios" className="text-white/80 hover:text-white text-sm">Usuarios</Link>
      </div>
    </nav>
  );
}

export default Navbar;