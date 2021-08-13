import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegAddressCard, FaAward } from 'react-icons/fa';
import { IoHome, IoStorefront, IoCalendar, IoLibrary } from 'react-icons/io5';
import { ImBook } from 'react-icons/im';
import { bool } from 'prop-types';

const NavBarStyle = styled.div`
  height: 5vh;
  width: 100vw;
  background-color: var(--nav-bg);
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: auto;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5vh;
      font-size: 1.5rem;
      letter-spacing: 1px;
      font-weight: bold;
      pointer: cursor;
      &:hover {
        background-color: var(--nav-active);
      }
      &.active {
        background-color: var(--nav-active);
      }
      li {
        color: var(--text-para);
        text-align: center;
        padding: 0 0.5rem;
      }
      .navIcons {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 15vw;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    ul {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      a {
        padding: 0.5rem;
        height: 10.5vh;
        .navResponsive-hideItem {
          display: none;
        }
        .navIcons {
          display: block;
          font-size: 3rem;
        }
      }
    }
  }
`;

export default function NavBar({ open }) {
  return (
    <NavBarStyle open={open}>
      <ul>
        <NavLink to="/" exact>
          <IoHome className="navIcons" />
          <li className="navResponsive-hideItem">Inicio</li>
        </NavLink>
        <NavLink to="tienda">
          <IoStorefront className="navIcons" />
          <li className="navResponsive-hideItem">Tienda</li>
        </NavLink>
        <NavLink to="eventos">
          <IoCalendar className="navIcons" />
          <li className="navResponsive-hideItem">Eventos</li>
        </NavLink>
        <NavLink to="socios">
          <FaRegAddressCard className="navIcons" />
          <li className="navResponsive-hideItem">Socio PMX</li>
        </NavLink>
        <NavLink to="revista">
          <ImBook className="navIcons" />
          <li className="navResponsive-hideItem">Revista PMX</li>
        </NavLink>
        <NavLink to="biblioteca">
          <IoLibrary className="navIcons" />
          <li className="navResponsive-hideItem">Biblioteca PMX</li>
        </NavLink>
        <NavLink to="fama">
          <FaAward className="navIcons" />
          <li className="navResponsive-hideItem">Salón de la fama</li>
        </NavLink>
      </ul>
    </NavBarStyle>
  );
}

NavBar.prototype = {
  open: bool.isRequired,
};
