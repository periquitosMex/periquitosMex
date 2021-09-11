import React from 'react';
import PostImageItem from '../components/GlobalComponents/PostImageItem';
import PostItem from '../components/GlobalComponents/PostItem';
import fotoRevista from '../assets/images/fotoRevista.jpg';

export default function Periquitos() {
  return (
    <div className="container">
      <PostItem
        title="PeriquitosMex - Plataforma de Grupo"
        desc={
          <>
            <p>
              Aqui encontrarán toda la información relevante relacionada a
              PeriquitosMex (Grupo Principal).
            </p>
            <br />
            <p>
              Si deseas ingresar y ser parte de nuestro grupo de Facebook, has
              clic{' '}
              <a
                href="https://www.facebook.com/groups/PeriquitosMexAC"
                target="_blank"
                rel="noreferrer"
                className="text-link bold-text"
              >
                AQUI
              </a>
              .
            </p>
          </>
        }
      />
      <PostImageItem
        title="Evento PMX Marzo 2021"
        desc="En este espacio se publicará toda la información relacionada a nuestro proximo evento."
        image={fotoRevista}
      />
    </div>
  );
}
