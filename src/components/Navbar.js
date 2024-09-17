import React, { useState } from 'react'
import logo from './../assets/logo.png'
import './styles/Navbar.css'

function Navbar() {
  const [active, setActive] = useState('inicio');
  
  const handleClick = (page) => {
    setActive(page);
  }

  return (
    <header className='contenedor-navbar'>
      <nav className='navbar'>
        <div className='contenedor-logo'>
          <img src={logo} alt='logo' className='logo-inicio' />
        </div>
        <ul className='rutas-navbar'>
          <li className={active === 'inicio' ? 'activo' : ''}>
            <a href="/" onClick={() => handleClick('inicio')}>Inicio</a>
          </li>
          <li className={active === 'mascotas-comunes' ? 'activo' : ''}>
            <a href="/mascotas-comunes" onClick={() => handleClick('mascotas-comunes')}>Mascotas comunes</a>
          </li>
          <li className={active === 'mascotas-exoticas' ? 'activo' : ''}>
            <a href="/mascotas-exoticas" onClick={() => handleClick('mascotas-exoticas')}>Mascotas exoticas</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar