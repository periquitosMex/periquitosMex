import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyle = styled.div`
  height: 100vh;
  width: 15vw;
  background-color: var(--nav-bg);
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6vh;
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-weight: bold;
    &:hover {
      background-color: var(--nav-active);
    }
    &.active {
      background-color: var(--nav-active);
    }
  }

  li {
    color: var(--text-para);
  }
`;

export default function NavBar() {
  return (
    <NavBarStyle>
      <ul>
        <NavLink to="/" exact>
          <li>Inicio</li>
        </NavLink>
        <NavLink to="tienda">
          <li>Tienda</li>
        </NavLink>
        <NavLink to="eventos">
          <li>Eventos</li>
        </NavLink>
        <NavLink to="socios">
          <li>Socio PMX</li>
        </NavLink>
        <NavLink to="revista">
          <li>Revista PMX</li>
        </NavLink>
        <NavLink to="biblioteca">
          <li>Biblioteca PMX</li>
        </NavLink>
        <NavLink to="fama">
          <li>Salón de la fama</li>
        </NavLink>
      </ul>
    </NavBarStyle>
  );
}
