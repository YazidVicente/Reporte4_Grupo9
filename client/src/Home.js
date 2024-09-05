import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Mi App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Crear Publicacion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Ver Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Cerrar Sesion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido del Home */}
      <div className="container mt-4">
        <h1>Bienvenido a Mi App</h1>
        <p>Este es el contenido de la página principal.</p>
      </div>
    </div>
  );
}

export default Home;